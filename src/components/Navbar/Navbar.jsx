import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/#about",         num: "01", text: "About" },
  { to: "/#workExperience", num: "02", text: "Experience" },
  { to: "/#skills",        num: "03", text: "Stack" },
  { to: "/#portfolio",     num: "04", text: "Work" },
  { to: "/#contact",       num: "05", text: "Contact" },
];

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const nav = useRef(null);
  const location = useLocation();

  const handleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  const handleBurger = useCallback(() => setIsBurgerOpen((s) => !s), []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => { setIsBurgerOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isBurgerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isBurgerOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav ref={nav} className={`vk-nav${scrolled ? " vk-nav--scrolled" : ""}`}>
        <div className="wrap vk-nav__inner">
          {/* Logo */}
          <Link to="/" className="vk-nav__logo" data-cursor="hover">
            <span className="vk-nav__mark" aria-hidden="true">
              <em>v</em>
            </span>
            <span className="vk-nav__name">Varant Kalemkerian</span>
          </Link>

          {/* Desktop links */}
          <ul className="vk-nav__links" role="list">
            {NAV_LINKS.map(({ to, num, text }) => (
              <li key={to}>
                <HashLink to={to} className="vk-nav__link" data-cursor="hover">
                  <span className="vk-nav__num">{num}</span>
                  {text}
                </HashLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="vk-nav__actions">
            <button
              className="btn-icon"
              onClick={handleDarkMode}
              aria-label="Toggle theme"
              data-cursor="hover"
            >
              {isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1"  x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12"  x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            <HashLink
              to="/#contact"
              className="btn btn-primary vk-nav__cta"
              data-cursor="hover"
              data-magnet
            >
              Get in touch
              <span className="btn-arrow">↗</span>
            </HashLink>

            {/* Mobile hamburger */}
            <button
              className="vk-nav__burger"
              onClick={handleBurger}
              aria-label={isBurgerOpen ? "Close menu" : "Open menu"}
              aria-expanded={isBurgerOpen}
            >
              <span className={`vk-nav__burger-bar${isBurgerOpen ? " open" : ""}`} />
              <span className={`vk-nav__burger-bar${isBurgerOpen ? " open" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`vk-mobile-menu${isBurgerOpen ? " open" : ""}`} aria-hidden={!isBurgerOpen}>
        <ul role="list">
          {NAV_LINKS.map(({ to, num, text }) => (
            <li key={to}>
              <HashLink to={to} className="vk-mobile-menu__link">
                <span className="vk-mobile-menu__num">{num}</span>
                {text}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
