import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";
import Cop3 from "@/images/cop3.png";

export default function TalentAcquisitionPage() {
  return (
    <main className="space-y-20">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              Talent Acquisition
            </span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Build Your <span className="text-yellow-400">Dream Team</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              We connect you with exceptional technical talent — developers, designers, and engineers who can drive your company's growth.
            </p>
          </AnimateOnView>

          <div className="mt-10 flex gap-4 justify-center cta-stack">
            <AnimateOnView animation="animate-zoom-in" delay="260ms">
              <Link href="/contact" className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition block w-full sm:inline-block sm:w-auto text-center">
                Find Top Talent
              </Link>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <Image src={Cop3} alt="Talent Acquisition" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Why Choose <span className="text-yellow-400">Us</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              We understand technical hiring. We source, vet, and place the right talent that fits your company culture and technical requirements.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Deep network of vetted technical professionals",
                "✔ Expertise in evaluating engineering skills",
                "✔ Fast hiring process — 2-4 weeks typical",
                "✔ Cultural fit assessment included",
                "✔ Post-placement support and onboarding",
                "✔ Competitive compensation consultation",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Tell us your hiring needs →
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>

      <section className="bg-yellow-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Roles We <span className="text-yellow-400">Fill</span></h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { role: "Frontend Developers", desc: "React, Next.js, TypeScript specialists for modern web applications." },
            { role: "Backend Engineers", desc: "Node.js, Python, cloud infrastructure experts for scalable systems." },
            { role: "Full-Stack Developers", desc: "End-to-end software engineers who can wear multiple hats." },
            { role: "DevOps & Cloud", desc: "AWS, Docker, Kubernetes professionals for deployment and infrastructure." },
            { role: "UI/UX Designers", desc: "Creative designers focused on user experience and product design." },
            { role: "QA & Testing", desc: "Quality assurance professionals ensuring bug-free software." },
          ].map((role, i) => (
            <AnimateOnView key={role.role} animation={i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out"} delay={`${i * 100}ms`}>
              <div className="bg-white p-6 rounded-lg border border-yellow-100 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{role.role}</h3>
                <p className="text-slate-700 text-sm">{role.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our <span className="text-yellow-400">Process</span></h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Discover", desc: "Understand your team needs and culture" },
            { num: "2", title: "Source", desc: "Find matched candidates from our network" },
            { num: "3", title: "Vet", desc: "Conduct technical interviews and assessments" },
            { num: "4", title: "Place", desc: "Close the deal and ensure smooth onboarding" },
          ].map((step) => (
            <AnimateOnView key={step.num} animation="animate-slide-up" delay={`${parseInt(step.num) * 100}ms`}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 text-slate-900 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Success <span className="text-yellow-400">Metrics</span></h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { stat: "100+", desc: "Placements completed" },
            { stat: "95%", desc: "Retention rate after 1 year" },
            { stat: "2-4 weeks", desc: "Average time to placement" },
            { stat: "50+", desc: "Active candidates in network" },
          ].map((metric, i) => (
            <AnimateOnView key={metric.stat} animation="animate-flip" delay={`${i * 100}ms`}>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{metric.stat}</div>
                <p className="text-slate-700">{metric.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to build your team?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">Let's find the right talent to take your company to the next level.</p>
        <Link href="/contact" className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Started
        </Link>
      </section>
    </main>
  );
}
