"use client";

import React, { useEffect, useMemo, useState } from "react";
import AnimateOnView from "@/components/AnimateOnView";

type Job = {
  _id: string;
  title: string;
  description?: string;
  requiredSkills?: string;
  createdAt: string;
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState("");
  const [skillsFilter, setSkillsFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  const locations = useMemo(() => {
    return Array.from(new Set(jobs.map((j) => j.requiredSkills).filter(Boolean)));
  }, [jobs]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return jobs.filter(
      (j) =>
        (!q ||
          j.title.toLowerCase().includes(q) ||
          (j.description || "").toLowerCase().includes(q)) &&
        (!skillsFilter || j.requiredSkills === skillsFilter)
    );
  }, [jobs, query, skillsFilter]);

  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 via-white to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <header className="text-center mb-12">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              Careers at TantraDOT
            </span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Join Our <span className="text-yellow-400">Team</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Build real-world software, work on live projects, and grow your career
              with hands-on experience at TantraDOT Technologies.
            </p>
          </AnimateOnView>
        </header>

        {/* FILTER BAR */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <input
              className="w-full md:w-96 rounded-lg border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-yellow-200"
              placeholder="Search roles or skills"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="flex gap-3">
            

              <button
                onClick={() => {
                  setQuery("");
                  setSkillsFilter("");
                }}
                className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* JOB LIST */}
        {loading ? (
          <p className="text-center text-slate-500">Loading opportunities…</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-slate-600">
            No openings available right now.
          </p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {filtered.map((job, i) => (
              <AnimateOnView
                key={job._id}
                animation="animate-slide-up"
                delay={`${i * 100}ms`}
              >
                <li className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.title}
                  </h3>

                  {job.requiredSkills && (
                    <p className="mt-1 text-sm text-yellow-600 font-semibold">
                      🛠️ {job.requiredSkills}
                    </p>
                  )}

                  {job.description && (
                    <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                      {job.description}
                    </p>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </span>

                    <a
                      href={`mailto:careers@tantradot.in?subject=Application for ${job.title}`}
                      className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition"
                    >
                      Apply
                    </a>
                  </div>
                </li>
              </AnimateOnView>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
