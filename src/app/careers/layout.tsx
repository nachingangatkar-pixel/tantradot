import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Team | TantraDOT Technologies",
  description:
    "Join TantraDOT! We're hiring talented developers, designers, and tech professionals. Explore exciting career opportunities.",
  keywords: [
    "careers",
    "job opportunities",
    "hiring",
    "software developer jobs",
    "tech jobs",
    "developer careers",
  ],
  openGraph: {
    title: "Careers at TantraDOT Technologies",
    description: "Join our team and build amazing products with us.",
    url: "https://tantradot.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
