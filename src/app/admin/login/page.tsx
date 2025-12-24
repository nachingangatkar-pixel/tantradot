"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // ensure cookies set by the server are stored by the browser
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    // mark authenticated in session so dashboard won't re-request /api/admin/me
    try {
      sessionStorage.setItem("admin_authenticated", "true");
    } catch (e) {}

    router.replace("/admin/dashboard");
  }

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
}
