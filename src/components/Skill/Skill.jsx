import "./skill.css";

export default function SkillCategory({ id, label, title, primary, additional }) {
  return (
    <div className="skill-cat" data-reveal>
      <div className="skill-cat__header">
        <span className="eyebrow">{id} — {label}</span>
      </div>
      <h3 className="skill-cat__title">{title}</h3>
      <div className="skill-cat__pills">
        {primary.map((s) => (
          <span key={s} className="skill-pill primary">{s}</span>
        ))}
        {additional.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </div>
  );
}
