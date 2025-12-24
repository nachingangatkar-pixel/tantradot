import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import WhatsAppButton from '../components/WhatsappButton';

export const metadata: Metadata = {
  title: "TantraDOT Technologies | Web & Software Development Company",
  description:
    "TantraDOT Technologies - Custom web development, backend systems, digital marketing, and IT talent acquisition for startups and enterprises. Next.js, React, Node.js experts.",
  keywords: [
    "web development",
    "software development",
    "Next.js",
    "React",
    "digital marketing",
    "IT recruitment",
    "DevOps",
    "cloud solutions",
    "startup development",
    "enterprise software",
  ],
  authors: [{ name: "TantraDOT Technologies" }],
  creator: "TantraDOT Technologies",
  publisher: "TantraDOT Technologies",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  applicationName: "TantraDOT",

  openGraph: {
    title: "TantraDOT Technologies | Custom Web Development & Software Solutions",
    description:
      "Build scalable web applications, backend systems, and grow your digital presence with TantraDOT. Expert developers for startups and enterprises.",
    url: "https://tantradot.com",
    siteName: "TantraDOT Technologies",
    images: [
      {
        url: "/images/onlylogo.png",
        width: 512,
        height: 512,
        alt: "TantraDOT Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TantraDOT Technologies | Web Development & Software Solutions",
    description:
      "Custom web development, backend systems, digital marketing, and IT talent acquisition.",
    images: ["/images/onlylogo.png"],
    creator: "@TantraDot",
  },

  alternates: {
    canonical: "https://tantradot.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TantraDOT Technologies",
    url: "https://tantradot.com",
    logo: "https://tantradot.com/images/onlylogo.png",
    description:
      "Custom web development, backend systems, digital marketing, and IT talent acquisition",
    sameAs: [
      "https://twitter.com/TantraDot",
      "https://www.linkedin.com/company/tantradot",
      "https://github.com/",
      "https://www.instagram.com/",
      "https://www.threads.net/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Development",
      telephone: "+91-7406127509",
      email: "contact@tantradot.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TantraDOT Technologies",
    url: "https://tantradot.com",
    areaServed: [
      "IN",
      "US",
      "UK",
      "CA",
      "AU",
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom Next.js and React web applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development",
            description: "Node.js, APIs, and scalable backend systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud & DevOps",
            description: "AWS, Azure, and cloud infrastructure management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "SEO, content marketing, and digital strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Recruitment",
            description: "Talent acquisition and staffing solutions",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="canonical" href="https://tantradot.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>

      <body className="max-h-screen bg-amber-100 flex flex-col">
        <Header />
        <main className="container mx-auto p-4 bg-white">{children}
                <div className="floating-whatsapp-container">
        <WhatsAppButton
          phone="+917406127509"
          message="Hi! How can we help you with  Tantra Dot today? ."
        />
      </div>
        </main>
  
        <Footer />
      </body>
    </html>
  );
}