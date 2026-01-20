export default function FinalCTA() {
  return (
    <section className="px-8 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 p-10">
        <h2 className="text-3xl font-light">Let's work together</h2>
        <p className="mt-3 text-white/60 max-w-2xl">
          We'll structure a clear scope, deliverables, and timeline aligned with your approvals and constraints.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded text-sm text-center">
            Contact
          </a>
          <a href="/projects" className="border border-white/20 px-6 py-3 rounded text-sm text-center">
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}
