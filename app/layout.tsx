import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uncle Sunday | Making Every Day a Happy Sunday",
  description:
    "Creative children's ministry, joyful programs, faith-filled events, kids camps, gospel shows, and training for churches, schools, families, and communities.",
  keywords: [
    "Uncle Sunday",
    "children's ministry",
    "kids camps",
    "creative gospel shows",
    "Sunday School",
    "family events",
    "children's ministry training",
    "colorful kids ministry website",
    "joyful gospel children brand",
    "rainbow UI",
    "playful rounded cards",
    "animated doodles",
    "Christian children's ministry",
    "kids camp website",
    "international children event brand",
    "happy Sunday school design",
    "bright family-friendly interface",
    "professional but fun",
    "clean colorful landing page",
  ],
  openGraph: {
    title: "Uncle Sunday",
    description:
      "Joyful, faith-filled creative programs for children, churches, schools, families, and international partners.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
