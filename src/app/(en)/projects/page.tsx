"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState, useMemo } from "react";

export default function Projects() {
  const [filters, setFilters] = useState({
    projectType: "All",
    clientType: "All",
    search: "",
  });

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesType =
        filters.projectType === "All" || p.projectType === filters.projectType;
      const matchesClient =
        filters.clientType === "All" || p.clientType === filters.clientType;
      const matchesSearch =
        filters.search === "" ||
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.narrative.toLowerCase().includes(filters.search.toLowerCase());

      return matchesType && matchesClient && matchesSearch;
    });
  }, [filters]);

  const hasActiveFilters =
    filters.projectType !== "All" ||
    filters.clientType !== "All" ||
    filters.search !== "";

  const resetFilters = () => {
    setFilters({ projectType: "All", clientType: "All", search: "" });
  };

  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light">Projects</h1>
        <p className="mt-4 text-white/70">
          Work presented with scope, constraints, and outcomes — not just images.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
            className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-white/30 transition-colors w-full md:w-auto"
          />

          <select
            value={filters.projectType}
            onChange={(e) =>
              setFilters({ ...filters, projectType: e.target.value })
            }
            className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-white/30 transition-colors w-full md:w-auto"
          >
            <option value="All">All Types</option>
            <option value="Villa">Villa</option>
            <option value="Duplex">Duplex</option>
            <option value="Commercial">Commercial</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Mixed-use">Mixed-use</option>
            <option value="Planning">Planning</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={filters.clientType}
            onChange={(e) =>
              setFilters({ ...filters, clientType: e.target.value })
            }
            className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-white/30 transition-colors w-full md:w-auto"
          >
            <option value="All">All Clients</option>
            <option value="Private">Private</option>
            <option value="Developer">Developer</option>
            <option value="Corporate">Corporate</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-sm text-white/60 hover:text-white transition-colors underline"
            >
              Reset filters
            </button>
          )}
        </div>

        <div className="mt-6 text-sm text-white/60">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 p-10 text-white/60">
            No projects match your filters. Try a different keyword or reset filters.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
