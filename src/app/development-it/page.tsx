import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";
import Cop1 from "@/images/cop4.png";

export default function DevelopmentPage() {
  return (
    <main className="space-y-20">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              Development & IT
            </span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Custom <span className="text-yellow-400">Development</span> Solutions
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              From web applications to backend systems, we deliver robust, scalable software engineering solutions tailored to your business needs.
            </p>
          </AnimateOnView>

          <div className="mt-10 flex gap-4 justify-center cta-stack">
            <AnimateOnView animation="animate-zoom-in" delay="260ms">
              <Link href="/contact" className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition block w-full sm:inline-block sm:w-auto text-center">
                Start Your Project
              </Link>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <Image src={Cop1} alt="Development & IT" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">What We <span className="text-yellow-400">Offer</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              We specialize in building custom software solutions that drive business growth. Our experienced team handles everything from concept to production deployment.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ Full-stack web application development",
                "✔ Scalable backend systems and APIs",
                "✔ Database design and optimization",
                "✔ Cloud deployment and infrastructure",
                "✔ Performance optimization and monitoring",
                "✔ Post-launch support and maintenance",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Get a free consultation →
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>

      <section className="bg-yellow-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our <span className="text-yellow-400">Tech Stack</span></h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { title: "Frontend", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
            { title: "Backend", tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
            { title: "DevOps", tech: ["Docker", "Kubernetes", "CI/CD", "AWS"] },
            { title: "Tools", tech: ["Git", "Jest", "ESLint", "Vercel"] },
          ].map((stack, i) => (
            <AnimateOnView key={stack.title} animation="animate-zoom-in" delay={`${i * 100}ms`}>
              <div className="bg-white p-6 rounded-lg border border-yellow-100 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.tech.map((t) => (
                    <li key={t} className="text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">How We <span className="text-yellow-400">Work</span></h2>
        <p className="text-center text-slate-600 mt-2">Our proven development process</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Understand", desc: "We analyze your requirements and business goals" },
            { num: "2", title: "Design", desc: "Create scalable architecture and technical specifications" },
            { num: "3", title: "Build", desc: "Develop with agile methodology and continuous testing" },
            { num: "4", title: "Deploy", desc: "Launch, monitor, and provide ongoing support" },
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

      <section className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to start building?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">Let's discuss your project and create something amazing together.</p>
        <Link href="/contact" className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
