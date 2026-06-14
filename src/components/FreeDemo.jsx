import { demoSteps, demoIncludes, profile } from "../data";

export default function FreeDemo() {
  return (
    <section id="demo">
      <div className="container">
        <div className="demo-wrap reveal">
          <span className="demo-badge">⚡ FREE · 1-DAY DELIVERY</span>
          <h2>See your website live in one day — completely free</h2>
          <p>
            Not sure what your idea will look like? I'll build you a real,
            working demo of your website or app in a single working day — at no
            cost. You only move forward once you love it.
          </p>

          <div className="demo-steps">
            {demoSteps.map((s) => (
              <div className="demo-step" key={s.step}>
                <div className="num">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="demo-bottom">
            <div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 18 }}>
                What your free demo includes
              </h3>
              <ul className="demo-includes">
                {demoIncludes.map((d) => (
                  <li key={d}>
                    <span className="check">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${profile.email}?subject=Free%201-Day%20Demo%20Request`}
                className="btn btn-primary"
                style={{ marginTop: 28 }}
              >
                Claim My Free Demo →
              </a>
            </div>

            <div className="demo-mock" aria-hidden="true">
              <div className="bar">
                <span />
                <span />
                <span />
              </div>
              <div className="body">
                <div className="mock-line w-40" />
                <div className="mock-line w-90" />
                <div className="mock-line w-60" />
                <div className="mock-cards">
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
