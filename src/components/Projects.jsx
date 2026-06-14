import { useMemo, useState } from "react";
import { projects, categories } from "../data";

// Live homepage screenshot for projects that have a public URL.
const shot = (url) =>
  `https://image.thum.io/get/width/1200/crop/820/noanimate/${url}`;

const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

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
          <h2>Projects by field &amp; industry</h2>
          <p>
            {projects.length}+ projects across {categories.length - 1}{" "}
            industries — filter by field, then click any card to open the live
            site.
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
          {filtered.map((p) => {
            const Tag = p.link ? "a" : "div";
            const linkProps = p.link
              ? { href: p.link, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Tag
                {...linkProps}
                key={p.name}
                className={`project-card ${p.link ? "is-link" : ""}`}
                style={{ "--proj-accent": p.accent }}
              >
                <div className="project-media">
                  <div className="project-media-ph">{initials(p.name)}</div>
                  {p.link && (
                    <img
                      src={shot(p.link)}
                      alt={`${p.name} website screenshot`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <span className="project-tag">{p.category}</span>
                </div>

                <div className="project-body">
                  <h3>{p.name}</h3>
                  <div className="project-field">{p.field}</div>
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
                  <span className={`project-link ${p.link ? "" : "disabled"}`}>
                    {p.link ? "Visit project →" : "🔒 Private / NDA project"}
                  </span>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
