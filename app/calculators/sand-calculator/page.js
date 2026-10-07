import Link from "next/link";
import SandCalculator from "../../../components/SandCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Sand Cubic Yard Calculator - Free Sand Volume Tool",
  description:
    "Calculate cubic yards of sand for pavers, pools, leveling and fill. Get cubic yards, tons, weight and overage with this free sand calculator.",
  keywords: [
    "sand calculator",
    "how much sand do i need",
    "how many tons of sand in a cubic yard",
    "how many 50 lb bags of sand in a cubic yard",
    "sand for pavers calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/sand-calculator/" },
  openGraph: {
    title: "Sand Cubic Yard Calculator - Free Sand Volume Tool | Cubic Yard Calculator",
    description:
      "Cubic yards of sand for pavers, pools, leveling and fill — tons, weight and overage. Free.",
    url: "https://cubicyardcalculator.site/calculators/sand-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate cubic yards of sand?",
    a: "Multiply length by width by depth in feet, then divide by 27. Use inches for shallow paver or pool base depths.",
  },
  {
    q: "How much does a cubic yard of sand weigh?",
    a: "Sand is about 2,700 lbs per cubic yard dry (1.35 tons). Wet sand can weigh more, so confirm hauling limits.",
  },
  {
    q: "How deep should paver sand be?",
    a: "A 1 inch bedding layer is common for pavers after the base is prepared. Follow the paver manufacturer or contractor guidance.",
  },
  {
    q: "How many 50 lb bags of sand are in a cubic yard?",
    a: "About 54 bags. A cubic yard of sand weighs roughly 2,700 lbs, and 2,700 / 50 = 54 bags. For large areas, bulk delivery is much cheaper.",
  },
  {
    q: "How much sand do I need for a 10x10 paver patio?",
    a: "At 1 inch of bedding sand, a 10x10 ft patio needs about 0.31 cubic yards. Order about 0.4 yards to cover screeding waste and settling.",
  },
  {
    q: "Can I use play sand for pavers?",
    a: "No. Play sand is too fine — it washes out and does not interlock. Use coarse concrete sand for paver bedding.",
  },
];

export default function SandCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Sand Cubic Yard Calculator",
            url: "/calculators/sand-calculator/",
            description:
              "Free sand calculator: cubic yards, tons, weight and overage for pavers, pools, leveling and fill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Sand Calculator" },
          ])}
        />
        <div className="kicker">Pavers, pools, leveling, and fill</div>
        <h1 className="h2">Sand cubic yard calculator</h1>
        <p className="sub">
          Calculate sand volume in cubic yards, weight in tons and pounds,
          50 lb bag counts, and recommended overage.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × depth in feet and divide by 27. A 10 × 10 ft area
            leveled 2 inches deep needs (10 × 10 × 0.167) / 27 ={" "}
            <strong>0.62 cubic yards</strong> of sand — about 0.83 tons. Add
            10 to 15 percent extra for compaction and leveling waste.
          </p>
        </div>
        <SandCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Moisture changes sand weight
          noticeably — wet sand weighs more, so confirm hauling limits and
          supplier weights before transport.
        </p>
        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Estimating by area? The{" "}
          <Link href="/calculators/square-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square-feet converter
          </Link>{" "}
          is made for it, and the{" "}
          <Link href="/calculators/gravel-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            gravel calculator
          </Link>{" "}
          handles the compacted base under the sand.
        </p>
      </div>
    </section>
  );
}
