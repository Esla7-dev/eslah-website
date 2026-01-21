const services = [
  {
    title: "Architecture Design",
    desc: "From concept to coordinated development packages aligned to approvals and constraints.",
    deliverables: ["Concept options + massing", "Coordinated plans/elevations/sections", "Review-ready presentation package"],
  },
  {
    title: "Interior Design",
    desc: "Functional layouts, material direction, and detail-focused interior documentation support.",
    deliverables: ["Space planning + zoning", "Mood/material direction + key details", "FF&E / detailing support (as needed)"],
  },
  {
    title: "Landscape Design",
    desc: "Outdoor experience planning with buildable layouts and clarity for execution.",
    deliverables: ["Hardscape + planting concepts", "Outdoor lighting concepts", "Coordinated landscape layouts"],
  },
  {
    title: "Planning & Urban",
    desc: "Site-wide planning and masterplan support aligned with feasibility and phasing.",
    deliverables: ["Site planning + circulation", "Phasing concepts", "Concept masterplan package"],
  },
  {
    title: "Visualization",
    desc: "High-quality visuals that reduce misalignment and accelerate decisions.",
    deliverables: ["Still renders", "Animation / walkthrough (optional)", "Material realism + mood accuracy"],
  },
  {
    title: "BIM & Coordination",
    desc: "Model-based coordination to improve constructability readiness and reduce rework.",
    deliverables: ["Revit modeling support", "Coordination checks", "Documentation support (by stage)"],
  },
];

export default function ServicesDeliverables() {
  return (
    <section className="px-8 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light">Service deliverables</h2>
        <p className="mt-3 text-white/60 max-w-2xl">
          Clear outputs per service — structured to support approvals, coordination, and build readiness.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>

              <div className="mt-5 text-xs text-white/50">Typical deliverables</div>
              <ul className="mt-3 text-sm text-white/70 list-disc pl-5 space-y-1">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
