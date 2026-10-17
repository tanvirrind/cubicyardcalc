import Link from "next/link";
import FenceCostCalculator from "../../../components/FenceCostCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Fence Cost Calculator — Installed Price Per Linear Foot",
  description:
    "Free fence cost calculator: installed price ranges by fence type (chain-link, wood, vinyl, aluminum) and height, plus a rough materials-only split for budgeting.",
  keywords: [
    "fence cost calculator",
    "fence installation cost per foot",
    "wood fence cost per linear foot",
    "how much does a fence cost",
    "chain link fence cost per foot",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/fence-cost-calculator/" },
  openGraph: {
    title: "Fence Cost Calculator — Installed Price Per Linear Foot | Cubic Yard Calculator",
    description:
      "Ballpark fence installation cost by type and height, with a materials-only planning split. Free.",
    url: "https://cubicyardcalculator.site/calculators/fence-cost-calculator/",
  },
};

const faqs = [
  {
    q: "How much does a 100 ft wood privacy fence cost?",
    a: "At 6 ft tall, wood privacy runs $18–$45 per linear foot installed (typical US range), so 100 ft lands at $1,800–$4,500. Materials alone are roughly half of that — about $900–$2,250 — with labor making up the rest. Slopes, gates, and old-fence removal push you toward the high end.",
  },
  {
    q: "How much does a fence cost per linear foot?",
    a: "Installed, at the standard 6 ft height: chain-link $10–$22 per linear foot, wood privacy $18–$45, vinyl $28–$62, and aluminum/ornamental $30–$58 (typical US ranges). Shorter 4 ft fences run less per foot; 8 ft fences run more. These are ballpark planning ranges, not quotes.",
  },
  {
    q: "What is the materials vs labor split on a fence?",
    a: "Roughly half and half on a straightforward job — that's why the calculator shows a materials-only line at about 50% of the installed range. Treat it as a budgeting split, not a quote: the labor share climbs on sloped lots, rocky digging, and jobs with lots of gates.",
  },
  {
    q: "How tall should my fence be?",
    a: "Six feet is the privacy standard for backyards; 4 ft is typical out front and around pools. Most cities cap residential fences at 6–8 ft, and HOAs often have their own rules — check both before you buy materials.",
  },
  {
    q: "What makes a fence quote come in high?",
    a: "The big adders: sloped ground (stepped or racked sections), rocky or root-filled digging, gates (often $150+ each installed), tearing out and hauling away the old fence, and permits. Long straight runs on flat, clear ground are the cheapest per foot you'll get.",
  },
];

export default function FenceCostCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Fence Cost Calculator",
            url: "/calculators/fence-cost-calculator/",
            description:
              "Free fence cost calculator: installed price ranges by fence type and height, with a rough materials-only split for budgeting.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Fence Cost Calculator" },
          ])}
        />
        <div className="kicker">Backyard fences, privacy fences, chain-link</div>
        <h1 className="h2">Fence cost calculator: installed ballparks</h1>
        <p className="sub">
          Pick a fence type and height, enter the run length, and get an
          installed price range plus a rough materials-only split — so you
          know whether a quote is in the right neighborhood before you sign.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Fence cost ≈
            linear feet × installed price per foot. A 100 ft wood privacy
            fence at 6 ft runs 100 × $18–$45 ={" "}
            <strong>$1,800–$4,500 installed</strong>; materials alone run
            about half that — <strong>$900–$2,250</strong>. Every figure here
            is a ballpark, not a quote.
          </p>
        </div>
        <FenceCostCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> These are typical US
          planning ranges. Your metro's labor rates, soil, slope, gates, and
          permit fees decide the real number — get 2–3 local quotes before
          you budget the job.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>What moves the per-foot number</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Height:</strong> 6 ft is the baseline — 4 ft runs less, 8 ft runs noticeably more in both materials and labor.</li>
            <li><strong>Material:</strong> chain-link is the budget pick; wood privacy is the middle; vinyl and aluminum/ornamental are the premium picks.</li>
            <li><strong>Ground:</strong> slopes need stepped or racked sections; rocky soil slows every post hole.</li>
            <li><strong>Extras:</strong> gates, old-fence tear-out and haul-away, and permits are quoted separately almost everywhere.</li>
            <li><strong>Run length:</strong> short runs cost more per foot — mobilization and gates spread over fewer feet.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 24, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Where these ranges come from</h3>
          <p style={{ lineHeight: 1.7, marginBottom: 0 }}>
            The per-foot ranges above are typical US installed ballparks for
            a straightforward job on level ground — the same assumptions
            behind every cost estimate on this site. Read{" "}
            <Link href="/methodology/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
              our methodology
            </Link>{" "}
            for exactly what "typical" means and what it excludes.
          </p>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Planning the whole project budget? Start with{" "}
          <Link href="/methodology/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            how we estimate costs
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
