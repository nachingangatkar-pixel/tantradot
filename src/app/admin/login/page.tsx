"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed. Please try again.");
      setLoading(false);
      return;
    }

    try {
      sessionStorage.setItem("admin_authenticated", "true");
    } catch (e) {}

    router.replace("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
            Admin Access
          </h1>
          <p className="text-lg text-slate-600">
            Sign in to your TantraDOT admin dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg border border-yellow-400 p-8 md:p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="admin@tantradot.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-black font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 disabled:scale-100"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-200" />
            <div className="px-3 text-sm text-slate-500">or</div>
            <div className="flex-1 border-t border-slate-200" />
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Need help accessing your account?{" "}
              <Link
                href="/"
                className="text-yellow-600 hover:text-yellow-700 font-semibold transition"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-yellow-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-400 opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-yellow-300 opacity-10 blur-3xl pointer-events-none" />
    </main>
  );
}
