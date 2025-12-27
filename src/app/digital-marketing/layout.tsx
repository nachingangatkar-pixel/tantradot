import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO & Strategy | TantraDOT",
  description:
    "SEO optimization, content marketing, social media strategy, and digital campaigns to grow your online presence and reach.",
  keywords: [
    "digital marketing",
    "SEO services",
    "content marketing",
    "social media marketing",
    "SEM",
    "online marketing",
    "digital strategy",
    "marketing agency",
  ],
  openGraph: {
    title: "Digital Marketing Services | TantraDOT Technologies",
    description: "SEO, content marketing, and digital strategy to grow your online presence.",
    url: "https://tantradot.in/digital-marketing",
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
