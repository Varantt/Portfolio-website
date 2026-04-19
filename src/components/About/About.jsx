import "./about.css";

const WHAT_I_DO = [
  "Elementor & WordPress builds — the serious kind",
  "GoHighLevel — forms, fields, integrations, email",
  "API integrations & webhook-triggered automations",
  "n8n workflows to cut hours off repeat work",
  "Custom plugins for speed & custom behaviour",
  "Site migrations, DNS, A-records, host transfers",
  "Apps built quickly with Claude Code",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: "var(--sp-24)" }} />

        <div className="about-header" data-reveal>
          <p className="eyebrow" style={{ marginBottom: "var(--sp-3)" }}>
            § 01 — About
          </p>
          <h2 className="h2">
            A builder who speaks{" "}
            <em>operations</em>,{" "}
            <em>code</em>, and{" "}
            <em>client.</em>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left: text */}
          <div className="about-text" data-reveal>
            <p className="lede" style={{ marginBottom: "var(--sp-6)" }}>
              I'm a full-stack developer and technical operations manager with
              4+ years of building for the web. I enjoy working across the
              stack — from React front-ends and custom WordPress plugins to API
              integrations and automation workflows.
            </p>
            <p style={{ color: "var(--ink-2)", lineHeight: 1.65, marginBottom: "var(--sp-4)" }}>
              Right now I run the technical side of a marketing agency working
              remotely with a Langley, BC team. If it touches code, a DNS
              record, or a webhook it tends to land on my desk.
            </p>
            <p style={{ color: "var(--ink-2)", lineHeight: 1.65, marginBottom: "var(--sp-8)" }}>
              Outside of web work, I have a growing interest in{" "}
              <strong style={{ color: "var(--ink)" }}>Data Science and Machine Learning</strong>{" "}
              — exploring how data can drive smarter decisions and automation beyond what traditional code alone can do.
            </p>

            <p className="eyebrow" style={{ marginBottom: "var(--sp-4)" }}>
              What I actually do
            </p>
            <ul className="about-list">
              {WHAT_I_DO.map((item) => (
                <li key={item} className="about-list__item">
                  <span className="about-list__bullet" aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="eyebrow" style={{ marginTop: "var(--sp-8)", color: "var(--ink-3)" }}>
              Remote · Based in Lebanon &nbsp;|&nbsp; Available for contract &amp; full-time
            </p>
          </div>

          {/* Right: Quick Facts card */}
          <div data-reveal>
            <div className="side-card about-facts-card">
              <p className="eyebrow" style={{ marginBottom: "var(--sp-6)" }}>
                Quick facts
              </p>

              <div className="facts-grid">
                <div className="fact">
                  <span className="fact__key">Role</span>
                  <span className="fact__value">
                    Technical Operations <em>Manager</em>
                  </span>
                </div>
                <div className="fact">
                  <span className="fact__key">Company</span>
                  <span className="fact__value">King Tide <em>Marketing</em></span>
                </div>
                <div className="fact">
                  <span className="fact__key">Since</span>
                  <span className="fact__value">Sept <em>2025</em></span>
                </div>
                <div className="fact">
                  <span className="fact__key">Based</span>
                  <span className="fact__value">Lebanon · <em>Remote</em></span>
                </div>
                <div className="fact">
                  <span className="fact__key">Age</span>
                  <span className="fact__value"><em>24</em></span>
                </div>
                <div className="fact">
                  <span className="fact__key">Status</span>
                  <span className="fact__value" style={{ color: "#3bcf7e" }}>
                    Open to chat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
