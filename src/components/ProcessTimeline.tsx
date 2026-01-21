const steps = [
  {
    title: "Discover",
    subtitle: "Goals • constraints • approvals",
  },
  {
    title: "Concept",
    subtitle: "Options • direction • visuals",
  },
  {
    title: "Develop",
    subtitle: "Coordination • details • alignment",
  },
  {
    title: "Document",
    subtitle: "Structured outputs • ready for review",
  },
  {
    title: "Support",
    subtitle: "Iterations • handoff • continuity",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="px-8 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-light">Delivery timeline</h2>
            <p className="mt-2 text-white/60 max-w-2xl text-sm">
              A clear path from first call to coordinated outputs — designed to speed up approvals and reduce rework.
            </p>
          </div>

          <a href="/services" className="hidden md:inline-flex text-sm border border-white/20 px-4 py-2 rounded">
            See deliverables
          </a>
        </div>

        {/* Timeline */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, idx) => (
              <div key={s.title} className="relative rounded-2xl border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-white/50">Step {idx + 1}</div>
                  <div className="text-xs text-white/50">0{idx + 1}</div>
                </div>

                <div className="mt-3 text-base font-medium">{s.title}</div>
                <div className="mt-1 text-sm text-white/60">{s.subtitle}</div>

                {/* Connector (desktop only) */}
                {idx < steps.length - 1 ? (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-[1px] bg-white/20" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Bottom line (desktop) */}
          <div className="hidden md:block mt-6 h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}
