import "./experience.css";

export default function Experience({ era, title, titleAccent, company, type, role, isCurrent, description, tags }) {
  const renderTitle = () => {
    if (!titleAccent) return title;
    const parts = title.split(titleAccent);
    return (
      <>
        {parts[0]}
        <em>{titleAccent}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <article className="job" data-reveal>
      {/* Date / meta column */}
      <div className="job__date">
        <span className="eyebrow">{era}</span>
        <div className="job__badges">
          {isCurrent && <span className="job__badge job__badge--current">Current</span>}
          {type && (
            <span className={`job__badge job__badge--type${type === "Full Time" ? " job__badge--fulltime" : ""}`}>
              {type}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="job__body">
        <h3 className="job__title">{renderTitle()}</h3>
        {company && (
          <p className="job__company eyebrow" style={{ color: "var(--accent-ink)", marginTop: "var(--sp-1)" }}>
            {company}
          </p>
        )}
        <p className="job__role eyebrow" style={{ color: "var(--ink-3)", marginTop: "var(--sp-1)" }}>
          {role}
        </p>
        <p className="job__desc">{description}</p>
        <div className="job__tags">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="job__arrow" aria-hidden="true">↗</div>
    </article>
  );
}
