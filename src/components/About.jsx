import { profile, education } from "../data";

const points = [
  "8+ years building scalable, secure web & mobile apps",
  "Expert in MERN, MEAN & MEVN stacks",
  "RESTful API design & microservice architecture",
  "Server-side rendering & SEO with Next.js",
  "Production AI/LLM, RAG & computer-vision integrations",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container reveal">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <span className="eyebrow">About Me</span>
          <h2>A developer who ships end-to-end products</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>{profile.summary}</p>
            <ul className="about-points">
              {points.map((p) => (
                <li key={p}>
                  <span className="check">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="edu-card">
            <h4>🎓 Education</h4>
            <p className="school">{education.school}</p>
            <p className="row">{education.degree}</p>
            <p className="row">{education.period} · {education.specialization}</p>
            <div className="edu-lang">
              <h4>🌐 Languages</h4>
              <p className="row">English (Fluent) · Urdu (Fluent)</p>
              <p className="row" style={{ marginTop: 10 }}>
                ⚡ Availability: <strong style={{ color: "var(--text)" }}>Immediate</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
