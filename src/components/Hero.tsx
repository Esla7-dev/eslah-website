export default function Hero() {
  return (
    <section className="px-8 py-32 max-w-6xl mx-auto soft-fade-in">
      <h1 className="text-5xl font-light leading-tight">
        Design that delivers<br />
        <span className="text-white/60">
          on time, on budget, on site
        </span>
      </h1>

      <p className="mt-6 text-white/60 max-w-xl">
        ESLAH is a multidisciplinary design team delivering architecture,
        interiors, landscape, and planning solutions with speed, accuracy,
        and full coordination.
      </p>

      <div className="mt-10 flex gap-4">
        <a href="/projects" className="border border-white px-6 py-3 rounded hover:bg-white/10 transition">
          View Projects
        </a>
        <a href="/contact" className="bg-white text-black px-6 py-3 rounded hover:bg-white/90 transition">
          Request a Proposal
        </a>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="text-sm text-white/50">
          10+ project types • fast delivery • BIM-ready • realistic visualization
        </div>
      </div>
    </section>
  );
}
