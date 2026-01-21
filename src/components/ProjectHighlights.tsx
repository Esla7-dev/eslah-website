import type { Project } from "@/data/projects";

export default function ProjectHighlights({
  project,
  isArabic = false,
}: {
  project: Project;
  isArabic?: boolean;
}) {
  const labels = isArabic
    ? { timeline: "المدة الزمنية", stakeholders: "الأطراف المعنية", stage: "المرحلة" }
    : { timeline: "Timeline", stakeholders: "Stakeholders", stage: "Stage" };

  const timeline = isArabic && project.highlights.timelineAr ? project.highlights.timelineAr : project.highlights.timeline;
  const stakeholders = isArabic && project.highlights.stakeholdersAr ? project.highlights.stakeholdersAr : project.highlights.stakeholders;
  const stage = isArabic && project.highlights.stageAr ? project.highlights.stageAr : project.highlights.stage;

  const items = [
    { k: labels.timeline, v: timeline },
    { k: labels.stakeholders, v: stakeholders },
    { k: labels.stage, v: stage },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.k} className="rounded-2xl border border-white/10 p-5">
          <div className="text-xs text-white/50">{it.k}</div>
          <div className="mt-2 text-sm text-white/80">{it.v}</div>
        </div>
      ))}
    </div>
  );
}
