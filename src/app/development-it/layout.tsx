import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development & IT Services | TantraDOT",
  description:
    "Expert custom development, full-stack web applications, cloud infrastructure, and IT solutions. Next.js, React, Node.js, AWS specialists.",
  keywords: [
    "custom software development",
    "web development services",
    "full-stack development",
    "cloud infrastructure",
    "IT services",
    "software engineering",
    "Next.js development",
    "DevOps services",
  ],
  openGraph: {
    title: "Development & IT Services | TantraDOT Technologies",
    description: "Custom software development and IT solutions for your business.",
    url: "https://tantradot.com/development-it",
  },
};

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
