import { skillCategories } from "../../data/skills-data";
import SkillCategory from "../Skill/Skill";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: "var(--sp-24)" }} />

        <div className="sec-head" data-reveal>
          <h2 className="h2">
            Tools I <em>actually</em> reach for.
          </h2>
          <span className="sec-head-note">Grouped by what they do, not what's trendy</span>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
