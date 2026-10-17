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
    a: "Yes. Topsoil settles 10 to 20 percent and fill dirt 10 to 15 percent once placed, watered, and tamped, while sand settles only about 5 percent. Order the buffer up front and expect to top off low spots after the first heavy rain.",
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
        <div className="info-block" style={{ marginTop: 32, maxWidth: 720 }}>
          <h2 className="h3">Loose yards vs compacted yards: which are you buying?</h2>
          <p>
            Every soil quote and delivery ticket talks about <strong>cubic
            yards</strong>, but there are two different yards hiding inside
            that word — and ordering the wrong one is how people end up a
            yard short. A <strong>loose yard</strong> is the volume soil
            occupies in the truck: screened, loaded, and full of air.
            A <strong>compacted yard</strong> is the volume the same soil
            occupies in the ground after gravity, rain, and watering (or a
            plate compactor) collapse those air pockets and pack the particles
            together. Your project needs compacted yards; the supplier sells
            loose ones.
          </p>
          <p>
            The gap between them is the fluff factor, and it is bigger than
            most people expect. <strong>Topsoil</strong> delivered loose
            settles <strong>10–20%</strong> — a 6-inch layer is about 5
            inches deep after a few waterings. <strong>Fill dirt</strong>
            settles <strong>10–15%</strong>, faster in wet weather.{" "}
            <strong>Sand</strong> barely settles at all, around{" "}
            <strong>5%</strong>, because its particles are already dense.
            That is why the calculator above defaults to a{" "}
            <strong>×1.10 settlement buffer</strong> on the order quantity,
            and why screened topsoil jobs usually want <strong>×1.15 or
            ×1.25</strong> from the buffer selector — the buffer converts
            your compacted-yard math into the loose-yard quantity the truck
            actually delivers.
          </p>
          <p>
            Two practical rules fall out of this. First, <strong>order the
            loose volume, not the finished depth</strong>: if your design
            calls for 4 inches of compacted crusher run under pavers, you
            need roughly 4.6–4.8 inches of loose material to get there.
            Second, never try to &ldquo;save&rdquo; the buffer — a second
            one-yard delivery with its minimum delivery fee almost always
            costs more than the extra yard would have on day one. Read our{" "}
            <Link href="/guides/how-much-extra-soil-to-order/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              full settlement guide
            </Link>{" "}
            for buffer tables by material and project type.
          </p>
        </div>
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
