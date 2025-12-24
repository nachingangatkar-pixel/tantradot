import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";

import Cop1 from "@/images/cop4.png";
import Cop2 from "@/images/cop2.png";
import Cop3 from "@/images/cop3.png";
import Client1 from "@/images/c1.png";
import Client2 from "@/images/c2.png";
import Client3 from "@/images/c3.jpeg";
import Client4 from "@/images/c4.png";

export const metadata = {
  title: "TantraDOT Technologies | Web Development & Software Solutions",
  description:
    "TantraDOT Technologies - Custom web development, full-stack solutions, digital marketing, and IT recruitment. Expert Next.js, React, and Node.js developers for startups and enterprises.",
  keywords: [
    "web development company",
    "software development",
    "Next.js developers",
    "React development",
    "custom software solutions",
    "digital marketing agency",
    "IT recruitment",
    "startup development",
    "enterprise software",
    "web apps",
    "backend development",
    "cloud solutions",
  ],
};

export default function HomePage() {
  const clients = [Client1, Client2, Client3, Client4];

  return (
    <main className="space-y-28">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-24 hero-section">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              Welcome to TantraDOT Technologies
            </span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 responsive-title">
              Building thoughtful web experiences
              <br /> and scalable software
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="220ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              We craft performant web applications, resilient backends, and delightful interfaces for startups and enterprises.
            </p>
          </AnimateOnView>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 cta-stack">
            <AnimateOnView animation="animate-zoom-in" delay="320ms">
              <Link href="/contact" className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition block w-full sm:inline-block sm:w-auto text-center">
                Get Started
              </Link>
            </AnimateOnView>

            <AnimateOnView animation="animate-zoom-in" delay="360ms">
              <Link href="/services" className="rounded-lg border border-yellow-300 px-8 py-3 text-base font-semibold text-yellow-700 hover:bg-yellow-50 transition block w-full sm:inline-block sm:w-auto text-center">
                Explore Services
              </Link>
            </AnimateOnView>
          </div>
        </div>

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-200 opacity-30 blur-3xl" />
      </section>

      {/* About / Why Us */}
      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <Image src={Cop2} alt="About TantraDOT" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Why choose <span className="text-yellow-400">TantraDOT?</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">We combine technical excellence with a deep understanding of business. Our teams are product-focused engineers who ship reliable, maintainable software.</p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Full-stack expertise in modern web frameworks",
                "✔ Startup-friendly pricing and flexible engagement models",
                "✔ Transparent communication and measurable outcomes",
                "✔ 24/7 support and long-term partnership approach",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/about" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Learn more about us →
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>


      
      {/* What We Deliver */}
      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">What we <span className="text-yellow-400">deliver</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">Every project is built with quality, performance, and scalability in mind. We don't just code — we engineer solutions.</p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Production-ready code with full test coverage",
                "✔ Responsive design optimized for all devices",
                "✔ SEO-friendly architecture and best practices",
                "✔ Comprehensive documentation and knowledge transfer",
                "✔ Post-launch support and continuous optimization",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Explore our services →
              </Link>
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <Image src={Cop1} alt="What We Deliver" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>
      </section>

      {/* Tech Excellence */}
      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <Image src={Cop3} alt="Technology Stack" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Modern tech, <span className="text-yellow-400">proven results</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">We use industry-leading technologies that are trusted by startups and enterprises. Our stack is carefully chosen for reliability, performance, and ease of scaling.</p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Next.js & React for lightning-fast frontends",
                "✔ Node.js & TypeScript for robust backends",
                "✔ MongoDB & PostgreSQL for reliable data",
                "✔ Docker & Kubernetes for seamless deployment",
                "✔ AWS & Vercel for enterprise-grade hosting",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/about" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Learn about our process →
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>


      {/* Why Startups Choose Us */}
      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Perfect for <span className="text-yellow-400">startups</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">Bootstrap-friendly pricing, zero lock-in contracts, and a team that understands startup challenges. We've helped dozens of teams go from idea to product.</p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Flexible pricing models (fixed, hourly, equity)",
                "✔ Fast MVP development (6-12 weeks typical)",
                "✔ Scalable architecture from day one",
                "✔ Hands-on mentorship and guidance",
                "✔ No long-term contracts — month-to-month terms",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="inline-block rounded-lg bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition">
                Let's build your MVP
              </Link>
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <Image src={Cop2} alt="Startups" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our Core Services</h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">End-to-end solutions tailored to startups, enterprises, and everything in between</p>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 service-grid">
          {[
            { title: "Web Development", desc: "Next.js, React, Tailwind — fast, responsive frontends with performance-first architecture." },
            { title: "Backend & APIs", desc: "Node.js, Express, MongoDB — scalable APIs, microservices, and real-time integrations." },
            { title: "UI / UX Design", desc: "User-centered design, prototypes, and accessible interfaces that delight users." },
            { title: "Cloud & DevOps", desc: "Docker, Kubernetes, CI/CD pipelines, and production monitoring." },
            { title: "MVP & Startups", desc: "From idea to launch — we build MVPs fast, iterate with data, and scale." },
            { title: "Consulting", desc: "Technical strategy, architecture reviews, and team augmentation." },
          ].map((s, i) => (
            <AnimateOnView key={s.title} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 80}ms`}>
              <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-slate-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">How we work</h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">Our proven process ensures clarity, speed, and results</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Discovery", desc: "Understand your goals, market, and technical needs." },
            { num: "2", title: "Design", desc: "Create architecture, wireframes, and technical specs." },
            { num: "3", title: "Build", desc: "Ship iteratively with weekly demos and feedback loops." },
            { num: "4", title: "Support", desc: "Launch, monitor, and continuously improve." },
          ].map((step) => (
            <AnimateOnView key={step.num} animation="animate-slide-up" delay={`${+step.num * 80}ms`}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 text-slate-900 font-bold text-xl flex items-center justify-center mx-auto">
                  {step.num}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

    

     
       {/* Client Success Stories */}
      <section className="bg-yellow-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Success <span className="text-yellow-400">Stories</span></h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">Real businesses, real growth, real impact</p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { title: "8-week MVP launch", client: "B2B SaaS", metric: "10k users in 3 months", desc: "Built a complete SaaS platform from scratch including real-time dashboards and payment integration." },
            { title: "70% performance boost", client: "E-commerce", metric: "40% conversion increase", desc: "Redesigned legacy platform with modern stack, reducing page load times and improving user experience." },
            { title: "99.9% uptime", client: "Financial Services", metric: "10k daily users", desc: "Engineered highly available system with automated scaling, monitoring, and incident response." },
          ].map((story, i) => (
            <AnimateOnView key={i} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 100}ms`}>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{story.metric}</div>
                <h3 className="text-lg font-semibold text-slate-900">{story.title}</h3>
                <p className="mt-2 text-sm text-slate-600 font-medium">Client: {story.client}</p>
                <p className="mt-4 text-slate-700 text-sm leading-relaxed">{story.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>
      {/* Clients marquee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-900">Trusted by teams worldwide</h3>
          <p className="text-slate-600 mt-2">Companies and startups that rely on our expertise</p>

          <div className="mt-8 clients-marquee" aria-label="Client logos carousel">
            <div className="marquee-track" role="list">
              {clients.concat(clients).map((src, idx) => (
                <div className="marquee-item" key={idx} role="listitem" aria-hidden={idx >= clients.length ? true : false}>
                  <div className="w-28 h-12 flex items-center justify-center">
                    <Image src={src} alt={`client ${idx + 1}`} width={140} height={48} className="client-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
       {/* Final CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to build something amazing?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">Let's partner on your next project. From MVP to scale, we're here to help.</p>
        <Link href="/contact" className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-md">
          Start a Conversation
        </Link>
      </section>

      
     
    </main>
  );
}
