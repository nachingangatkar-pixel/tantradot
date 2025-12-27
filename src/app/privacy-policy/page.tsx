import AnimateOnView from "@/components/AnimateOnView";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="space-y-12">
      <section className="relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnView animation="animate-zoom-in" delay="80ms">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="animate-slide-left" delay="140ms">
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
          </AnimateOnView>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <AnimateOnView animation="animate-zoom-in" delay="100ms">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              TantraDOT Technologies ("we", "us", "our", or "Company") operates the TantraDOT website and services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Information Collection and Use</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
              <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Use of Data</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              TantraDOT Technologies uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Security of Data</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mt-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
              <li>Email: info@tantradot.in</li>
              <li>Address: Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="animate-zoom-in" delay="200ms">
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Have Questions? Contact Us
            </Link>
          </div>
        </AnimateOnView>
      </section>
    </main>
  );
}
