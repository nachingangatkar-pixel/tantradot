import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TantraDOT Technologies",
  description:
    "Get in touch with TantraDOT. Contact our team for web development, digital marketing, or IT recruitment inquiries.",
  keywords: [
    "contact us",
    "web development inquiry",
    "software development contact",
    "TantraDOT contact",
    "customer support",
  ],
  openGraph: {
    title: "Contact TantraDOT Technologies",
    description: "Get in touch with our team. We're here to help with your project needs.",
    url: "https://tantradot.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
