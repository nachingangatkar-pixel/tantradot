"use client";

import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message");
        return;
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-20 contact-hero">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">Contact TantraDOT</span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 responsive-title">Get in touch — we’d love to help</h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">Questions about services, hiring, or partnerships? Reach out via phone, email, or the form — we respond within 1–2 business days.</p>
          </AnimateOnView>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 contact-container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimateOnView animation="animate-slide-left" delay="120ms">
            <div className="space-y-6 contact-cards">
              <div className="p-6 bg-white rounded-2xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <h3 className="text-xl font-semibold text-slate-900">📞 Call Us</h3>
                  <p className="mt-2 text-slate-700 about-lg">+91 7406127509</p>
                  <a href="tel:+917406127509" className="mt-3 inline-block text-sm text-yellow-600 font-semibold">Call now →</a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <h3 className="text-xl font-semibold text-slate-900">📧 Email</h3>
                  <p className="mt-2 text-slate-700 about-lg">info@tantradot.in</p>
                  <a href="mailto:info@tantradot.in" className="mt-3 inline-block text-sm text-yellow-600 font-semibold">Send email →</a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <h3 className="text-xl font-semibold text-slate-900">📍 Location</h3>
                  <p className="mt-2 text-slate-700 about-lg">Bengaluru, Karnataka, India</p>
                  <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-yellow-600 font-semibold">View on map →</a>
                </div>
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-right" delay="160ms">
            <div className="bg-white p-8 rounded-2xl shadow-sm contact-form-wrapper">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">✓ Message sent successfully! We'll get back to you soon.</div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">✗ {error}</div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2 ">Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-yellow-400" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-yellow-400" placeholder="you@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-yellow-400" placeholder="Optional phone number" />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Subject *</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} required className="w-full border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-yellow-400" placeholder="Subject" />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full border border-slate-200 rounded px-4 py-2 focus:outline-none focus:border-yellow-400" placeholder="Your message..." />
                </div>

                <button type="submit" disabled={loading} className="mt-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 disabled:opacity-50 transition">{loading ? 'Sending...' : 'Send Message'}</button>
              </form>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  );
}
