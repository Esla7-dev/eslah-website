"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ALL = "All";

export default function ProjectsPage() {
  const [type, setType] = useState<string>(ALL);
  const [client, setClient] = useState<string>(ALL);
  const [q, setQ] = useState<string>("");

  const typeOptions = useMemo(() => {
    const set = new Set(projects.map((p) => p.projectType));
    return [ALL, ...Array.from(set)];
  }, []);

  const clientOptions = useMemo(() => {
    const set = new Set(projects.map((p) => p.clientType));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return projects.filter((p) => {
      const typeOk = type === ALL || p.projectType === type;
      const clientOk = client === ALL || p.clientType === client;

      const haystack = [
        p.title,
        p.projectType,
        p.clientType,
        p.location,
        ...(p.tags ?? []),
        ...(p.scope ?? []),
        ...(p.constraints ?? []),
        ...(p.outcome ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const searchOk = !query || haystack.includes(query);

      return typeOk && clientOk && searchOk;
    });
  }, [type, client, q]);

  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light">Projects</h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          Filter by project context — then open each project to see scope, constraints, and outcomes.
        </p>

        {/* Controls */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-white/50">Project type</div>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-white/50">Client type</div>
            <select
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
            >
              {clientOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-xs text-white/50">Search</div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
              placeholder='Try: "approval" or "villa" or "coordination"'
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-10 flex items-center justify-between text-sm text-white/60">
          <div>
            Showing <span className="text-white/80">{filtered.length}</span> of{" "}
            <span className="text-white/80">{projects.length}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setType(ALL);
              setClient(ALL);
              setQ("");
            }}
            className="border border-white/20 px-4 py-2 rounded hover:border-white/30 transition"
          >
            Reset
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 p-10 text-white/60">
            No projects match your filters. Try a different keyword or reset filters.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
