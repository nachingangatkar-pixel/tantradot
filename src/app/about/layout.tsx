import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TantraDOT Technologies - Web Development Company",
  description:
    "Learn about TantraDOT: Our mission to deliver innovative web solutions, team expertise in Next.js, React, and cloud technologies, and commitment to craftsmanship.",
  keywords: [
    "about TantraDOT",
    "web development company",
    "software development team",
    "tech company",
    "startup development",
    "digital transformation",
    "expert developers",
  ],
  openGraph: {
    title: "About TantraDOT Technologies",
    description: "Building thoughtful web experiences and scalable software solutions.",
    url: "https://tantradot.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
