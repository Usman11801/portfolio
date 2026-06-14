import { industries } from "../data";

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Industries</span>
          <h2>Fields I build for</h2>
          <p>
            Domain experience across a wide range of industries — your field is
            probably already on this list.
          </p>
        </div>
        <div className="ind-grid reveal">
          {industries.map((i) => (
            <div className="ind-card" key={i.name}>
              <span className="emo">{i.icon}</span>
              {i.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
