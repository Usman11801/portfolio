import { profile } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">
            <span className="dot" /> Available for new projects
          </span>
          <h1>
            Hi, I'm Muhammad Usman —<br />
            <span className="gradient-text">Full Stack & AI Developer</span>
          </h1>
          <p className="role">{profile.title} · {profile.experienceYears} Years Experience</p>
          <p className="lead">{profile.tagline} From CRMs and dashboards to multi-LLM AI products — I design, build and ship complete, production-ready applications.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#demo" className="btn btn-ghost">
              Get a Free 1-Day Demo
            </a>
          </div>
          <div className="hero-meta">
            <span>📍 {profile.location}</span>
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              🔗 GitHub
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-avatar">MU</div>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.title}</p>
          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}
