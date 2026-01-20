export default function LoadingProjects() {
  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="h-10 w-40 border border-white/10 rounded mb-4" />
        <div className="h-5 w-96 border border-white/10 rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6">
              <div className="h-5 w-2/3 border border-white/10 rounded" />
              <div className="mt-3 h-4 w-1/2 border border-white/10 rounded" />
              <div className="mt-6 space-y-2">
                <div className="h-4 w-full border border-white/10 rounded" />
                <div className="h-4 w-5/6 border border-white/10 rounded" />
                <div className="h-4 w-2/3 border border-white/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
