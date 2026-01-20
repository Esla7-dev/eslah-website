import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedProjects() {
  const selected = projects.slice(0, 6);

  return (
    <section className="px-8 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light">Selected projects</h2>
            <p className="mt-3 text-white/60 max-w-2xl">
              Work presented with scope, constraints, and outcomes — not just images.
            </p>
          </div>

          <a href="/projects" className="border border-white/20 px-5 py-3 rounded text-sm w-fit">
            View all projects
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {selected.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white/80">Want similar results?</p>
            <p className="text-sm text-white/60">
              Send your project type, location, timeline, and required deliverables.
            </p>
          </div>
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded text-sm">
            Request a Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
