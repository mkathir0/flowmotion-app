"use client";
import { useState, useEffect } from "react";

export default function VideoSettings() {
  const [fps, setFps] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (fps === 30) setMessage("✅ Smooth playback for standard videos.");
    else if (fps === 48) setMessage("🎬 Great for cinematic slow-motion edits.");
    else if (fps === 90) setMessage("⚡ Ultra-smooth motion, best for action shots.");
    else setMessage("");
  }, [fps]);

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h3 style={{ color: "#00ffe1" }}>Select Target FPS</h3>
      <div style={{ margin: "1rem 0" }}>
        {[30, 48, 60].map((option) => (
          <button
            key={option}
            onClick={() => setFps(option)}
            style={{
              margin: "0 0.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: fps === option ? "#00ffe1" : "#1e1e1e",
              color: fps === option ? "#000" : "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background 0.3s"
            }}
          >
            {option} FPS
          </button>
        ))}
      </div>
      {fps && <p style={{ color: "#ccc" }}>{message}</p>}
    </div>
  );
}
