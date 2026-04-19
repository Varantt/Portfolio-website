import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import cv from "/assets/CV-Varant-Kalemkerian-Software-Developer.pdf";
import "./hero.css";

// em wraps the primary accent part; rest is plain text in the same .num div
const STATS = [
  { em: "4",      rest: "+ yrs", label: "Building for the web" },
  { em: "30",     rest: "+",     label: "Tools & stacks shipped" },
  { em: "Remote", rest: "",      label: "Working from Lebanon" },
  { em: null,     rest: "24",    label: "Years old, still curious" },
];

function useBeirutTime() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Beirut",
      hour: "2-digit",
      minute: "2-digit",
    });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useBeirutTime();

  return (
    <section id="hero" className="hero-section">
      <span className="hero-index" aria-hidden="true">
        Varant K. / Portfolio · 2026 — No. 002
      </span>

      <div className="wrap">
        {/* 3 meta rows — matches design */}
        <div className="hero-meta">
          <div className="hero-meta__row">
            <span className="hero-status__dot" aria-hidden="true" />
            <span className="eyebrow">Available · Remote</span>
          </div>
          <div className="hero-meta__row eyebrow">
            — Technical Operations · Est. 2021
          </div>
          <div className="hero-meta__row eyebrow" aria-label="Local time in Beirut">
            — <span className="hero-clock">{time}</span> local (Beirut)
          </div>
        </div>

        {/* Full-width headline */}
        <h1 className="hero-headline display">
          <span className="hero-line">
            <span style={{ animationDelay: "0s" }}>I make the</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.12s" }}>
              <em>technical</em> parts
            </span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.24s" }}>actually ship.</span>
          </span>
        </h1>

        {/* Grid: intentionally empty left, description + CTAs right */}
        <div className="hero-grid">
          <div aria-hidden="true" />

          <div className="hero-right">
            <p className="hero-desc">
              I'm <strong>Varant</strong> — a technical operations manager
              working remotely from Lebanon with a Langley, BC–based team.
              I build, integrate and automate the things that keep modern
              web businesses running.
            </p>
            <div className="hero-actions">
              <HashLink
                to="/#portfolio"
                className="btn btn-primary"
                data-cursor="hover"
                data-magnet
              >
                See the work <span className="btn-arrow">↓</span>
              </HashLink>
              <a
                href={cv}
                download="CV-Varant-Kalemkerian-Software-Developer"
                className="btn btn-ghost"
                data-cursor="hover"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Stats — full width, 4 columns */}
        <div className="hero-stats" data-reveal>
          {STATS.map(({ em, rest, label }) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat__num">
                {em ? <em>{em}</em> : null}
                {rest}
              </div>
              <div className="hero-stat__lbl eyebrow">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
