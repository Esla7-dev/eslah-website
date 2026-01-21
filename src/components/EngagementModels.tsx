const models = [
  {
    title: "Concept Package",
    forWho: "Best for early direction + fast approvals",
    items: ["Design direction options", "Massing / zoning clarity", "Presentation visuals for decision-making"],
  },
  {
    title: "Design Development",
    forWho: "Best for refining a chosen concept into coordinated design",
    items: ["Coordinated layouts + key details", "Material direction alignment", "Iteration management with stakeholders"],
  },
  {
    title: "Documentation Support",
    forWho: "Best for structured outputs ready for coordination and implementation",
    items: ["Drawing set structure (by stage)", "Model-based coordination support", "Deliverables aligned to review milestones"],
  },
];

export default function EngagementModels() {
  return (
    <section className="px-8 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light">Engagement models</h2>
            <p className="mt-3 text-white/60 max-w-2xl">
              Pick the stage you need — we'll align scope, deliverables, and timeline around approvals.
            </p>
          </div>

          <a href="/contact" className="bg-white text-black px-6 py-3 rounded text-sm w-fit">
            Request a Proposal
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-medium">{m.title}</h3>
              <p className="mt-2 text-sm text-white/60">{m.forWho}</p>

              <ul className="mt-5 text-sm text-white/70 list-disc pl-5 space-y-1">
                {m.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="mt-6">
                <a href="/contact" className="border border-white/20 px-5 py-3 rounded text-sm inline-flex">
                  Discuss this package
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6">
          <div className="text-sm text-white/50">Note</div>
          <p className="mt-2 text-sm text-white/70">
            Deliverables can be tailored by project type (villa, duplex, commercial) and client requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
