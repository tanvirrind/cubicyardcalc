import "./globals.css";
// Self-hosted fonts via Fontsource. next/font/google is intentionally NOT
// used: it fetches from fonts.googleapis.com at build time, which the
// Hostinger build sandbox blocks (build fails with a null-read in the
// Google font loader). npm registry access works, so fonts ride along
// with the dependencies instead.
import "@fontsource-variable/oswald";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

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
    <html lang="en">
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
