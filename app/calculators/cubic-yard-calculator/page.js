import Link from "next/link";
import CubicYardCalculator from "../../../components/CubicYardCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Cubic Yard Calculator — Volume, Weight & Cost",
  description:
    "Free cubic yard calculator: convert length, width and depth to cubic yards, cubic feet, weight and overage. Works for any bulk material.",
  keywords: [
    "cubic yard calculator",
    "how to calculate cubic yards",
    "cubic yardage calculator",
    "yardage calculator",
    "how many cubic feet in a cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/cubic-yard-calculator/" },
  openGraph: {
    title: "Cubic Yard Calculator — Volume, Weight & Cost | Cubic Yard Calculator",
    description:
      "Length × width × depth → cubic yards, cubic feet, weight and 10% overage. Free, no signup.",
    url: "https://cubicyardcalculator.site/calculators/cubic-yard-calculator/",
  },
};

const faqs = [
  {
    q: "How do you calculate cubic yards?",
    a: "Multiply length by width by depth in feet, then divide the total cubic feet by 27. If depth is in inches, divide the inches by 12 before using the formula.",
  },
  {
    q: "What is the formula for cubic yards?",
    a: "The formula is length × width × depth in feet divided by 27. The result is cubic yards.",
  },
  {
    q: "How many cubic feet are in a cubic yard?",
    a: "There are 27 cubic feet in 1 cubic yard. Multiply cubic yards by 27 to convert to cubic feet.",
  },
  {
    q: "Is a yard the same as a cubic yard?",
    a: "No. A yard is a length of 3 feet. A cubic yard is a volume: 3 feet long, 3 feet wide, and 3 feet deep, equal to 27 cubic feet.",
  },
  {
    q: "Should I order extra material?",
    a: "Yes, most projects should include about 10 percent extra. This covers compaction, uneven ground, spillage, and small measuring differences.",
  },
];

export default function CubicYardCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Cubic Yard Calculator",
            url: "/calculators/cubic-yard-calculator/",
            description:
              "Free cubic yard calculator: length × width × depth to cubic yards, cubic feet, weight and overage.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Cubic Yard Calculator" },
          ])}
        />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Cubic yard calculator</h1>
        <p className="sub">
          Enter length, width and depth to get cubic yards, cubic feet,
          estimated weight, and a 10 percent overage recommendation for any
          bulk material.
        </p>
        <CubicYardCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates volume and
          weight from the numbers you punch in — densities are typical values
          that change with moisture and compaction. Always confirm with your
          supplier before ordering or hauling.
        </p>
        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Need a material-specific tool? Try the{" "}
          <Link href="/calculators/concrete-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete calculator
          </Link>
          ,{" "}
          <Link href="/calculators/mulch-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            mulch calculator
          </Link>{" "}
          or the{" "}
          <Link href="/calculators/tons-to-cubic-yards-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            tons-to-yards converter
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
