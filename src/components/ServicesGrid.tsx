const services = [
  {
    title: "Architecture Design",
    desc: "Concept to design development with coordinated drawings ready for stakeholder review.",
    bullets: ["Concept & Massing", "Design Development", "Plans / Elevations / Sections"],
  },
  {
    title: "Interior Design",
    desc: "Functional layouts, material direction, and detail-focused interior packages.",
    bullets: ["Space Planning", "Mood & Material Direction", "Detailing & FF&E"],
  },
  {
    title: "Landscape Design",
    desc: "Outdoor spatial planning with buildable layouts and visual clarity.",
    bullets: ["Planting & Hardscape", "Outdoor Experience", "Lighting Concepts"],
  },
  {
    title: "Planning & Urban",
    desc: "Site-wide planning and masterplan support aligned to feasibility and phasing.",
    bullets: ["Site Planning", "Circulation", "Phasing Concepts"],
  },
  {
    title: "Visualization",
    desc: "High-quality visuals to speed up approvals and reduce misalignment.",
    bullets: ["Still Renders", "Walkthroughs", "Realistic Materials"],
  },
  {
    title: "BIM & Coordination",
    desc: "Model-based coordination to reduce clashes and improve constructability readiness.",
    bullets: ["Revit Modeling", "Documentation Support", "Coordination Checks"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="px-8 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light">What we do</h2>
            <p className="mt-3 text-white/60 max-w-2xl">
              A multidisciplinary team delivering architecture, interiors, landscape, and planning —
              with rapid delivery and precision-focused workflows.
            </p>
          </div>

          <div className="text-sm text-white/50 hidden md:block">
            Revit • AutoCAD • 3ds Max • SketchUp • Unreal • Blender • Rhino • AI
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition"
            >
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white/80">
              Need a tailored scope and timeline?
            </p>
            <p className="text-sm text-white/60">
              We can structure deliverables by phase and approval milestones.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded text-sm inline-flex justify-center hover:bg-white/90 transition"
          >
            Request a Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
