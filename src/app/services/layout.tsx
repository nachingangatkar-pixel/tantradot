import type { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Services | TantraDOT Technologies",
    description: "Explore our web development, backend, and cloud services.",
    url: "https://tantradot.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
