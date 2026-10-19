import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { siteConfig } from "@/lib/siteConfig";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Advanced Water Purification & Treatment Systems Kerala`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Pure Solutions. Healthy Future.`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/flyers/amra-stp-etp-ro-overview.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Complete Water Treatment Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Water Treatment Solutions`,
    description: siteConfig.description,
    images: ["/images/flyers/amra-stp-etp-ro-overview.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phones.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Amar water Solution building, 125/56, Vadakkenada, Udhayanapuram, near Chakkara Bakary, Vadakkemuri",
      addressLocality: "Vaikom",
      addressRegion: "Keralam",
      postalCode: "686143",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.7547,
      longitude: 76.3956,
    },
    areaServed: [
      { "@type": "City", name: "Kottayam" },
      { "@type": "City", name: "Vaikom" },
      { "@type": "City", name: "Kochi" },
      { "@type": "City", name: "Kozhikode" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
