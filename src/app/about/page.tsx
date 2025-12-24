import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";

import Client1 from "@/images/c1.png";
import Client2 from "@/images/c2.png";
import Client3 from "@/images/c3.jpeg";
import Client4 from "@/images/c4.png";
import HeroImg from "@/images/hero.png";
import Cop1 from "@/images/cop1.png";
import Cop2 from "@/images/cop2.png";
import Cop3 from "@/images/cop3.png"; 
import co from "@/images/cop4.png";

export default function AboutPage() {
  const clients = [Client1, Client2, Client3, Client4];

  return (
    <main className="space-y-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-24 hero-section">
        <div className="max-w-8xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">About TantraDOT Technologies</span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 responsive-title">
              About  <span className="text-yellow-400">TantraDOT</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="220ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
              TantraDOT Technologies builds scalable web applications, modern software solutions, and career-driven digital products for startups and enterprises.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* QUICK STATS */}
     <section className="w-full bg-white py-14 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">

    {/* ================= TEXT CONTENT ================= */}
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
        Our Journey of <span className="text-yellow-400">Innovation</span>
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
        <strong>TantraDOT Technologies</strong> was founded with a clear vision —
        to build reliable, scalable, and meaningful digital solutions that empower
        businesses in the modern world.
      </p>

      <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
        From web applications and software platforms to backend systems and
        startup-ready solutions, we help organizations turn ideas into
        impactful technology.
      </p>
    </div>

    {/* ================= STATS CARDS ================= */}
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {[
        { num: "10+", label: "Projects Delivered" },
        { num: "5+", label: "Happy Clients" },
        { num: "2+", label: "Years of Expertise" },
        { num: "98%", label: "Client Satisfaction" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 text-center shadow-lg
                     bg-linear-to-br from-yellow-400 to-yellow-300
                     text-slate-900 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            {item.num}
          </div>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base font-semibold">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About details + image */}
      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-8">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
              <Image src={co} alt="About TantraDOT" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
            </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Who we are</h2>
            <p className="mt-4 text-slate-700 about-lead">We are a technology-driven company delivering end-to-end solutions in web development, backend systems, cloud deployment, and product engineering. Our teams combine product thinking with engineering discipline to ship reliable, secure, and maintainable software.</p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="about-lg">✔ Custom Web & Software Development</li>
              <li className="about-lg">✔ Startup-friendly & scalable architecture</li>
              <li className="about-lg">✔ Clean UI, performance & security focused</li>
            </ul>
          </div>
        </AnimateOnView>
      </section>
      
      

      {/* Services (copy from home) */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our <span className="text-yellow-400">Core Services</span></h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 service-grid">
          {[
            { title: "Web Development", desc: "Modern, responsive websites using Next.js, React, and Tailwind CSS." },
            { title: "Backend & APIs", desc: "Secure and scalable backend systems with Node.js and MongoDB." },
            { title: "Startup Solutions", desc: "MVPs, dashboards, admin panels, and SaaS platforms." },
            { title: "UI / UX Design", desc: "Clean, intuitive designs focused on user experience." },
            { title: "Deployment & Hosting", desc: "Cloud deployment, optimization, and production support." },
            { title: "Internships & Training", desc: "Hands-on internships with real-world projects." },
          ].map((service, i) => (
            <AnimateOnView key={service.title} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 120}ms`}>
              <div className={`border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition flip-card`}> 
                <div className="flip-card-inner">
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-slate-700 about-lg">{service.desc}</p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="max-w-7xl mx-auto px-8">
        <AnimateOnView animation="animate-zoom-in" delay="120ms">
          <h2 className="text-3xl font-bold text-center text-slate-900 mt-12">Our Story</h2>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-up" delay="180ms">
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <AnimateOnView animation="animate-flip" delay="120ms">
              <div className="p-6 bg-white rounded-xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <div className="text-sm font-semibold text-yellow-500">2022</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Founded</h3>
                  <p className="mt-2 text-slate-700 about-lg">TantraDOT began as a small team of engineers passionate about building practical web products.</p>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="animate-flip" delay="220ms">
              <div className="p-6 bg-white rounded-xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <div className="text-sm font-semibold text-yellow-500">2024</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">First Scale</h3>
                  <p className="mt-2 text-slate-700 about-lg">We delivered our first enterprise-ready platform and expanded to cloud-native architectures.</p>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="animate-flip" delay="320ms">
              <div className="p-6 bg-white rounded-xl shadow-sm flip-card">
                <div className="flip-card-inner">
                  <div className="text-sm font-semibold text-yellow-500">2025</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Product & Talent</h3>
                  <p className="mt-2 text-slate-700 about-lg">Today we partner with startups and enterprises, helping them ship faster while building internal engineering teams.</p>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </AnimateOnView>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-8">
        <AnimateOnView animation="animate-zoom-in" delay="120ms">
          <h2 className="text-3xl font-bold text-center text-slate-900 mt-12">Our Values</h2>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-up" delay="180ms">
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnView animation="animate-zoom-in" delay="120ms">
              <div className="p-6 bg-white rounded-xl shadow-sm text-center flip-card">
                <div className="flip-card-inner">
                  <div className="font-semibold text-slate-900">Craftsmanship</div>
                  <p className="text-base text-slate-600 mt-2">We care about the quality of code and product experience.</p>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="animate-zoom-in" delay="180ms">
              <div className="p-6 bg-white rounded-xl shadow-sm text-center flip-card">
                <div className="flip-card-inner">
                  <div className="font-semibold text-slate-900">Transparency</div>
                  <p className="text-base text-slate-600 mt-2">Clear communication and measurable outcomes guide our work.</p>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="animate-zoom-in" delay="240ms">
              <div className="p-6 bg-white rounded-xl shadow-sm text-center flip-card">
                <div className="flip-card-inner">
                  <div className="font-semibold text-slate-900">Collaboration</div>
                  <p className="text-base text-slate-600 mt-2">We partner closely with product teams and stakeholders.</p>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="animate-zoom-in" delay="300ms">
              <div className="p-6 bg-white rounded-xl shadow-sm text-center flip-card">
                <div className="flip-card-inner">
                  <div className="font-semibold text-slate-900">Continuous Learning</div>
                  <p className="text-base text-slate-600 mt-2">We iterate, measure, and improve continuously.</p>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </AnimateOnView>
      </section>
      
      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-8">
        <AnimateOnView animation="animate-zoom-in" delay="120ms">
          <h2 className="text-3xl font-bold text-center text-slate-900 mt-12">Frequently Asked Questions</h2>
        </AnimateOnView>

        <div className="mt-8 space-y-4">
          {[{
            q: 'How quickly can you start?', a: 'We usually onboard initial scoping within 1–2 weeks depending on availability.'
          },{
            q: 'Do you work with early-stage startups?', a: 'Yes — we specialise in MVPs and early product discovery.'
          },{
            q: 'What engagement models do you offer?', a: 'Project-based, dedicated teams, and staff augmentation are all supported.'
          }].map((f, i) => (
            <AnimateOnView key={i} animation="animate-zoom-in" delay={`${i * 100}ms`}>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="font-semibold text-lg text-slate-900">{f.q}</div>
                <div className="text-base text-slate-600 mt-2">{f.a}</div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="max-w-7xl mx-auto px-8 mt-12">
        <AnimateOnView animation="animate-zoom-in" delay="120ms">
          <div className="bg-yellow-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl  text-slate-700 font-bold">Join Our Team</h3>
            <p className="mt-2 text-slate-700">We’re growing — check our open positions or get in touch to explore internships and roles.</p>
            <a href="/careers" className="inline-block mt-4 bg-yellow-400 text-slate-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500">See Careers</a>
          </div>
        </AnimateOnView>
      </section>
        {/* CTA */}
      <AnimateOnView animation="animate-zoom-out" delay="120ms">
        <section className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Let’s Build Something <span className="text-yellow-400">Great</span></h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Whether you’re a startup, business, or institution — TantraDOT is ready to transform your ideas into powerful digital solutions.</p>
          <a href="/contact" className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition shadow-md">Contact Us</a>
        </section>
      </AnimateOnView>

        {/* ================= CLIENTS (sliding marquee) ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Clients</h2>
            <p className="text-slate-600">Trusted by teams and companies across industries</p>
          </div>

          <div className="clients-marquee" aria-label="Client logos carousel">
            <div className="marquee-track" role="list">
              {[
                  { src: Client1, alt: "Client 1" },
                  { src: Client2, alt: "Client 2" },
                  { src: Client3, alt: "Client 3" },
                  { src: Client4, alt: "Client 4" },
                ]
                  // duplicate for seamless loop
                  .concat([
                    Client1,
                    Client2,
                    Client3,
                    Client4,
                  ].map((s) => ({ src: s, alt: "" })))
                  .map((c, idx) => (
                  <div className="marquee-item" key={idx} role="listitem" aria-hidden={idx >= 7 ? true : false}>
                    <div className="w-28 h-12 flex items-center justify-center">
                      <Image src={c.src} alt={c.alt || `client ${idx + 1}`} width={140} height={48} className="client-logo" />
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
