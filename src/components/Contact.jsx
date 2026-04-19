import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const form = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_wr38wju",
      "template_39rbfk9",
      form.current,
      "bXQK0o-7V-kRbDiXx"
    );
    window.location.replace("/message");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: "var(--sp-24)" }} />

        <div data-reveal>
          <p className="eyebrow" style={{ marginBottom: "var(--sp-3)" }}>§ 05 — Contact</p>
          <h2 className="h2" style={{ marginBottom: "var(--sp-12)" }}>
            Let's build <em>something.</em>
          </h2>
        </div>

        <div className="contact-card" data-reveal>
          {/* Left */}
          <div className="contact-left">
            <p className="eyebrow" style={{ marginBottom: "var(--sp-3)" }}>
              Start a <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>conversation.</em>
            </p>
            <p className="lede" style={{ marginBottom: "var(--sp-8)" }}>
              Client work, freelance, collaborations, the occasional weird idea
              — I read everything.
            </p>

            <div className="contact-info">
              <div className="contact-info__row">
                <span className="eyebrow">Email</span>
                <a
                  href="mailto:varantkalemkerian@gmail.com"
                  className="contact-info__val"
                  data-cursor="hover"
                >
                  varantkalemkerian@gmail.com
                </a>
              </div>
              <div className="contact-info__row">
                <span className="eyebrow">Based</span>
                <span className="contact-info__val">Lebanon · Working remotely</span>
              </div>
              <div className="contact-info__row">
                <span className="eyebrow">Elsewhere</span>
                <div className="contact-social">
                  <Link
                    to="https://github.com/Varantt"
                    target="_blank"
                    className="social-link"
                    data-cursor="hover"
                  >
                    GitHub
                  </Link>
                  <span aria-hidden="true" style={{ color: "var(--rule-2)" }}>·</span>
                  <Link
                    to="https://www.linkedin.com/in/varant-kalemkerian-b76b40200/"
                    target="_blank"
                    className="social-link"
                    data-cursor="hover"
                  >
                    LinkedIn
                  </Link>
                  <span aria-hidden="true" style={{ color: "var(--rule-2)" }}>·</span>
                  <Link
                    to="https://wa.me/96178947084"
                    target="_blank"
                    className="social-link"
                    data-cursor="hover"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            <p className="eyebrow" style={{ marginTop: "var(--sp-8)", color: "var(--ink-3)" }}>
              Replies usually within a day
            </p>
          </div>

          {/* Right: Form */}
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Varant Kalemkerian"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field" style={{ flex: 1 }}>
              <label htmlFor="message">What are you building?</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or question..."
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              data-cursor="hover"
              data-magnet
              style={{ alignSelf: "flex-start", marginTop: "var(--sp-2)" }}
            >
              Send message
              <span className="btn-arrow">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
