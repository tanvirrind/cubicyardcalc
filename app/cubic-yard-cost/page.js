import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

const SITE_URL = "https://cubicyardcalculator.site";

export const metadata = {
  title: "How Much Is a Cubic Yard? Cost and Ordering Guide",
  description:
    "What affects the cost of a cubic yard of dirt, mulch, gravel, sand, rock or concrete, and how to estimate your delivered project total. 2026 pricing.",
  keywords: [
    "how much is a cubic yard",
    "cubic yard cost",
    "how much does a cubic yard cost",
    "cost per cubic yard",
  ],
  alternates: { canonical: `${SITE_URL}/cubic-yard-cost/` },
  openGraph: {
    title: "How Much Is a Cubic Yard? Cost and Ordering Guide | Cubic Yard Calculator",
    description:
      "2026 cost guide: what a cubic yard of dirt, mulch, gravel, sand, rock or concrete costs delivered — and how to compare quotes.",
    url: `${SITE_URL}/cubic-yard-cost/`,
  },
};

const faqs = [
  {
    q: "How much does a cubic yard cost?",
    a: "There is no single national price. Cost depends on material, location, supplier, delivery distance, order size, and current local demand. Ready-mix concrete in 2026 typically runs $125–$195 per cubic yard delivered (about $130 on average); bulk mulch, soil, gravel and sand vary widely by region — always compare delivered totals.",
  },
  {
    q: "What is usually included in the price?",
    a: "A quote may include only the material, or it may include delivery, loading, taxes, minimum-order fees, and spreading. Ask the supplier what is included.",
  },
  {
    q: "Is buying by the yard cheaper than buying bags?",
    a: "Bulk material is often more economical for larger areas, while bags can be practical for small projects or places without delivery access. Compare the delivered total. For concrete, ready-mix usually beats bags past about 1–2 cubic yards.",
  },
  {
    q: "How do I estimate my total cost?",
    a: "Multiply the required cubic yards by the supplier price per yard, then add delivery and other listed fees. Include overage in the quantity before calculating the total.",
  },
  {
    q: "What are short-load fees?",
    a: "Concrete suppliers commonly charge a short-load fee of $50–$200 for orders under about 5 cubic yards, because the truck still makes the trip. Small orders can cost far more per yard than the headline price suggests.",
  },
];

const priceFactors = [
  { factor: "Material", why: "Mulch, soil, gravel, sand, rock, and concrete have different production and handling costs." },
  { factor: "Delivery distance", why: "Longer routes and difficult access can increase delivery charges." },
  { factor: "Order size", why: "Suppliers may have minimum charges or different bulk pricing." },
  { factor: "Material grade", why: "Screening, color, stone size, and blend affect the product price." },
  { factor: "Season and location", why: "Local demand, weather, and availability can change quotes." },
];

const supplierQuestions = [
  "Is the quoted price per cubic yard, ton, bag, or load?",
  "Is delivery included, and is there a minimum order?",
  "What material density or product yield should I use?",
  "Are taxes, loading, fuel, or spreading fees separate?",
  "How much notice is needed for delivery?",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Is a Cubic Yard? Cost and Ordering Guide",
  description: metadata.description,
  url: `${SITE_URL}/cubic-yard-cost/`,
  inLanguage: "en-US",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  author: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Cubic Yard Calculator", url: SITE_URL },
};

export default function CostPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Material cost planning</div>
        <h1 className="h2">How much is a cubic yard?</h1>
        <p className="sub">
          The price of a cubic yard depends on the material, supplier,
          delivery distance, order size, and local market. Use the guide
          below to compare quotes accurately.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Important:</span> A cubic-yard
            price is not a universal fixed rate. Compare the{" "}
            <strong>delivered total</strong> and confirm whether the quote
            includes taxes, delivery, minimums, and fees.
          </p>
        </div>

        <div className="card" style={{ marginTop: 32, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>What changes the price?</h3>
          <table className="ref-table">
            <thead>
              <tr><th>Factor</th><th>Why it matters</th></tr>
            </thead>
            <tbody>
              {priceFactors.map((r) => (
                <tr key={r.factor}>
                  <td>{r.factor}</td>
                  <td>{r.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: 720, marginTop: 40 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Estimate your material cost</h2>
          <p>
            First calculate your required volume, including any overage. Then
            enter the supplier&apos;s price per cubic yard to estimate the
            material cost. For concrete, the{" "}
            <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              concrete calculator&apos;s built-in cost estimator
            </Link>{" "}
            does this automatically — price per yard, delivery fee, and tax.
          </p>
          <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
            Questions to ask a supplier
          </h2>
          <ul style={{ lineHeight: 1.8, paddingLeft: 20 }}>
            {supplierQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Related guides:{" "}
          <Link href="/how-to-calculate-cubic-yards" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how to calculate cubic yards
          </Link>
          ,{" "}
          <Link href="/cubic-yard-coverage" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            cubic yard coverage
          </Link>
          , the{" "}
          <Link href="/calculators/tons-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            tons to cubic yards converter
          </Link>
          , and the{" "}
          <Link href="/calculators/concrete-bag-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete bag calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
