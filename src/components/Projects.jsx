import { useMemo, useState } from "react";
import { projects, categories } from "../data";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2>Projects by field & industry</h2>
          <p>
            {projects.length}+ delivered projects — filter by industry to explore
            the work, the stack and the results.
          </p>
        </div>

        <div className="filter-bar reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty-note">
            More projects in this field available on request.
          </p>
        )}

        <div className="projects-grid">
          {filtered.map((p) => (
            <article
              className="project-card"
              key={p.name}
              style={{ "--proj-accent": p.accent }}
            >
              <div className="project-top">
                <div>
                  <h3>{p.name}</h3>
                  <div className="project-field">{p.field}</div>
                </div>
                <span className="project-tag">{p.category}</span>
              </div>
              <p className="summary">{p.summary}</p>
              <ul className="feature-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Visit project →
                </a>
              ) : (
                <span className="project-link disabled">
                  🔒 Private / NDA project
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
