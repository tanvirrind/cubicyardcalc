import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "Editorial Policy: How Our Guides Are Made",
  description:
    "Who runs cubicyardcalculator.site, how our material guides are researched and reviewed, our no-sponsored-content policy, and how to report an error.",
  keywords: [
    "cubic yard calculator editorial policy",
    "cubicyardcalculator.site about",
    "how guides are researched",
    "editorial standards",
  ],
  alternates: { canonical: `${SITE_URL}/editorial-policy/` },
  openGraph: {
    title: "Editorial Policy: How Our Guides Are Made | Cubic Yard Calculator",
    description:
      "Who runs this site, how our guides are researched and reviewed, and our no-sponsored-content, no-paid-links policy.",
    url: `${SITE_URL}/editorial-policy/`,
  },
};

const faqs = [
  {
    q: "Who writes the guides on this site?",
    a: "The guides are researched and written by the Cubic Yard Calculator team — not by contributors we don't know, and not by guest posters. There is no outside editorial staff and no freelance bylines.",
  },
  {
    q: "Do you accept sponsored content or paid links?",
    a: "No. We don't sell placements, sponsored guides, or paid links. If that ever changes, any commercial relationship would be disclosed on the page itself — but today there are none.",
  },
  {
    q: "How do you keep the numbers in guides accurate?",
    a: "Every guide's figures are checked against the calculators' shared calculation library before publication, so a guide and a calculator can never disagree. Density and yield figures are representative published ranges, documented in our methodology page.",
  },
  {
    q: "What happens if I spot a mistake?",
    a: "Tell us via the contact page with the page name and what looks wrong. Verified corrections are fixed and dated — the page's last-modified date reflects the fix.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Editorial Policy: How Our Guides Are Made",
  description: metadata.description,
  url: `${SITE_URL}/editorial-policy/`,
  inLanguage: "en-US",
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function EditorialPolicyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Trust &amp; transparency</div>
        <h1 className="h2">Editorial policy</h1>
        <p className="sub">
          This page says, in plain language, who runs this site, how the
          content is produced, and what standards it is held to. No
          corporate fluff.
        </p>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>
            Who runs this site
          </h2>
          <p>
            cubicyardcalculator.site is run by the{" "}
            <strong>Cubic Yard Calculator team</strong> — a small operation
            focused on one thing: accurate, free material-estimation tools
            and guides for projects measured in cubic yards. The{" "}
            <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              calculators
            </Link>{" "}
            and the{" "}
            <Link href="/guides/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              guides
            </Link>{" "}
            are produced by the same team, and both live at this address.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            How guides are researched
          </h2>
          <p>
            Every guide starts from published reference sources — standards
            bodies (e.g., ASTM), manufacturer spec sheets and published
            product yields, and established industry conventions — and is
            written around the calculators&apos; math, not the other way
            around. The exact formulas, unit conversions, density figures,
            and bag yields are documented publicly in our{" "}
            <Link href="/methodology/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              methodology
            </Link>
            , so any number in a guide can be checked against the source
            data.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            Review process
          </h2>
          <p>
            Before a guide is published, its figures are cross-checked
            against the calculators&apos; shared calculation library — the
            same single source of math that powers every tool on the site.
            That design makes it structurally impossible for a guide and a
            calculator to disagree: they read the same numbers. Guides are
            re-reviewed when the underlying data changes or when a reader
            reports an error (see below).
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            No sponsored placements, no paid links
          </h2>
          <p>
            We do not accept sponsored content, paid placements, or paid
            links. Recommendations in guides are based on the math and the
            research behind them — not on commercial relationships. If this
            ever changes, any commercial relationship would be disclosed on
            the affected page itself.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            Updates and corrections
          </h2>
          <p>
            Pages are updated when the underlying data changes or when an
            error is confirmed. Corrections are dated: the page&apos;s
            last-modified date reflects when the fix was made, and
            significant corrections are noted. We keep no changelog of
            cosmetic edits, only of changes that affect the numbers or the
            advice.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            Report an error
          </h2>
          <p>
            Found something wrong? Tell us through the{" "}
            <Link href="/contact/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              contact page
            </Link>{" "}
            — include the page name, the numbers you entered if it&apos;s a
            calculator issue, and what you believe is incorrect. Every
            report is checked against the calculation library, and verified
            corrections are fixed and dated.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
      </div>
    </section>
  );
}
