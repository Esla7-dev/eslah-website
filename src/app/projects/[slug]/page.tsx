import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <section className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-light">{p.title}</h1>
            <p className="mt-3 text-white/60">
              {p.projectType} • {p.clientType} • {p.location} {p.year ? `• ${p.year}` : ""}
            </p>
          </div>

          <a
            href="/contact"
            className="bg-white text-black px-5 py-3 rounded text-sm h-fit"
          >
            Request Similar Project
          </a>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-medium">Scope of work</h2>
            <ul className="mt-3 text-white/70 list-disc pl-5 space-y-1">
              {p.scope.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Constraints</h2>
            <ul className="mt-3 text-white/70 list-disc pl-5 space-y-1">
              {p.constraints.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Outcome</h2>
            <ul className="mt-3 text-white/70 list-disc pl-5 space-y-1">
              {p.outcome.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-white/60">
              Next improvement (later):
            </div>
            <p className="mt-2 text-white/70">
              Add a gallery + deliverables (PDF snapshots) + measurable outcomes (time saved / approvals).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
