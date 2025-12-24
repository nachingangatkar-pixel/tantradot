"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Job = {
  _id: string;
  title: string;
  description: string;
  location: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // 🔐 AUTH CHECK (uses server `/api/admin/me`).
  // Cache the positive auth result in sessionStorage to avoid repeated
  // calls (React strict mode and re-mounts can cause duplicate requests).
  const authCheckedRef = useRef(false);
  const jobsFetchingRef = useRef(false);

  function clearForm() {
    setTitle("");
    setDescription("");
    setLocation("");
    setEditingId(null);
  }

  useEffect(() => {
    // prevent duplicate auth-checks in StrictMode
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
    const payload = { title, description, location };

    if (editingId) {
      await fetch(`/api/jobs/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    // Clear jobs cache and refresh
    try {
      sessionStorage.removeItem("admin_jobs");
    } catch (e) {}
    clearForm();
    fetchJobs();
  }

  async function deleteJob(id: string) {
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    try {
      sessionStorage.removeItem("admin_jobs");
    } catch (e) {}
    fetchJobs();
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
    // Try session cache first to avoid duplicate network calls in dev/strict-mode
    try {
      const cached = sessionStorage.getItem("admin_jobs");
      if (cached) {
        setJobs(JSON.parse(cached));
        return;
      }
    } catch (e) {}

    // Prevent concurrent fetches
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
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="bg-black text-white px-4 py-2">
          Logout
        </button>
      </div>

      {/* FORM */}
      <div className="space-y-2">
        <input className="border p-2 w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <textarea className="border p-2 w-full" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={saveJob} className="bg-green-600 text-white px-4 py-2">
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* JOBS */}
      <ul className="mt-6 space-y-3">
        {jobs.map(job => (
          <li key={job._id} className="border p-3">
            <h3 className="font-bold">{job.title}</h3>
            <p>{job.description}</p>
            <p className="text-sm">{job.location}</p>

            <div className="mt-2 space-x-2">
              <button onClick={() => {
                setTitle(job.title);
                setDescription(job.description);
                setLocation(job.location);
                setEditingId(job._id);
              }} className="bg-blue-600 text-white px-3">Edit</button>

              <button onClick={() => deleteJob(job._id)} className="bg-red-600 text-white px-3">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
