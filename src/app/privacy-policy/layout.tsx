import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection | TantraDOT Technologies",
  description:
    "Privacy Policy for TantraDOT Technologies. We are committed to protecting your personal data and your privacy rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal data",
    "privacy statement",
  ],
  openGraph: {
    title: "Privacy Policy | TantraDOT Technologies",
    description: "Learn how we protect your data and privacy.",
    url: "https://tantradot.in/privacy-policy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
