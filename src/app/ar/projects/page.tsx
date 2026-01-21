"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ArabicProjects() {
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
        p.titleAr?.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.narrativeAr?.toLowerCase().includes(filters.search.toLowerCase()) ||
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
        <h1 className="text-4xl font-light">مشاريعنا</h1>
        <p className="mt-4 text-white/70">
          نماذج مختارة من أعمالنا مع توضيح نطاق العمل والنتائج
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <input
            type="text"
            placeholder="بحث..."
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
            <option value="All">جميع الأنواع</option>
            <option value="Villa">فيلا</option>
            <option value="Duplex">دوبلكس</option>
            <option value="Commercial">تجاري</option>
            <option value="Hospitality">ضيافة</option>
            <option value="Mixed-use">متعدد الاستخدامات</option>
            <option value="Planning">تخطيط</option>
            <option value="Other">أخرى</option>
          </select>

          <select
            value={filters.clientType}
            onChange={(e) =>
              setFilters({ ...filters, clientType: e.target.value })
            }
            className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm focus:outline-none focus:border-white/30 transition-colors w-full md:w-auto"
          >
            <option value="All">جميع العملاء</option>
            <option value="Private">خاص</option>
            <option value="Developer">مطور</option>
            <option value="Corporate">مؤسسي</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-sm text-white/60 hover:text-white transition-colors underline"
            >
              إعادة تعيين
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-6 text-sm text-white/60">
          {filtered.length} {filtered.length === 1 ? "مشروع" : "مشاريع"}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} isArabic={true} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-white/50">
            لا توجد مشاريع تطابق معايير البحث
          </div>
        )}
      </div>
    </section>
  );
}
