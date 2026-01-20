export default function AboutPage() {
  return (
    <section className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light">About ESLAH</h1>
        <p className="mt-4 text-white/60">
          ESLAH is an integrated multidisciplinary team bringing together
          architects, interior designers, product designers, landscape designers,
          and urban planners — covering the full scope of the built environment.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-white/50">How we help clients</div>
            <h2 className="mt-2 text-lg font-medium">Turn ideas into coordinated outcomes</h2>
            <p className="mt-3 text-sm text-white/70">
              We structure deliverables to reduce ambiguity, speed up approvals,
              and keep the design aligned with constraints and stakeholder feedback.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-white/50">What we're known for</div>
            <h2 className="mt-2 text-lg font-medium">Rapid delivery + precision</h2>
            <p className="mt-3 text-sm text-white/70">
              We give equal attention to every detail — from small elements to
              large-scale developments such as resorts and residential compounds.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6">
          <div className="text-sm text-white/50">Tools & workflows</div>
          <p className="mt-3 text-white/70">
            AI-driven workflows, Revit, AutoCAD, 3ds Max, SketchUp, Unreal Engine,
            Blender, Rhino, and other specialized platforms — integrated to deliver
            realistic, high-quality, coordinated results.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">Let's work together</h3>
            <p className="mt-1 text-sm text-white/60">
              Share your scope and timeline — we'll propose a clear delivery plan.
            </p>
          </div>
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded text-sm">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
