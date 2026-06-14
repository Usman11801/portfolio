import { profile } from "../data";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's build something great</h2>
          <p>
            Whether it's a CRM, a dashboard, a mobile app or an AI product — I'm
            ready to help. Reach out and let's talk about your project.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              ✉️ Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              in LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
          <div className="contact-info">
            <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>📞 {profile.phone}</a>
            <span>📍 {profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
