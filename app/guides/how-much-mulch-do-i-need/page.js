import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Mulch Do I Need? (Bags vs Bulk Guide)",
  description:
    "Figure mulch in cubic yards and bags with the right depth for your beds. Coverage tables, bag math, and when bulk beats bags. Free mulch calculator.",
  keywords: [
    "how much mulch do i need",
    "how many bags of mulch do i need",
    "mulch coverage calculator",
    "mulch depth guide",
    "how deep should mulch be",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-mulch-do-i-need/" },
  openGraph: {
    title: "How Much Mulch Do I Need? (Bags vs Bulk Guide) | Cubic Yard Calculator",
    description:
      "The mulch formula, coverage tables by depth, and the bag-vs-bulk breakpoint. Free mulch calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-mulch-do-i-need/",
  },
};

const faqs = [
  {
    q: "How much mulch do I need for 100 square feet?",
    a: "At 3 inches deep, 100 sq ft needs about 0.93 cubic yards, or roughly 13 bags of 2 cu ft mulch. Round up to 14 bags, or 15 to 16 with 10% overage.",
  },
  {
    q: "How deep should mulch be?",
    a: "2 to 3 inches for most beds. Use 2 inches for refreshing existing mulch and 3 inches for new beds. More than 4 inches total can hold too much moisture around plants.",
  },
  {
    q: "How many bags of mulch are in a cubic yard?",
    a: "13.5 bags of 2 cu ft mulch, or 9 bags of 3 cu ft mulch. Round up — 14 of the 2 cu ft bags per yard for ordering.",
  },
  {
    q: "Is bulk mulch cheaper than bags?",
    a: "Usually, once you pass about 2 to 3 cubic yards. Compare the all-in price: bulk per-yard price plus delivery vs bag price × total bags. Below ~100 sq ft, bags are simpler.",
  },
  {
    q: "What is a mulch volcano?",
    a: "Piling mulch against a tree trunk in a cone — it rots the bark and invites pests. Keep mulch 3 to 6 inches away from trunks and spread it flat instead.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Mulch Do I Need?"
      description="The exact formula, the right depth for every bed type, coverage tables, and the bags-vs-bulk math that saves real money."
      slug="how-much-mulch-do-i-need"
      calculatorHref="/calculators/mulch-calculator/"
      calculatorLabel="Try the mulch calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Multiply bed length × width × mulch depth in feet, then divide by 27.
        A 200 sq ft bed at 3 inches deep: (200 × 0.25) / 27 ={" "}
        <strong>1.85 cubic yards</strong> — about 25 bags of 2 cu ft mulch, or
        27–28 with 10% overage. For a fast estimate, divide square footage by
        100 for a rough 3-inch figure in yards: 300 sq ft ≈ 2.78 yards.
      </p>

      <h2>Pick the right depth first</h2>
      <p>
        Depth is where most estimates go wrong. Use <strong>2 inches</strong>{" "}
        when refreshing beds that already have mulch — you&apos;re topping up,
        not rebuilding. Use <strong>3 inches</strong> for most new beds: enough
        to suppress weeds and hold moisture without smothering roots. Go to{" "}
        <strong>4 inches</strong> only for coarse mulch or serious weed
        pressure. Keep mulch 3–6 inches away from trunks, stems, and siding —
        the infamous &ldquo;mulch volcano&rdquo; piled against bark rots it
        and invites pests. Measure existing mulch before adding more; the
        total shouldn&apos;t pass 4 inches.
      </p>

      <h2>Coverage: what one cubic yard buys you</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Depth</th><th>Area covered by 1 cubic yard</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">1 inch</td><td className="num">324 sq ft</td></tr>
          <tr><td className="num">2 inches</td><td className="num">162 sq ft</td></tr>
          <tr><td className="num">3 inches</td><td className="num">108 sq ft</td></tr>
          <tr><td className="num">4 inches</td><td className="num">81 sq ft</td></tr>
        </tbody>
      </table>
      <p>
        Sanity-check your calculator result against this table before ordering.
        If the tool says 2 yards for a 216 sq ft bed at 3 inches, the table
        agrees (216 / 108 = 2).
      </p>

      <h2>Bags per cubic yard</h2>
      <p>
        One cubic yard is 27 cubic feet — divide 27 by the bag size:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bag size</th><th>Bags per cubic yard</th><th>Round up to</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">1 cu ft</td><td className="num">27</td><td className="num">27</td></tr>
          <tr><td className="num">1.5 cu ft</td><td className="num">18</td><td className="num">18</td></tr>
          <tr><td className="num">2 cu ft</td><td className="num">13.5</td><td className="num">14</td></tr>
          <tr><td className="num">3 cu ft</td><td className="num">9</td><td className="num">9</td></tr>
        </tbody>
      </table>

      <h2>Bags vs bulk: the real math</h2>
      <p>
        Bulk mulch is usually cheaper once you pass about 2 to 3 cubic yards.
        A yard of bulk hardwood mulch often costs less than the 14 bags of
        2 cu ft mulch that equal the same volume, and you skip hauling dozens
        of plastic bags. Bags win for small beds under 100 sq ft, touch-ups,
        and homes where a delivery truck can&apos;t reach. If delivery has a
        minimum (often 1 to 3 yards) or a delivery fee, compare the all-in
        totals before deciding. For a 1,000 sq ft bed at 3 inches — 9.26
        yards, or 125 bags of 2 cu ft mulch — bulk delivery is the only sane
        choice.
      </p>

      <h2>Worked example: a 200 sq ft bed at 3 inches</h2>
      <p>
        Volume: (200 × 0.25) / 27 = <strong>1.85 cubic yards</strong>. In 2 cu
        ft bags: 1.85 × 13.5 = 25 bags; round up and add 10% overage →{" "}
        <strong>27–28 bags</strong>. Bulk route: order 2 yards (suppliers
        often sell whole yards) plus check the delivery minimum. Coverage
        check: 200 / 108 = 1.85 — the table agrees.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Mulching too deep.</strong> More than 4 inches total can
        suffocate roots. <strong>Forgetting bed edges.</strong> Mulch migrates
        onto lawns and paths — a small overage covers the thin spots after
        the first rain. <strong>Ordering by bags for big beds.</strong> Do the
        bulk comparison once the number passes 2 yards.{" "}
        <strong>Measuring depth wrong.</strong> Depth is the finished layer,
        not how much you already have — subtract existing mulch first.
      </p>

      <Faq items={faqs} heading="Mulch FAQ" />
    </GuideArticle>
  );
}
