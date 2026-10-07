import Link from "next/link";
import DirtCalculator from "../../../components/DirtCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Dirt Calculator - Cubic Yards of Fill Dirt and Topsoil",
  description:
    "Calculate cubic yards of dirt or topsoil for any project. Free dirt calculator for fill, raised beds and levelling. Instant weight and coverage results.",
  keywords: [
    "dirt calculator",
    "fill dirt calculator",
    "how many yards of dirt do i need",
    "topsoil calculator",
    "how much dirt for a raised garden bed",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/dirt-calculator/" },
  openGraph: {
    title: "Dirt Calculator - Cubic Yards of Fill Dirt and Topsoil | Cubic Yard Calculator",
    description:
      "Free dirt calculator for fill, raised beds and levelling — cubic yards, tons, and overage.",
    url: "https://cubicyardcalculator.site/calculators/dirt-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate cubic yards of dirt?",
    a: "Measure length and width in feet, multiply by depth in feet, then divide by 27. Use inches for depth if you are filling a shallow area.",
  },
  {
    q: "Is fill dirt the same as topsoil?",
    a: "No. Fill dirt is usually used for grading and backfill, while topsoil is screened for lawns and planting areas.",
  },
  {
    q: "How much does a cubic yard of dirt weigh?",
    a: "Fill dirt is often about 2,200 lbs per cubic yard (1.1 tons). Topsoil is commonly about 2,400 lbs per cubic yard (1.2 tons).",
  },
  {
    q: "How deep should topsoil be for grass?",
    a: "New grass usually needs 4 to 6 inches of good topsoil. Thin lawn repairs may need 1 to 2 inches.",
  },
  {
    q: "How do I estimate dirt for raised beds?",
    a: "Multiply bed length by width by soil depth in feet, then divide by 27. A 4x8 bed filled 12 inches deep needs about 1.19 cubic yards.",
  },
  {
    q: "Does dirt settle after delivery?",
    a: "Yes. Loose dirt compacts 10 to 30 percent when placed, watered, and tamped. Order extra and expect to top off low spots after the first heavy rain.",
  },
];

export default function DirtCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Cubic Yard Calculator for Dirt and Soil",
            url: "/calculators/dirt-calculator/",
            description:
              "Free dirt calculator: cubic yards and tons of fill dirt, topsoil or garden soil for beds, grading and backfill.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Dirt Calculator" },
          ])}
        />
        <div className="kicker">Soil, fill, and garden projects</div>
        <h1 className="h2">Dirt calculator — fill dirt and topsoil</h1>
        <p className="sub">
          Estimate dirt, topsoil, or garden soil volume and weight, plus a
          compaction-aware overage recommendation for landscaping or fill work.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Multiply length
            × width × depth in feet and divide by 27. A 10 × 10 ft area filled
            6 inches deep needs (10 × 10 × 0.5) / 27 ={" "}
            <strong>1.85 cubic yards</strong>. Add 10 to 15 percent extra for
            compaction, since fill dirt settles after placement.
          </p>
        </div>
        <DirtCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Densities change with
          moisture, compaction, and screening — confirm weights and delivery
          minimums with your supplier before ordering.
        </p>
        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Pair it with the{" "}
          <Link href="/calculators/mulch-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            mulch calculator
          </Link>{" "}
          for beds, or the{" "}
          <Link href="/calculators/square-feet-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            square-feet converter
          </Link>{" "}
          when you only know the area.
        </p>
      </div>
    </section>
  );
}
