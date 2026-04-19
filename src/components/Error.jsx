import { Link } from "react-router-dom";

export default function Error() {
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
      <p className="eyebrow">404</p>
      <h1 className="h2" style={{ color: "var(--ink)" }}>
        Page not found.
      </h1>
      <p className="lede">That URL doesn't exist.</p>
      <Link to="/" className="btn btn-ghost" style={{ marginTop: "var(--sp-4)" }}>
        ← Back home
      </Link>
    </div>
  );
}
