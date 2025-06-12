"use client";

import { useState, useEffect } from "react";

export default function AIHelper() {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setAiResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: userInput }),
      });

      const data = await res.json();
      setAiResponse(res.ok ? data.reply : "❌ Error: " + (data.error || "Something went wrong."));
    } catch (err) {
      setAiResponse("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Enter") handleAskAI();
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [userInput]);

  return (
    <section className="container">
      <h2 style={{ color: "#00ffe1", marginBottom: "1rem" }}>🤖 Ask FlowMotion AI</h2>
      <p style={{ color: "#ccc", fontSize: "1rem", marginBottom: "1.5rem" }}>
        Get advice on FPS settings, slow-motion effects, or editing tips.
      </p>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="E.g., What FPS should I use for dramatic slow motion?"
        rows={4}
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #333",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          marginBottom: "1rem",
        }}
      />

      <div className="cta">
        <button
          onClick={handleAskAI}
          disabled={loading}
          style={{
            backgroundColor: "#00ffe1",
            color: "#000",
            border: "none",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {aiResponse && (
        <div
          style={{
            marginTop: "2rem",
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
            border: "1px solid #2a2a2a",
            padding: "1rem",
            color: "#ccc",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#00ffe1" }}>Response:</strong>
          <p style={{ marginTop: "0.5rem", whiteSpace: "pre-wrap" }}>{aiResponse}</p>
        </div>
      )}
    </section>
  );
}
