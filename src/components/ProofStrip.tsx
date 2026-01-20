const proof = [
  { k: "Rapid delivery", v: "Short cycles for faster approvals" },
  { k: "High precision", v: "Detail-first coordination approach" },
  { k: "Multidisciplinary", v: "Architecture • Interior • Landscape • Planning" },
  { k: "Build-ready outputs", v: "Structured deliverables by phase" },
];

export default function ProofStrip() {
  return (
    <section className="px-8 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {proof.map((p) => (
          <div key={p.k} className="rounded-2xl border border-white/10 p-5">
            <div className="text-sm text-white/50">{p.k}</div>
            <div className="mt-2 text-sm text-white/80">{p.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
