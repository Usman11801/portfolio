import { experience } from "../data";

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Where I've worked</h2>
        </div>
        <div className="timeline reveal">
          {experience.map((e) => (
            <div className="exp-item" key={e.company}>
              <div className="exp-head">
                <div>
                  <h3>{e.role}</h3>
                  <span className="company">{e.company}</span>
                </div>
                <span className="period">{e.period}</span>
              </div>
              <ul className="exp-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
