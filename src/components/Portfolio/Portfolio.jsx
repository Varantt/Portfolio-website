import projects from "../../data/projects-data.js";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: "var(--sp-24)" }} />

        <div className="sec-head" data-reveal>
          <h2 className="h2">
            Selected <em>projects.</em>
          </h2>
          <span className="sec-head-note">Built & shipped</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectItem {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
