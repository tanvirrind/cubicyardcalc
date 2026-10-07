export const metadata = {
  title: "Privacy Policy - Cubic Yard Calculator",
  description:
    "Read the Cubic Yard Calculator privacy policy covering cookies, analytics, contact data and site usage. All math runs in your browser.",
  keywords: ["privacy policy cubic yard calculator"],
  alternates: { canonical: "https://cubicyardcalculator.site/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy - Cubic Yard Calculator | Cubic Yard Calculator",
    description:
      "How this site handles cookies, analytics, and contact information.",
    url: "https://cubicyardcalculator.site/privacy-policy/",
  },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Site policy</div>
        <h1 className="h2">Privacy policy — Cubic Yard Calculator</h1>
        <p className="sub">
          What information may be collected when you use
          cubicyardcalculator.site.
        </p>
        <div style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.75 }}>
          <h2>Information we collect</h2>
          <p>
            Cubic Yard Calculator does not require accounts, logins,
            purchases, or personal profiles. The calculator inputs you enter
            are processed in your browser and are not stored by the site.
          </p>
          <p>
            If you contact us, your name, email address, and message travel
            through your own email application to ours. That information is
            used only to read and respond to your message.
          </p>
          <h2>Advertising and cookies</h2>
          <p>
            This site may show advertising in the future. If it does, the ad
            provider may use cookies to serve ads, limit repeated ads,
            measure ad performance, and personalize advertising where
            permitted. You can learn more about how Google uses information
            from sites that use its services by visiting Google&apos;s privacy
            resources.
          </p>
          <h2>Analytics</h2>
          <p>
            This site may use analytics to understand page views, traffic
            sources, device types, and general usage patterns. Analytics data
            helps improve calculators, page content, and site performance, and
            may use cookies or similar technologies to collect aggregated
            usage information.
          </p>
          <h2>Data sharing</h2>
          <p>
            We do not sell personal information. Information may be processed
            by service providers such as web hosting, analytics, or email
            providers when those services are enabled.
          </p>
          <h2>Your choices</h2>
          <p>
            You can disable cookies in your browser settings. You can also
            avoid sending contact information if you do not want to provide
            your name, email address, or message.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, use the contact page on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
