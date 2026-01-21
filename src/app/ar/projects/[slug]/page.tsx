import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectHighlights from "@/components/ProjectHighlights";
import ToolBadges from "@/components/ToolBadges";

export default async function ArabicProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span>{project.projectType}</span>
            <span>•</span>
            <span>{project.locationAr || project.location}</span>
            {project.year && (
              <>
                <span>•</span>
                <span>{project.year}</span>
              </>
            )}
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-light">
            {project.titleAr || project.title}
          </h1>
        </div>

        {/* Narrative */}
        <div className="mt-10">
          <p className="text-lg text-white/80 leading-relaxed">
            {project.narrativeAr || project.narrative}
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-12">
          <ProjectHighlights project={project} isArabic={true} />
        </div>

        {/* Tools */}
        {project.tools && project.tools.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm text-white/50 mb-3">الأدوات المستخدمة</h3>
            <ToolBadges tools={project.tools} />
          </div>
        )}

        {/* Scope, Constraints, Outcome */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <DetailBlock
            title="نطاق العمل"
            items={project.scopeAr || project.scope}
          />
          <DetailBlock
            title="القيود"
            items={project.constraintsAr || project.constraints}
          />
          <DetailBlock
            title="النتائج"
            items={project.outcomeAr || project.outcome}
          />
        </div>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-6">معرض الصور</h2>
            <ProjectGallery images={project.images} title={project.titleAr || project.title} isArabic={true} />
          </div>
        )}

        {/* Back Link */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <a
            href="/ar/projects"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← العودة إلى المشاريع
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
