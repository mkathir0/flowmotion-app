export default function ContactPage() {
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
      <h1 style={{ color: "#00ffe1", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ marginTop: "1rem", color: "#ccc", fontSize: "1.1rem" }}>
        Got questions, feedback, or want to collaborate? Reach out to us!
      </p>
      <ul
        style={{
          marginTop: "1.5rem",
          listStyle: "none",
          padding: 0,
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        <li>
          <strong style={{ color: "#00ffe1" }}>Email:</strong>{" "}
          <a
            href="mailto:flowmotion@support.ai"
            style={{ color: "#00cbbf", textDecoration: "underline" }}
          >
            flowmotion@support.ai
          </a>
        </li>
        <li>
          <strong style={{ color: "#00ffe1" }}>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/flowmotion_editing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00cbbf", textDecoration: "underline" }}
          >
            @flowmotion_editing
          </a>
        </li>
        <li>
          <strong style={{ color: "#00ffe1" }}>Twitter:</strong>{" "}
          <a
            href="https://twitter.com/flowmotion_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00cbbf", textDecoration: "underline" }}
          >
            @flowmotion_ai
          </a>
        </li>
      </ul>
    </main>
  );
}
