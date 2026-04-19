import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/projects-data";
import "./project.css";

export default function Project() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = data.find((p) => p.title === name);
    setProject(found || null);
  }, [name]);

  if (!project) {
    return (
      <div className="project-detail-empty">
        <p className="eyebrow">Project not found</p>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="wrap">
        <div className="project-detail__header">
          <p className="eyebrow" style={{ marginBottom: "var(--sp-3)" }}>Project</p>
          <h1 className="h2">{project.title}</h1>
        </div>

        <div className="project-detail__body">
          <div className="project-detail__stack">
            <p className="eyebrow" style={{ marginBottom: "var(--sp-4)" }}>Stack used</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.stack.map((s) => (
                <span key={s} className="skill-pill primary">{s}</span>
              ))}
            </div>
          </div>

          <div className="project-detail__desc">
            <p style={{ color: "var(--ink-2)", lineHeight: 1.7, marginBottom: "var(--sp-6)" }}>
              {project.description}
            </p>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" data-cursor="hover">
                Visit website <span className="btn-arrow">↗</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
