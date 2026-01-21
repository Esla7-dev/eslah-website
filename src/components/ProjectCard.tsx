import Link from "next/link";
import type { Project } from "@/data/projects";
import ToolBadges from "@/components/ToolBadges";

export default function ProjectCard({ project, isArabic = false }: { project: Project; isArabic?: boolean }) {
  const p = project;
  const href = isArabic ? `/ar/projects/${p.slug}` : `/projects/${p.slug}`;
  const title = isArabic && p.titleAr ? p.titleAr : p.title;
  const location = isArabic && p.locationAr ? p.locationAr : p.location;
  const narrative = isArabic && p.narrativeAr ? p.narrativeAr : p.narrative;
  const scope = isArabic && p.scopeAr ? p.scopeAr : p.scope;
  const constraints = isArabic && p.constraintsAr ? p.constraintsAr : p.constraints;
  const outcome = isArabic && p.outcomeAr ? p.outcomeAr : p.outcome;
  const tags = isArabic && p.tagsAr ? p.tagsAr : p.tags;

  const labels = isArabic
    ? { scope: "نطاق العمل", constraints: "القيود", outcome: "النتائج" }
    : { scope: "Scope", constraints: "Constraints", outcome: "Outcome" };

  return (
    <Link
      href={href}
      className="block rounded-2xl border border-white/10 p-6 hover:border-white/20 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-xs text-white/60 border border-white/10 rounded px-2 py-1">
          {p.projectType}
        </span>
      </div>

      <div className="mt-3 text-sm text-white/60">
        {p.clientType} • {location} {p.year ? `• ${p.year}` : ""}
      </div>

      <p className="mt-4 text-sm text-white/70 leading-relaxed">
        {narrative}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4">
        <div>
          <div className="text-xs text-white/50">{labels.scope}</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pr-5 space-y-1">
            {scope.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs text-white/50">{labels.constraints}</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pr-5 space-y-1">
            {constraints.slice(0, 2).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs text-white/50">{labels.outcome}</div>
          <ul className="mt-2 text-sm text-white/70 list-disc pr-5 space-y-1">
            {outcome.slice(0, 2).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <ToolBadges tools={p.tools?.slice(0, 4) ?? []} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
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
