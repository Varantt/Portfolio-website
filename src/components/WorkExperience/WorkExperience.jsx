import Experience from "../Experience/Experience";
import { eData } from "../../data/jobs-data";
import "./work-experience.css";

export default function WorkExperience() {
  // Most recent first
  const jobs = [...eData].reverse();

  return (
    <section id="workExperience" className="experience-section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: "var(--sp-24)" }} />

        <div className="sec-head" data-reveal>
          <h2 className="h2">
            Where I've been <em>shipping.</em>
          </h2>
          <span className="sec-head-note">Most recent first</span>
        </div>

        <div className="timeline">
          {jobs.map((job) => (
            <Experience key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
