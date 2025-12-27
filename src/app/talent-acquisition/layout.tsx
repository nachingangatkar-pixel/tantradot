import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Acquisition & IT Recruitment | TantraDOT",
  description:
    "Find top technical talent for your organization. Expert IT recruitment, developer hiring, and team building services.",
  keywords: [
    "talent acquisition",
    "IT recruitment",
    "developer hiring",
    "recruitment services",
    "tech talent",
    "staffing solutions",
    "tech recruitment agency",
  ],
  openGraph: {
    title: "Talent Acquisition Services | TantraDOT Technologies",
    description: "Find and recruit top technical talent for your organization.",
    url: "https://tantradot.in/talent-acquisition",
  },
};

export default function TalentAcquisitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
