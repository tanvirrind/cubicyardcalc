import Link from "next/link";
import PostHoleCalculator from "../../../components/PostHoleCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import { appJsonLd, breadcrumbJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Post Hole Concrete Calculator — Bags per Hole",
  description:
    "Free post hole concrete calculator: hole diameter, depth, and number of holes → cubic feet, cubic yards, and bags of concrete per hole, with post-volume deduction.",
  keywords: [
    "post hole concrete calculator",
    "how many bags of concrete per post hole",
    "concrete for fence posts calculator",
    "fence post concrete calculator",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/calculators/post-hole-concrete-calculator/" },
  openGraph: {
    title: "Post Hole Concrete Calculator — Bags per Hole | Cubic Yard Calculator",
    description:
      "Bags of concrete per fence or deck post hole, from diameter and depth. Free.",
    url: "https://cubicyardcalculator.site/calculators/post-hole-concrete-calculator/",
  },
};

const faqs = [
  {
    q: "How many bags of concrete do I need per post hole?",
    a: "A 12-inch-diameter hole 36 inches deep holds about 2.36 cubic feet of concrete — that's 4 bags of 80 lb mix, 5 of 60 lb, 6 of 50 lb, or 8 of 40 lb. Deduct the post itself (a 4×4 takes up about 0.26 ft³) and it drops to roughly 2.1 ft³, still 4 × 80 lb bags.",
  },
  {
    q: "How wide should a post hole be?",
    a: "Roughly three times the post width: 10–12 inches for a 4×4 post, 14–16 inches for a 6×6. Wider holes in soft or sandy soil give the concrete more bearing surface; in firm clay you can stay near the minimum.",
  },
  {
    q: "How deep should a post hole be?",
    a: "At least one-third of the post's above-ground height, and deeper than the frost line in cold climates (12–48 inches depending on region). A 6-foot fence wants 36-inch holes where frost isn't a factor — always check local code before digging.",
  },
  {
    q: "Should I subtract the post volume from the concrete?",
    a: "Yes for accuracy. A 4×4 post (3.5 in × 3.5 in) in a 36-inch hole displaces about 0.26 cubic feet — roughly half a bag. The calculator above deducts it automatically.",
  },
  {
    q: "Bagged concrete or ready-mix for fence posts?",
    a: "Bags win for a few holes — a fence line of 10–15 holes is usually still under half a yard. Past about 2 cubic yards total (roughly 25+ standard holes), get a ready-mix price; bagging that much by hand is slow and expensive.",
  },
];

export default function PostHoleConcreteCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd
          data={appJsonLd({
            name: "Post Hole Concrete Calculator",
            url: "/calculators/post-hole-concrete-calculator/",
            description:
              "Free post hole calculator: concrete volume and bag counts from hole diameter, depth, and post size.",
          })}
        />
        <JsonLd data={faqJsonLd(faqs)} />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Calculators", href: "/calculators/" },
            { name: "Post Hole Concrete Calculator" },
          ])}
        />
        <div className="kicker">Fences, decks, mailboxes, sign posts</div>
        <h1 className="h2">Post hole concrete calculator</h1>
        <p className="sub">
          Enter hole diameter and depth, set the post size to deduct, and get
          cubic feet, cubic yards, and bag counts — per hole and for the
          whole project.
        </p>
        <div className="answer-box">
          <p>
            <span className="lead-answer">Quick answer:</span> Hole volume is
            π × radius² × depth. A 12 in diameter × 36 in deep hole holds π ×
            0.5² × 3 = <strong>2.36 ft³</strong> of concrete. At 0.60 ft³ per
            80 lb bag: ceil(2.36 / 0.60) = <strong>4 bags</strong>. Add 10%
            because concrete sinks into loose soil.
          </p>
        </div>
        <PostHoleCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Hole walls are never perfect
          cylinders — irregular sides and loose soil can add 10–20% beyond
          the math. Bell out the bottom of the hole in frost country for
          uplift resistance.
        </p>

        <div className="card" style={{ marginTop: 44, maxWidth: 780, padding: "24px 28px" }}>
          <h3 style={{ marginTop: 0 }}>Sizing rules that keep posts standing</h3>
          <ul style={{ lineHeight: 1.7, marginBottom: 0 }}>
            <li><strong>Width:</strong> hole diameter ≈ 3× the post width. A 4×4 (3.5 in) wants a 10–12 in hole.</li>
            <li><strong>Depth:</strong> one-third to one-half of the post's above-ground length — or deeper than the frost line, whichever is deeper.</li>
            <li><strong>Frost line:</strong> 12 in in the deep South, up to 48 in in the northern states. Consult your local building code.</li>
            <li><strong>Drainage:</strong> 4–6 in of gravel under the post keeps water off the end grain.</li>
          </ul>
        </div>

        <Faq items={faqs} heading="Questions people actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Working out a full slab instead? The{" "}
          <Link href="/calculators/concrete-bag-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete bag calculator
          </Link>{" "}
          compares bag sizes two ways, and the{" "}
          <Link href="/calculators/concrete-footing-calculator/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            concrete footing calculator
          </Link>{" "}
          handles strip footings.
        </p>
      </div>
    </section>
  );
}
