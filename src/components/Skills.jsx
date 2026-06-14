import { skills } from "../data";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2>Core competencies</h2>
          <p>Proficiency built across dozens of production projects and industries.</p>
        </div>
        <div className="skills-grid reveal">
          {skills.map((s) => (
            <div className="skill-row" key={s.name}>
              <div className="skill-top">
                <span>{s.name}</span>
                <span className="pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
