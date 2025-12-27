import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";

import Cop1 from "@/images/cop4.png";
import Client1 from "@/images/c1.png";
import Client2 from "@/images/c2.png";
import Client3 from "@/images/c3.jpeg";
import Client4 from "@/images/c4.png";

export const metadata = {
  title: "Services | Web Development, Backend, Cloud & DevOps | TantraDOT",
  description:
    "TantraDOT offers full-stack web development, backend API services, cloud infrastructure, UI/UX design, and MVPs. Custom solutions for startups and enterprises.",
  keywords: [
    "web development services",
    "backend development",
    "cloud services",
    "DevOps",
    "API development",
    "UI/UX design",
    "software development company",
    "Next.js development",
    "React development",
    "full-stack development",
  ],
};

export default function ServicesPage() {
  const clients = [Client1, Client2, Client3, Client4];

 
  return (
    <main className="space-y-20">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-20 hero-section">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">Our Services</span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 responsive-title">Services by <span className="text-yellow-400">TantraDOT</span></h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">We design, build and operate modern web platforms and backend systems to help teams ship faster.</p>
          </AnimateOnView>

          <div className="mt-8 flex items-center justify-center gap-4 cta-stack">
            <AnimateOnView animation="animate-zoom-in" delay="260ms">
              <Link href="/contact" className="rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition block w-full sm:inline-block sm:w-auto text-center">Contact Sales</Link>
            </AnimateOnView>

            <AnimateOnView animation="animate-zoom-in" delay="300ms">
              <Link href="/careers" className="rounded-lg border border-yellow-300 px-6 py-3 text-base font-semibold text-yellow-700 hover:bg-yellow-50 transition block w-full sm:inline-block sm:w-auto text-center">Join Our Team</Link>
            </AnimateOnView>
          </div>
        </div>
      </section>


      {/* Detailed Services Section */}
      <section className="bg-yellow-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our Complete <span className="text-yellow-400">Service Suite</span></h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">Everything you need to build, launch, and scale your digital product</p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed with user needs at the core. Prototypes, wireframes, and accessibility-first approach." },
            { icon: "⚡", title: "Frontend Development", desc: "React, Next.js, and TypeScript for fast, responsive web applications. Performance optimization built-in." },
            { icon: "🔧", title: "Backend & APIs", desc: "Node.js, Express, and MongoDB. Scalable APIs, microservices, real-time features, and database optimization." },
            { icon: "☁️", title: "Cloud & DevOps", desc: "Docker, Kubernetes, CI/CD pipelines. AWS, Vercel deployment, monitoring, and production infrastructure." },
            { icon: "📱", title: "Mobile Integration", desc: "Progressive web apps, responsive design, and cross-platform compatibility. Works seamlessly on all devices." },
            { icon: "🔒", title: "Security & Auth", desc: "JWT tokens, OAuth2, encryption, and secure API design. GDPR-compliant data handling." },
          ].map((service, i) => (
            <AnimateOnView key={service.title} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 100}ms`}>
              <div className="bg-white p-8 rounded-xl shadow-md border border-yellow-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{service.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our <span className="text-yellow-400">Process</span></h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">How we deliver exceptional results</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            {  title: "Discovery", desc: "We understand your business, users, and goals. In-depth research and planning." },
            {  title: "Design & Plan", desc: "Architecture design, wireframes, and technical specifications. Your approval before we build." },
            { title: "Development", desc: "Agile sprints, weekly demos, and continuous feedback. Quality-first approach." },
            { title: "Launch & Support", desc: "Deployment, testing, monitoring, and 24/7 support. Long-term partnership." },
          ].map((step, i) => (
            <AnimateOnView key={step.title} animation="animate-slide-up" delay={`${i * 100}ms`}>
              <div className="relative">
            
                <h3 className="text-lg font-semibold text-slate-900 relative z-10 -mt-8">{step.title}</h3>
                <p className="mt-4 text-slate-700 text-sm">{step.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Why Choose <span className="text-yellow-400">TantraDOT?</span></h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">What sets us apart from other agencies</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { title: "Experienced Team", desc: "Engineers with 5+ years of experience in modern tech stacks. Proven track record with 10+ delivered projects." },
            { title: "Quality First", desc: "Code reviews, automated testing, 100% TypeScript. Production-ready from day one." },
            { title: "Agile & Transparent", desc: "Weekly demos, regular updates, and transparent communication. You're involved every step of the way." },
            { title: "Scalable Solutions", desc: "Architecture designed to grow with your business. From MVP to 100k+ users." },
            { title: "Competitive Pricing", desc: "Bootstrap-friendly rates. Fixed-price projects, hourly, or dedicated teams. No hidden costs." },
            { title: "Ongoing Support", desc: "Post-launch maintenance, 24/7 monitoring, and performance optimization. We're here for the long term." },
          ].map((feature, i) => (
            <AnimateOnView key={feature.title} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 80}ms`}>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{feature.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Pricing Models */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Flexible <span className="text-yellow-400">Pricing</span></h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">Choose the engagement model that works best for you</p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { title: "Fixed Price", emoji: "💰", desc: "Perfect for MVPs and well-defined projects. Transparent cost, timeline included." },
            { title: "Hourly Consulting", emoji: "⏱️", desc: "Flexible engagement. Pay for hours worked. Great for incremental features." },
            { title: "Dedicated Team", emoji: "👥", desc: "Dedicated developers for your project. Exclusive focus and long-term partnership." },
          ].map((model, i) => (
            <AnimateOnView key={model.title} animation="animate-flip" delay={`${i * 120}ms`}>
              <div className="bg-linear-to-br from-yellow-50 to-white p-8 rounded-xl border-2 border-yellow-200 shadow-md hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">{model.emoji}</div>
                <h3 className="text-xl font-semibold text-slate-900">{model.title}</h3>
                <p className="mt-4 text-slate-700">{model.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-900 text-white py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Tech Stack We <span className="text-yellow-400">Master</span></h2>
        
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {[
            { category: "Frontend", techs: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
            { category: "DevOps", techs: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"] },
            { category: "Platforms", techs: ["Vercel", "AWS", "Google Cloud", "DigitalOcean"] },
          ].map((stack, i) => (
            <AnimateOnView key={stack.category} animation="animate-zoom-in" delay={`${i * 100}ms`}>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>
            
      
            {/* FAQ */}
            <section className="bg-slate-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-12 space-y-4 max-w-3xl mx-auto">
                {[
                  { q: "How quickly can you start a project?", a: "We typically onboard within 1–2 weeks. For urgent projects, we can fast-track to day 1." },
                  { q: "What's your engagement model?", a: "We offer fixed-price projects, dedicated teams, hourly consulting, and staff augmentation." },
                  { q: "Do you offer ongoing support?", a: "Yes — we provide post-launch maintenance, 24/7 incident support, and optimization services." },
                  { q: "How do you ensure code quality?", a: "Code reviews, automated testing, CI/CD pipelines, and regular architecture audits." },
                ].map((faq, i) => (
                  <AnimateOnView key={i} animation="animate-zoom-in" delay={`${i * 80}ms`}>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-slate-900">{faq.q}</p>
                      <p className="mt-2 text-slate-600 text-sm">{faq.a}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Trusted by</h3>
          <p className="text-slate-600">Companies and teams we’ve partnered with</p>

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
    </main>
  );
}
