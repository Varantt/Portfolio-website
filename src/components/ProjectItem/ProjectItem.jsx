import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./project-item.css";

export default function ProjectItem({ title, imgUrl, id, stack, link }) {
  const cardRef = useRef(null);

  // 3D tilt on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const onLeave = () => {
      card.style.transform = "";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="project-card"
      data-reveal
      style={{ transitionDelay: `${id * 60}ms` }}
    >
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
        data-cursor="hover"
        data-cursor-label="view"
      >
        {/* Image */}
        {imgUrl && (
          <div className="project-card__img">
            <img src={imgUrl} alt={title} />
          </div>
        )}

        {/* Content */}
        <div className="project-card__body">
          <div className="project-card__meta">
            <h3 className="project-card__title">{title}</h3>
            <span className="project-card__arrow">↗</span>
          </div>

          <div className="project-card__tags">
            {stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
