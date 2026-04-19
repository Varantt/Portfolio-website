import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./footer.css";

const SOCIAL = [
  { href: "mailto:varantkalemkerian@gmail.com", label: "Email" },
  { href: "https://github.com/Varantt",         label: "GitHub" },
  { href: "https://www.linkedin.com/in/varant-kalemkerian-b76b40200/", label: "LinkedIn" },
  { href: "https://wa.me/96178947084",           label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer id="footer" className="vk-footer">
      <div className="wrap">
        <div className="divider" />

        {/* Display heading */}
        <div className="vk-footer__headline">
          <p className="foot-big">
            <em>Let's</em> ship<br />something good.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="divider" />
        <div className="vk-footer__bar">
          <span className="eyebrow">
            © {new Date().getFullYear()} Varant Kalemkerian — All rights reserved
          </span>

          <nav className="vk-footer__links" aria-label="Footer links">
            {SOCIAL.map(({ href, label }) => (
              href.startsWith("mailto") ? (
                <a key={label} href={href} className="vk-footer__link" data-cursor="hover">{label}</a>
              ) : (
                <Link key={label} to={href} target="_blank" rel="noopener noreferrer" className="vk-footer__link" data-cursor="hover">{label}</Link>
              )
            ))}
            <span aria-hidden="true" className="vk-footer__sep">·</span>
            <HashLink to="#hero" className="vk-footer__link" data-cursor="hover">Back to top ↑</HashLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
