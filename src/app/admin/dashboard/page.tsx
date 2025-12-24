"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Job = {
  _id: string;
  title: string;
  description: string;
  requiredSkills: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const authCheckedRef = useRef(false);
  const jobsFetchingRef = useRef(false);

  function clearForm() {
    setTitle("");
    setDescription("");
    setRequiredSkills("");
    setEditingId(null);
    setShowForm(false);
  }

  useEffect(() => {
    const cancelled = { v: false } as { v: boolean };
    if (authCheckedRef.current) {
      const cached = typeof window !== "undefined" && sessionStorage.getItem("admin_authenticated");
      if (cached === "true") setAuthorized(true);
      return;
    }

    authCheckedRef.current = true;

    const cached = typeof window !== "undefined" && sessionStorage.getItem("admin_authenticated");
    if (cached === "true") {
      setAuthorized(true);
      return;
    }

    fetch("/api/admin/me")
      .then((res) => {
        if (!res.ok) throw new Error();
        if (!cancelled.v) {
          sessionStorage.setItem("admin_authenticated", "true");
          setAuthorized(true);
        }
      })
      .catch(() => {
        if (!cancelled.v) {
          sessionStorage.removeItem("admin_authenticated");
          router.replace("/admin/login");
        }
      });

    return () => {
      cancelled.v = true;
    };
  }, [router]);

  useEffect(() => {
    if (authorized) fetchJobs();
  }, [authorized]);

  async function saveJob() {
    // Validate required fields
    if (!title.trim()) {
      alert("Please enter a job title");
      return;
    }
    if (!description.trim()) {
      alert("Please enter a job description");
      return;
    }
    if (!requiredSkills.trim()) {
      alert("Please enter required skills");
      return;
    }

    const payload = { title, description, requiredSkills };

    try {
      const url = editingId ? `/api/jobs/${editingId}` : "/api/jobs";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to save job"}`);
        return;
      }

      try {
        sessionStorage.removeItem("admin_jobs");
      } catch (e) {}
      
      clearForm();
      await fetchJobs();
      alert(`Job ${editingId ? "updated" : "created"} successfully!`);
    } catch (error) {
      console.error("Error saving job:", error);
      alert(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  async function deleteJob(id: string) {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const response = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to delete job"}`);
        return;
      }

      try {
        sessionStorage.removeItem("admin_jobs");
      } catch (e) {}
      
      await fetchJobs();
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error);
      alert(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    } catch (e) {
      console.error("Logout error:", e);
    }

    try {
      sessionStorage.removeItem("admin_authenticated");
      sessionStorage.removeItem("admin_jobs");
    } catch (e) {}

    router.replace("/admin/login");
  }

  async function fetchJobs() {
    try {
      const cached = sessionStorage.getItem("admin_jobs");
      if (cached) {
        setJobs(JSON.parse(cached));
        return;
      }
    } catch (e) {}

    if (jobsFetchingRef.current) return;
    jobsFetchingRef.current = true;

    try {
      const res = await fetch("/api/jobs", { cache: "no-store" });
      const data = await res.json();
      setJobs(data);
      try {
        sessionStorage.setItem("admin_jobs", JSON.stringify(data));
      } catch (e) {}
    } finally {
      jobsFetchingRef.current = false;
    }
  }

  if (!authorized) return null;

  return (
    <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-lg text-slate-600">
              Manage job postings and career opportunities
            </p>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-400">
            <p className="text-slate-600 text-sm font-semibold uppercase">Total Jobs</p>
            <p className="text-4xl font-bold text-slate-900 mt-2">{jobs.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-400">
            <p className="text-slate-600 text-sm font-semibold uppercase">Active</p>
            <p className="text-4xl font-bold text-slate-900 mt-2">{jobs.filter(j => j.title).length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-400">
            <p className="text-slate-600 text-sm font-semibold uppercase">Status</p>
            <p className="text-2xl font-bold text-green-600 mt-2">✓ Operational</p>
          </div>
        </div>

        {/* Add Job Button */}
        <div className="mb-8">
          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) clearForm();
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg transition transform hover:scale-105"
          >
            {showForm ? "Cancel" : "+ Add New Job"}
          </button>
        </div>

        {/* Add/Edit Job Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {editingId ? "Edit Job Posting" : "Create New Job Posting"}
            </h2>

            <div className="space-y-5">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Senior React Developer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>

              {/* Required Skills */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Required Skills
                </label>
                <input
                  type="text"
                  placeholder="e.g., React, Node.js, TypeScript"
                  value={requiredSkills}
                  onChange={(e) => setRequiredSkills(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Job description, responsibilities, and requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={saveJob}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                >
                  {editingId ? "Update Job" : "Create Job"}
                </button>
                <button
                  onClick={clearForm}
                  className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 font-bold py-3 rounded-lg transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Jobs List */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Job Postings ({jobs.length})
          </h2>

          {jobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-slate-600 text-lg">No job postings yet.</p>
              <p className="text-slate-500">Create your first job posting to get started!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                    <p className="text-sm text-yellow-600 font-semibold flex items-center gap-2">
                      🛠️ {job.requiredSkills}
                    </p>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>

                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => {
                        setTitle(job.title);
                        setDescription(job.description);
                        setRequiredSkills(job.requiredSkills);
                        setEditingId(job._id);
                        setShowForm(true);
                        window.scrollTo(0, 0);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => deleteJob(job._id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition"
                    >
                      🗑️ Delete
                    </button>

                    <button
                      onClick={() => router.push(`/careers#${job._id}`)}
                      className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-5 py-2 rounded-lg transition"
                    >
                      👁️ View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-yellow-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
