import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectHighlights from "@/components/ProjectHighlights";
import ToolBadges from "@/components/ToolBadges";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((project) => project.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <article className="px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span>{p.projectType}</span>
            <span>•</span>
            <span>{p.location}</span>
            {p.year && (
              <>
                <span>•</span>
                <span>{p.year}</span>
              </>
            )}
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-light">{p.title}</h1>
        </div>

        <div className="mt-10">
          <p className="text-lg text-white/80 leading-relaxed">{p.narrative}</p>
        </div>

        <div className="mt-10 space-y-6">
          <ProjectHighlights project={p} />

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-sm font-medium text-white/50 mb-3">
              Tools used
            </h3>
            <ToolBadges tools={p.tools ?? []} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <DetailBlock title="Scope" items={p.scope} />
          <DetailBlock title="Constraints" items={p.constraints} />
          <DetailBlock title="Outcome" items={p.outcome} />
        </div>

        {p.images && p.images.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-6">Project gallery</h2>
            <ProjectGallery images={p.images} title={p.title} isArabic={false} />
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-white/10">
          <a
            href="/projects"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to projects
          </a>
        </div>
      </div>
    </article>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="text-sm font-medium text-white/50 mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-white/40">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
