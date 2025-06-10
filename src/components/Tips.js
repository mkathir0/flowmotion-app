"use client";
import { useState, useEffect } from "react";

const tips = [
  "Use slow-motion mode for sports replays.",
  "Perfect for edits and transitions.",
  "Export in 60 FPS for buttery-smooth results.",
  "Combine with Real-ESRGAN for upscaling.",
  "Batch-process clips for efficient editing."
];

export default function Tips() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", background: "#1a1a1a", borderRadius: "8px" }}>
      <h3 style={{ color: "#00ffe1" }}>💡 FlowMotion Tip</h3>
      <p style={{ color: "#ccc", marginTop: "0.5rem" }}>{tips[tipIndex]}</p>
    </div>
  );
}