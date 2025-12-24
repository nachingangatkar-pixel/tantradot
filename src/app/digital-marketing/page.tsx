import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";
import Cop2 from "@/images/cop2.png";

export default function DigitalMarketingPage() {
  return (
    <main className="space-y-20">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <span className="inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              Digital Marketing
            </span>
          </AnimateOnView>

          <AnimateOnView animation="animate-zoom-in" delay="140ms">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Grow Your <span className="text-yellow-400">Online Presence</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="200ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Strategic digital marketing solutions to boost your brand visibility, engage your audience, and drive measurable results.
            </p>
          </AnimateOnView>

          <div className="mt-10 flex gap-4 justify-center cta-stack">
            <AnimateOnView animation="animate-zoom-in" delay="260ms">
              <Link href="/contact" className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 transition block w-full sm:inline-block sm:w-auto text-center">
                Grow Your Business
              </Link>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto px-6">
        <AnimateOnView animation="animate-slide-left" delay="120ms">
          <div>
            <Image src={Cop2} alt="Digital Marketing" width={640} height={420} className="rounded-2xl shadow-lg responsive-img" />
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-slide-right" delay="160ms">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="text-yellow-400">Services</span></h2>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              We combine data-driven strategies with creative execution to deliver tangible business results and sustainable growth.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "✔ SEO optimization and technical SEO",
                "✔ Content strategy and creation",
                "✔ Social media marketing campaigns",
                "✔ Paid advertising (Google Ads, Meta Ads)",
                "✔ Email marketing automation",
                "✔ Analytics and performance tracking",
              ].map((item, i) => (
                <li key={i} className="text-slate-700 text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700">
                Schedule a strategy call →
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>

      <section className="bg-yellow-50 py-16 px-6 rounded-2xl max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900">Our <span className="text-yellow-400">Expertise</span></h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { title: "SEO & SEM", desc: "Increase your visibility in search engines and drive qualified traffic to your website." },
            { title: "Content Marketing", desc: "Engaging, valuable content that attracts, educates, and converts your target audience." },
            { title: "Social Media", desc: "Build communities and engagement on platforms where your customers are active." },
          ].map((service, i) => (
            <AnimateOnView key={service.title} animation="animate-zoom-in" delay={`${i * 100}ms`}>
              <div className="bg-white p-8 rounded-lg border border-yellow-100 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-700">{service.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900">Results We <span className="text-yellow-400">Deliver</span></h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { metric: "+150%", desc: "Average organic traffic increase" },
            { metric: "+85%", desc: "Lead generation improvement" },
            { metric: "+40%", desc: "Average conversion rate boost" },
            { metric: "24/7", desc: "Campaign monitoring & optimization" },
          ].map((result, i) => (
            <AnimateOnView key={result.metric} animation="animate-flip" delay={`${i * 100}ms`}>
              <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{result.metric}</div>
                <p className="text-slate-700 text-sm">{result.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to boost your digital presence?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">Let's create a marketing strategy that drives real results.</p>
        <Link href="/contact" className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Start Today
        </Link>
      </section>
    </main>
  );
}
