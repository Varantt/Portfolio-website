import "./skill.css";

export const Skill = ({ title, primary = [], additional = [] }) => {
  return (
    <div className="skill-card shadow-custom dark:shadow-custom-dark flex flex-col gap-4 rounded border border-offWhite dark:border-blackRaisin bg-white dark:bg-transparent border-solid p-6">
      <h3 className="text-lg font-bold text-lightBlue">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {primary.map((skill) => (
          <span
            key={skill}
            className="text-xs font-semibold text-offWhite bg-lightBlue rounded px-2 py-1"
          >
            {skill}
          </span>
        ))}
        {additional.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-blackRaisin dark:text-offWhite bg-offWhite dark:bg-blackRaisin rounded px-2 py-1 shadow-custom dark:shadow-custom-dark"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
