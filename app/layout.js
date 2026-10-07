import "./globals.css";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://cubicyardcalculator.site";
const SITE_NAME = "Cubic Yard Calculator";
const DEFAULT_TITLE =
  "Cubic Yard Calculator: Free Tool for Concrete, Gravel, Mulch";
const DEFAULT_DESC =
  "Calculate cubic yards instantly for concrete, gravel, mulch, dirt, sand and rock. Get volume, weight and cost free.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Cubic Yard Calculator",
  },
  description: DEFAULT_DESC,
  keywords: [
    "cubic yard calculator",
    "how to calculate cubic yards",
    "concrete calculator",
    "mulch calculator",
    "gravel calculator",
    "dirt calculator",
    "sand calculator",
    "tons to cubic yards calculator",
    "square feet to cubic yards calculator",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
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
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESC,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESC,
  inLanguage: "en-US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={orgJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
