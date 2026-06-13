import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.unclesunday.fun";
const siteTitle = "Uncle Sunday | Joyful Children's Ministry & Roadshow Programs";
const siteDescription =
  "Uncle Sunday brings colorful clown ministry, joyful gospel shows, kids camps, school programs, family events, and faith-filled children's experiences for churches, schools, and communities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Uncle Sunday",
  },
  description: siteDescription,
  applicationName: "Uncle Sunday",
  authors: [{ name: "Uncle Sunday" }],
  creator: "Uncle Sunday",
  publisher: "Uncle Sunday",
  category: "Children's Ministry",
  keywords: [
    "Uncle Sunday",
    "Uncle Button",
    "Jom Bah Ketawa Bersama",
    "Tawau roadshow",
    "Bataras Hypermarket Tawau",
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Uncle Sunday",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-roadshow-banner.jpg",
        width: 1280,
        height: 720,
        alt: "Jom Bah Ketawa Bersama roadshow banner featuring Uncle Sunday, Uncle Button, magicians, and creative performers",
      },
      {
        url: "/logo.png",
        width: 960,
        height: 960,
        alt: "Uncle Sunday logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/hero-roadshow-banner.jpg"],
  },
  appleWebApp: {
    capable: true,
    title: "Uncle Sunday",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uncle Sunday",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/hero-roadshow-banner.jpg`,
  description: siteDescription,
  slogan: "Making Everyday A Happy Sunday",
  sameAs: ["https://www.facebook.com/share/1JW8nu7UnX/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+60-11-1058-9679",
      contactType: "booking and enquiries",
      areaServed: ["MY", "International"],
      availableLanguage: ["English", "Malay", "Chinese"],
    },
  ],
  event: {
    "@type": "Event",
    name: "Jom Bah! Ketawa Bersama",
    startDate: "2026-06-17T11:00:00+08:00",
    endDate: "2026-06-17T13:00:00+08:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Bataras Hypermarket Tawau Indoor Playground",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tawau",
        addressCountry: "MY",
      },
    },
    performer: [
      { "@type": "Person", name: "Uncle Sunday" },
      { "@type": "Person", name: "Uncle Button" },
    ],
    image: [`${siteUrl}/hero-roadshow-banner.jpg`],
    description:
      "Meet the clowns, magicians, and creative performers at Jom Bah! Ketawa Bersama in Tawau.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
