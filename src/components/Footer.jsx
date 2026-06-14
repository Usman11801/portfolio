import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © 2026 {profile.name} · {profile.title}
        </span>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
