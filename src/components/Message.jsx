import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "var(--sp-6)",
        padding: "var(--sp-16)",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: "48px" }}>✓</span>
      <h1
        className="h2"
        style={{ color: "var(--ink)" }}
      >
        Message sent.
      </h1>
      <p className="lede">I'll get back to you within a day.</p>
      <Link to="/" className="btn btn-ghost" style={{ marginTop: "var(--sp-4)" }}>
        ← Back home
      </Link>
    </div>
  );
}
