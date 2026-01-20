import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="block rounded-2xl border border-white/10 p-6 hover:border-white/20 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium">{p.title}</h3>
        <span className="text-xs text-white/60 border border-white/10 rounded px-2 py-1">
          {p.projectType}
        </span>
      </div>

      <div className="mt-3 text-sm text-white/60">
        {p.clientType} • {p.location} {p.year ? `• ${p.year}` : ""}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4">
        <div>
          <div className="text-xs text-white/50">Scope</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            {p.scope.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs text-white/50">Constraints</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            {p.constraints.slice(0, 2).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs text-white/50">Outcome</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pl-5 space-y-1">
            {p.outcome.slice(0, 2).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs text-white/60 border border-white/10 rounded px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
