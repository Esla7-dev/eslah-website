const steps = [
  {
    title: "01 — Discover",
    desc: "Align on goals, constraints, and approval requirements (scope, timeline, stakeholders).",
  },
  {
    title: "02 — Concept",
    desc: "Explore design directions and validate early decisions through clear visuals and options.",
  },
  {
    title: "03 — Design Development",
    desc: "Refine the chosen direction with coordinated layouts, details, and technical intent.",
  },
  {
    title: "04 — Documentation",
    desc: "Prepare structured outputs ready for coordination and implementation (drawings / model).",
  },
  {
    title: "05 — Support",
    desc: "Iterate with the client and project team to reduce rework and keep delivery on track.",
  },
];

export default function Process() {
  return (
    <section className="px-8 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light">How we work</h2>
        <p className="mt-3 text-white/60 max-w-2xl">
          A practical workflow designed to reduce ambiguity, speed up approvals, and deliver coordinated outcomes.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {steps.map((st) => (
            <div key={st.title} className="rounded-2xl border border-white/10 p-6">
              <div className="text-sm text-white/50">{st.title}</div>
              <p className="mt-3 text-sm text-white/70">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
