import Link from "next/link";
import YardsToTonsCalculator from "../../../components/YardsToTonsCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";
import { DENSITIES } from "../../../lib/calc";

export const metadata = {
  title: "Cubic Yards to Tons Calculator — Free Weight Converter",
  description:
    "Free cubic yards to tons converter for ANY bulk material: pick a material and type, get tons, metric tonnes, and total pounds, plus a full density chart.",
  keywords: [
    "cubic yards to tons calculator",
    "convert cubic yards to tons",
    "cubic yards to tonnes",
    "how many tons in a cubic yard",
    "cubic yard weight converter",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/cubic-yards-to-tons-calculator/" },
  openGraph: {
    title: "Cubic Yards to Tons Calculator — Free Weight Converter | Cubic Yard Calculator",
    description:
      "Cubic yards → tons, tonnes, and pounds for any material — with a full density chart. Free.",
    url: "https://cubicyardcalculator.site/calculators/cubic-yards-to-tons-calculator/",
  },
};

const faqs = [
  {
    q: "What is the formula for cubic yards to tons?",
    a: "Tons = cubic yards × (lbs per cubic yard) ÷ 2,000. Example: 10 yd³ of crushed stone at 2,800 lbs/yd³ → 10 × 2,800 ÷ 2,000 = 14 US short tons. A cubic yard of one material can weigh double another, so the material choice is the whole answer.",
  },
  {
    q: "What is the difference between a ton and a tonne?",
    a: "A US short ton is 2,000 lbs; a metric tonne is 2,204.62 lbs (1,000 kg). One short ton = 0.9072 tonnes. The converter above shows both, plus total pounds, on every result.",
  },
  {
    q: "How much does a cubic yard of gravel, sand, or mulch weigh?",
    a: "Crushed stone runs about 1.40 tons/yd³ (2,800 lbs), sand 1.35–1.55 tons/yd³ depending on moisture, and mulch only about 0.40 tons/yd³ (800 lbs). See the full density chart below for every material and variant.",
  },
  {
    q: "How do I convert tons back to cubic yards?",
    a: "Go the other direction: cubic yards = tons ÷ density in tons/yd³. Our tons-to-cubic-yards converter does it in one click — pick your material and it handles the density.",
  },
  {
    q: "Why was my load heavier than the calculator said?",
    a: "Moisture is the usual culprit. Wet sand can hit 3,100 lbs/yd³ versus 2,700 dry — an extra 400 lbs on every yard. Compaction during transport adds weight too. Pick the matching material type in the dropdown (e.g. Wet sand) and confirm with your supplier on big orders.",
  },
];

// Full density chart, rendered live from DENSITIES so it can never drift
// from the converters. tons/yd³ = lbs ÷ 2,000.
const DENSITY_ROWS = Object.values(DENSITIES).flatMap((m) =>
  m.variants.map((v, i) => ({
    material: m.label,
    first: i === 0,
    rowSpan: m.variants.length,
    variant: `${v.label}${i === 0 ? " (default)" : ""}`,
    lbs: v.lbs.toLocaleString("en-US"),
    tons: (v.lbs / 2000).toFixed(2),
  }))
);

const linkStyle = { color: "var(--accent-deep)", fontWeight: 700 };

export default function YardsToTonsCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Cubic Yards to Tons Calculator",
            url: "/calculators/cubic-yards-to-tons-calculator/",
            description:
              "Free converter: cubic yards to US short tons, metric tonnes, and pounds for any bulk material, with a full density chart.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Cubic Yards to Tons" },
          ])}
        />
        <div className="kicker">Forward direction — yards to weight</div>
        <h1 className="h2">Cubic yards to tons calculator</h1>
        <p className="sub">
          You know the volume and need the weight: type your cubic yards,
          pick ANY material and its type, and get US short tons, metric
          tonnes, and total pounds — with the density used shown every time.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> tons = cubic
            yards × (lbs/yd³) ÷ 2,000. Example: 10 yd³ of crushed stone at
            2,800 lbs/yd³ = <strong>14.0 US short tons</strong> ={" "}
            <strong>12.70 metric tonnes</strong>.
          </p>
        </div>
        <YardsToTonsCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Densities are typical bulk
          values that change with moisture and compaction — wet sand can run
          400 lbs/yd³ heavier than dry. Confirm with your supplier before
          hauling or ordering at truck scale.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 860, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Density chart — tons per cubic yard</h3>
          <p style={{ color: "var(--muted)" }}>
            Every material and material type the converter offers. The density
            you pick is the entire conversion: tons = yards × tons/yd³.
          </p>
          <table className="ref-table">
            <thead>
              <tr><th>Material</th><th>Material type</th><th>lbs / yd³</th><th>tons / yd³</th></tr>
            </thead>
            <tbody>
              {DENSITY_ROWS.map((r, idx) => (
                <tr key={`${r.material}-${r.variant}-${idx}`}>
                  {r.first && (
                    <td rowSpan={r.rowSpan} style={{ fontWeight: 700 }}>
                      {r.material}
                    </td>
                  )}
                  <td>{r.variant}</td>
                  <td className="num">{r.lbs}</td>
                  <td className="num">{r.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 0 }}>
            Representative planning values. For weight-sensitive decisions
            (truck load limits, structural loads), use your supplier&apos;s
            product-specific spec sheet.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 44 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>Worked example</h2>
          <p>
            Say your contractor orders <strong>10 cubic yards of crushed
            stone</strong>. The chart shows crushed stone at 2,800 lbs/yd³ —
            that&apos;s 1.40 tons/yd³. Math: 10 × 2,800 = 28,000 lbs, ÷ 2,000
            = <strong>14.0 US short tons</strong>, × 0.9072 ={" "}
            <strong>12.70 metric tonnes</strong>.
          </p>
          <p>
            Swap the material and watch the weight move: the same 10 yd³ of
            bark mulch is only 4.0 tons, while hot-mix asphalt would be
            19.58 tons. Volume is constant; density is everything.
          </p>
        </div>

        <div style={{ maxWidth: 720, marginTop: 32 }}>
          <h2 className="h2" style={{ fontSize: 28 }}>When to use the other direction</h2>
          <p>
            This converter goes <strong>volume → weight</strong> (you have
            yards, need tons). If the supplier quotes in tons and you need to
            picture the volume — say, will it fit the driveway — use the{" "}
            <Link href="/calculators/tons-to-cubic-yards-calculator/" style={linkStyle}>
              tons to cubic yards converter
            </Link>{" "}
            instead. For a gravel-only two-way tool, the{" "}
            <Link href="/calculators/gravel-to-tons-calculator/" style={linkStyle}>
              gravel to tons converter
            </Link>{" "}
            covers both directions with crushed-stone defaults.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Want the full explanation? The{" "}
          <Link href="/guides/cubic-yards-to-tons-conversion-guide/" style={linkStyle}>
            cubic yards to tons conversion guide
          </Link>{" "}
          walks through the formula with material examples, and{" "}
          <Link href="/guides/how-much-does-a-cubic-yard-weigh/" style={linkStyle}>
            how much a cubic yard weighs
          </Link>{" "}
          compares every material at a glance.
        </p>
      </div>
    </section>
  );
}
