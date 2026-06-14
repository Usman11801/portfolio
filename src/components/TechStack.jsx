import { techStack } from "../data";

export default function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Tech Stack</span>
          <h2>Technologies I work with</h2>
          <p>A full-stack toolkit spanning frontend, backend, databases, AI and DevOps.</p>
        </div>
        <div className="stack-grid">
          {techStack.map((g) => (
            <div className="stack-card reveal" key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
