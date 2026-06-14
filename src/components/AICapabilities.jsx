import { aiCapabilities } from "../data";

export default function AICapabilities() {
  return (
    <section className="ai" id="ai">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">AI Engineering</span>
          <h2>AI things we can build together</h2>
          <p>
            Real, production AI — not demos. From multi-LLM chatbots and RAG
            pipelines to computer vision and voice agents.
          </p>
        </div>
        <div className="ai-grid">
          {aiCapabilities.map((a) => (
            <div className="ai-card reveal" key={a.title}>
              <div className="ai-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
