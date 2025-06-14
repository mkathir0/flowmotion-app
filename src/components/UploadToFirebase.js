"use client";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";

export default function UploadToFirebase() {
  const [files, setFiles] = useState([]);
  const [uploadStatuses, setUploadStatuses] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // allow multiple files
    setUploadStatuses([]);
  };

  const handleUpload = () => {
    if (!files.length) return;

    const newStatuses = [];

    files.forEach((file, index) => {
      const storageRef = ref(storage, `videos/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      newStatuses[index] = { fileName: file.name, progress: 0, url: "", error: "", uploading: true };
      setUploadStatuses([...newStatuses]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          newStatuses[index] = {
            ...newStatuses[index],
            progress: prog,
          };
          setUploadStatuses([...newStatuses]);
        },
        (err) => {
          newStatuses[index] = {
            ...newStatuses[index],
            error: err.message,
            uploading: false,
          };
          setUploadStatuses([...newStatuses]);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            newStatuses[index] = {
              ...newStatuses[index],
              url: downloadURL,
              uploading: false,
            };
            setUploadStatuses([...newStatuses]);
          });
        }
      );
    });
  };

  return (
    <div className="upload-section" style={{ marginTop: "1rem", paddingBottom: "3rem" }}>
      <h2 style={{ color: "#00ffe1", marginBottom: "1rem" }}>Upload Your Clips</h2>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        style={{
          backgroundColor: "#1e1e1e",
          color: "#ededed",
          padding: "0.75rem 1rem",
          border: "1px solid #2a2a2a",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      />

      <br />

      <button
        onClick={handleUpload}
        disabled={!files.length}
        style={{
          backgroundColor: "#00ffe1",
          color: "#000",
          border: "none",
          padding: "0.75rem 2rem",
          fontSize: "1.1rem",
          borderRadius: "6px",
          cursor: files.length ? "pointer" : "not-allowed",
          transition: "background 0.3s",
          marginBottom: "1rem",
        }}
      >
        Upload to Firebase
      </button>

      {uploadStatuses.map((status, index) => (
        <div key={index} style={{ marginTop: "1rem", color: "#ccc" }}>
          <p>{status.fileName}</p>
          {status.uploading && <p>Uploading: {Math.round(status.progress)}%</p>}
          {status.error && <p style={{ color: "#ff4d4d" }}>❌ {status.error}</p>}
          {status.url && (
            <p>
              ✅ Uploaded:{" "}
              <a href={status.url} target="_blank" rel="noopener noreferrer" style={{ color: "#00ffe1" }}>
                View Video
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
