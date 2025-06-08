export default function AboutPage() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "2rem auto",
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderRadius: "8px",
        border: "1px solid #2a2a2a",
        boxShadow: "0 0 15px rgba(0, 255, 225, 0.2)",
      }}
    >
      <h1 style={{ color: "#00ffe1", marginBottom: "1rem" }}>About FlowMotion</h1>
      <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "1.1rem", lineHeight: "1.6" }}>
        FlowMotion is an AI-powered video enhancement tool that allows users to convert ordinary footage
        into high-frame-rate, smooth slow-motion videos. Designed for creators, editors, and visual
        storytellers.
      </p>
      <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "1.1rem", lineHeight: "1.6" }}>
        I have used models like RIFE and Real-ESRGAN to deliver motion interpolation and
        upscaling. FlowMotion is ideal for stylized videos like anime, gaming, or cinematic edits.
      </p>
    </main>
  );
}
