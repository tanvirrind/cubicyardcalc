import Link from "next/link";
import TopsoilCalculator from "../../../components/TopsoilCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Topsoil Calculator - Cubic Yards and Tons for Gardens",
  description:
    "Calculate cubic yards of topsoil for gardens, lawns and raised beds. Weight in tons, garden-bed presets and topsoil vs fill dirt guidance.",
  keywords: [
    "topsoil calculator",
    "how much topsoil do i need",
    "topsoil cubic yards",
    "how many yards of topsoil for raised bed",
    "topsoil tons calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/topsoil-calculator/" },
  openGraph: {
    title: "Topsoil Calculator - Cubic Yards and Tons for Gardens | Cubic Yard Calculator",
    description:
      "Free topsoil calculator: cubic yards and tons for gardens, lawns and raised beds, with one-click presets.",
    url: "https://cubicyardcalculator.site/calculators/topsoil-calculator/",
  },
};

const faqs = [
  {
    q: "How do I calculate how much topsoil I need?",
    a: "Multiply length by width by depth in feet, then divide by 27. A 4×8 ft raised bed at 12 inches deep needs about 1.19 cubic yards.",
  },
  {
    q: "How much does a cubic yard of topsoil weigh?",
    a: "About 2,400 lbs, or 1.2 tons. Moisture can push it higher — wet topsoil weighs noticeably more than dry.",
  },
  {
    q: "How deep should topsoil be for a garden?",
    a: "Most vegetable gardens and flower beds do well with 6 to 12 inches of topsoil. Lawn topdressing only needs 1 to 2 inches.",
  },
  {
    q: "What is the difference between topsoil and fill dirt?",
    a: "Topsoil is the screened, nutrient-rich upper layer used for lawns, gardens, and planting. Fill dirt is unscreened subsoil for grading and raising low areas — cheaper, but not for growing.",
  },
  {
    q: "Should I add extra topsoil?",
    a: "Yes — about 10 percent. Topsoil settles after spreading and watering, so the overage keeps beds at full depth.",
  },
];

export default function TopsoilCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Topsoil Calculator",
            url: "/calculators/topsoil-calculator/",
            description:
              "Free topsoil calculator: cubic yards and tons for gardens, lawns and raised beds, with garden-bed presets.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Topsoil Calculator" },
          ])}
        />
        <div className="kicker">Gardens, lawns, and raised beds</div>
        <h1 className="h2">Topsoil calculator</h1>
        <p className="sub">
          Estimate cubic yards and tons of screened topsoil for gardens,
          lawns, and raised beds — with one-click presets for common
          projects.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Length × width
            × depth in feet ÷ 27 = cubic yards. A 4 × 8 ft raised bed at 12
            inches deep needs (4 × 8 × 1) / 27 ={" "}
            <strong>1.19 cubic yards</strong> — about 1.43 tons.
          </p>
        </div>
        <TopsoilCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Screened topsoil varies by
          supplier — confirm the blend (and whether it&apos;s sold by yard or
          ton) before ordering.
        </p>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Grading instead of planting? The{" "}
          <Link href="/calculators/fill-dirt-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            fill dirt calculator
          </Link>{" "}
          is the cheaper option, and the{" "}
          <Link href="/calculators/dirt-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            dirt calculator
          </Link>{" "}
          compares all three soil types side by side.
        </p>
      </div>
    </section>
  );
}
