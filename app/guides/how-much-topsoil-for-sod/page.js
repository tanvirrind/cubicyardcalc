import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Topsoil Do I Need for Sod? (Combined Ordering Guide)",
  description:
    "One-page ordering sheet for sod + topsoil: the 2-inch vs 4-inch depth rule, topsoil yards and tons, sod pallets, and truckloads for 500 to 5,000 sq ft.",
  keywords: [
    "how much topsoil do i need for sod",
    "how much topsoil under sod",
    "sod and topsoil calculator",
    "topsoil depth for new lawn",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-topsoil-for-sod/" },
  openGraph: {
    title: "How Much Topsoil Do I Need for Sod? | Cubic Yard Calculator",
    description:
      "Sod pallets, topsoil yards, tons, and truckloads on one page — the 2-inch vs 4-inch rule with all the math shown.",
    url: "https://cubicyardcalculator.site/guides/how-much-topsoil-for-sod/",
  },
};

const faqs = [
  {
    q: "How much topsoil do I need under new sod?",
    a: "2 inches of topsoil over an existing, decently graded area — 4 inches if the site was stripped bare, is low and needs regrading, or you are amending with compost. For 1,000 square feet that is about 6.2 cubic yards at 2 inches and 12.3 cubic yards at 4 inches.",
  },
  {
    q: "How many pallets of sod cover 1,000 square feet?",
    a: "A sod pallet covers roughly 450 square feet (400–500 by supplier, so confirm with yours). 1,000 square feet needs about 2.2 pallets — order 3 with a 10% overage for cuts along edges, curves, and driveways.",
  },
  {
    q: "Can I lay sod directly on topsoil with no amendments?",
    a: "Yes, if the topsoil is good quality and you prepare the contact zone: loosen the subgrade 2–3 inches deep, then lay the topsoil so it blends into the loosened layer rather than sitting on a hard boundary. A hard soil-on-soil boundary causes water to perch and roots to stay shallow.",
  },
  {
    q: "Should I use sand instead of topsoil under sod?",
    a: "No — sand under sod drains too fast and holds almost no nutrients, which is exactly what new sod needs while it roots. Use screened topsoil, amended with compost if the site was stripped. Save sand for leveling established lawns, not for building the root zone under new sod.",
  },
  {
    q: "How deep should topsoil be for a new lawn from seed?",
    a: "The same 2 to 4-inch rule applies, with seed leaning toward the 4-inch end since seed has no attached soil of its own. The 4-inch depth also applies when you are fixing grade — raising low spots so water drains away from the house.",
  },
  {
    q: "How much does a cubic yard of topsoil weigh?",
    a: "About 2,400 pounds — 1.2 tons — per cubic yard when dry; wet topsoil can weigh noticeably more. The 14 cubic yards for a typical 1,000-square-foot, 4-inch job works out to about 16.8 tons, so plan on bulk delivery, not bags.",
  },
  {
    q: "How soon do I water sod after laying it?",
    a: "Immediately — soak each section as it goes down, especially in heat. Keep new sod consistently moist for the first two weeks (often watering once or twice a day), then taper to deep, infrequent watering as the roots take hold. Roll the sod with a water-filled roller right after laying so the roots contact the soil.",
  },
  {
    q: "Can I lay sod over my existing dead grass?",
    a: "Not directly — dead thatch and turf block root contact with the soil, which is the whole point of the sod. Scalp the old grass to the dirt or strip it, loosen the subgrade, then spread your topsoil. Our regrade guide covers the grade-fixing part of that prep.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Topsoil Do I Need for Sod?"
      description="One-page combined ordering sheet: sod pallets, topsoil yards, topsoil tons, and truckloads — for 500 to 5,000 square feet. The 2-inch vs 4-inch depth rule settled, with all the math shown."
      slug="how-much-topsoil-for-sod"
      calculatorHref="/calculators/topsoil-calculator/"
      calculatorLabel="Try the topsoil calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "the-2-inch-vs-4-inch-rule", label: "The 2-inch vs 4-inch rule" },
        { id: "the-math-one-formula-for-the-whole-page", label: "The math: one formula for the whole page" },
        { id: "worked-example-1-000-sq-ft-stripped-to-bare-clay-4-inches", label: "Worked example: 1,000 sq ft stripped to bare clay, 4 inches" },
        { id: "the-combined-ordering-table-2-inch-depth", label: "The combined ordering table: 2-inch depth" },
        { id: "the-combined-ordering-table-4-inch-depth", label: "The combined ordering table: 4-inch depth" },
        { id: "slope-correction-before-the-sod", label: "Slope correction before the sod" },
        { id: "soil-contact-the-prep-that-decides-everything", label: "Soil contact: the prep that decides everything" },
        { id: "watering-the-new-sod", label: "Watering the new sod" },
        { id: "how-the-quantities-connect-to-cost", label: "How the quantities connect to cost" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "Site's published density variants (lib/calc.js)",
        "Typical topsoil application-depth practice for new sod (2 inches over existing grade, 4 inches over stripped or regraded sites): landscaping installation guidance classes.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        New sod needs <strong>2 inches of topsoil</strong> over an existing,
        decently graded area, or <strong>4 inches</strong> if the site was
        stripped bare, sits low, or is being amended with compost. For the
        benchmark job — <strong>1,000 square feet at 4 inches</strong> —
        that is <strong>12.3 cubic yards of topsoil</strong> (order{" "}
        <strong>14 yards</strong> with overage, about 16.8 tons) plus{" "}
        <strong>3 pallets of sod</strong>, delivered in{" "}
        <strong>2 truckloads</strong>. The full ordering table for every
        common lawn size is below.
      </p>

      <h2 id="the-2-inch-vs-4-inch-rule">The 2-inch vs 4-inch rule</h2>
      <p>
        This is the one decision that changes the whole order, so make it
        deliberately:
      </p>
      <p>
        <strong>2 inches</strong> — when you are re-sodding over an existing
        grade that is already decent: the old turf was stripped or died out,
        but the underlying soil is healthy and drains. Till the topsoil
        into the loosened subgrade so there is no hard boundary layer.
        <br />
        <strong>4 inches</strong> — when the site was <strong>stripped to
        bare subsoil or clay</strong> by construction, when you need to
        <strong>raise low spots</strong> and fix the slope away from the
        house, or when you are <strong>amending with compost</strong> (the
        compost needs room to blend without thinning the topsoil itself).
      </p>
      <p>
        There is no benefit to going deeper than 4 inches for sod: the roots
        establish in the top few inches, and extra depth just raises the
        bill. If your site needs more than 4 inches of fill, build the
        base with cheaper <strong>fill dirt</strong> (run the numbers on
        our <a href="/calculators/dirt-calculator/">dirt calculator</a>{" "}
        and follow our{" "}
        <a href="/guides/how-much-dirt-to-regrade-a-yard/">yard regrade guide</a>)
        and put the 2–4 inches of screened topsoil on top.
      </p>

      <h2 id="the-math-one-formula-for-the-whole-page">The math: one formula for the whole page</h2>
      <p>
        <strong>Cubic yards = lawn sq ft &times; (depth in inches &divide;
        12) &divide; 27</strong>, then &times; 1.10 for overage.
      </p>
      <p>
        The benchmark: 1,000 sq ft at 4 inches — 1,000 &times; (4 &divide;
        12) = 333.3 cu ft &divide; 27 = <strong>12.35 cubic yards</strong>{" "}
        exact. Halve the depth to 2 inches and you halve the volume:{" "}
        <strong>6.17 cubic yards</strong>. Topsoil weighs about{" "}
        <strong>2,400 pounds per cubic yard — 1.2 tons</strong> — so{" "}
        6.2 yards is about 7.4 tons and 12.3 yards is about 14.8 tons.
      </p>

      <h2 id="worked-example-1-000-sq-ft-stripped-to-bare-clay-4-inches">Worked example: 1,000 sq ft stripped to bare clay, 4 inches</h2>
      <p>
        Every step, shown:
      </p>
      <p>
        <strong>Step 1 — volume:</strong> 1,000 &times; (4 &divide; 12)
        &divide; 27 = <strong>12.35 cubic yards</strong>.
        <br />
        <strong>Step 2 — overage:</strong> 12.35 &times; 1.10 = 13.58 →{" "}
        <strong>order 14 cubic yards</strong>.
        <br />
        <strong>Step 3 — weight:</strong> 14 &times; 1.2 tons/yd&sup3; ={" "}
        <strong>16.8 tons</strong> (bulk delivery territory).
        <br />
        <strong>Step 4 — sod:</strong> 1,000 &divide; 450 sq ft per pallet =
        2.22 → <strong>order 3 pallets</strong> (10% overage, rounded up).
        <br />
        <strong>Step 5 — trucks:</strong> 14 &divide; 12 yd&sup3; per
        tri-axle load = <strong>2 truckloads</strong>.
      </p>

      <h2 id="the-combined-ordering-table-2-inch-depth">The combined ordering table: 2-inch depth</h2>
      <p>
        Topsoil yards are the order size (with overage built in), tons use
        1.2 tons per yard, sod pallets assume 450 sq ft per pallet (400–500
        by supplier — confirm with yours), and truckloads are figured at
        12 cubic yards per tri-axle load. Trucks vary from 8 to 18 yards,
        so treat the last column as planning, not a quote:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Lawn size</th><th>Topsoil (yd&sup3;)</th><th>Topsoil (tons)</th><th>Sod pallets</th><th>Truckloads</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">500 sq ft</td><td className="num">3.5</td><td className="num">4.2</td><td className="num">2</td><td className="num">1</td></tr>
          <tr><td className="num">1,000 sq ft</td><td className="num">7</td><td className="num">8.4</td><td className="num">3</td><td className="num">1</td></tr>
          <tr><td className="num">2,000 sq ft</td><td className="num">14</td><td className="num">16.8</td><td className="num">5</td><td className="num">2</td></tr>
          <tr><td className="num">5,000 sq ft</td><td className="num">34</td><td className="num">40.8</td><td className="num">13</td><td className="num">3</td></tr>
        </tbody>
      </table>

      <h2 id="the-combined-ordering-table-4-inch-depth">The combined ordering table: 4-inch depth</h2>
      <p>
        Same columns, double the topsoil — for stripped, low, or
        compost-amended sites:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Lawn size</th><th>Topsoil (yd&sup3;)</th><th>Topsoil (tons)</th><th>Sod pallets</th><th>Truckloads</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">500 sq ft</td><td className="num">7</td><td className="num">8.4</td><td className="num">2</td><td className="num">1</td></tr>
          <tr><td className="num">1,000 sq ft</td><td className="num">14</td><td className="num">16.8</td><td className="num">3</td><td className="num">2</td></tr>
          <tr><td className="num">2,000 sq ft</td><td className="num">28</td><td className="num">33.6</td><td className="num">5</td><td className="num">3</td></tr>
          <tr><td className="num">5,000 sq ft</td><td className="num">68</td><td className="num">81.6</td><td className="num">13</td><td className="num">6</td></tr>
        </tbody>
      </table>
      <p>
        For a size not listed, our{" "}
        <a href="/calculators/topsoil-calculator/">topsoil calculator</a>{" "}
        handles any square footage and depth in one pass.
      </p>

      <h2 id="slope-correction-before-the-sod">Slope correction before the sod</h2>
      <p>
        Topsoil is also your grading tool. Before the sod arrives, get the
        slope right: the finished lawn should <strong>fall away from the
        foundation</strong> — about <strong>6 inches of fall in the first 10
        feet</strong> is the standard rule of thumb — with no birdbaths or
        low spots where water will sit and drown the new sod. This is the
        moment to fix it, because regrading under established sod means
        tearing it up. If the yard needs serious re-shaping, do the fill
        first with our{" "}
        <a href="/guides/how-much-dirt-to-regrade-a-yard/">regrade guide</a>{" "}
        and use topsoil only for the final 2–4 inches.
      </p>

      <h2 id="soil-contact-the-prep-that-decides-everything">Soil contact: the prep that decides everything</h2>
      <p>
        Sod roots will not dive into a hard boundary. Do this prep in
        order:
      </p>
      <p>
        <strong>1. Loosen the subgrade</strong> 2–3 inches deep with a rake
        or tiller — the point is to break the crust, not to till deeply.{" "}
        <strong>2. Spread the topsoil</strong> and blend it into the
        loosened layer at the boundary, so there is a gradient instead of a
        hard soil-on-soil line where water perches.{" "}
        <strong>3. Grade and firm it</strong> — rake level, then roll or
        lightly tamp so the sod lands on a firm surface that will not
        settle in ruts. <strong>4. Lay the sod</strong> in a brick pattern,
        staggering seams and butting edges tight.{" "}
        <strong>5. Roll the sod</strong> with a water-filled roller so the
        roots press into the topsoil — this single step measurably speeds
        establishment.
      </p>

      <h2 id="watering-the-new-sod">Watering the new sod</h2>
      <p>
        <strong>Soak each section as it goes down</strong> — in summer heat,
        sod waiting on a pallet dries out from the edges in. For the first{" "}
        <strong>two weeks, keep it consistently moist</strong>, watering
        once or twice a day so the top few inches never dry out; new sod
        has shallow roots and cannot reach deep water yet. Then{" "}
        <strong>taper to deep, infrequent watering</strong> — about an inch
        a week in one or two soakings — which trains the roots downward.
        You can check establishment by gently tugging a corner: resistance
        means the roots have taken hold.
      </p>

      <h2 id="how-the-quantities-connect-to-cost">How the quantities connect to cost</h2>
      <p>
        Knowing yards, tons, and pallets lets you compare quotes
        apples-to-apples. Suppliers price bulk topsoil by the yard or the
        ton, and one yard of delivered topsoil typically costs a fraction
        of bagged soil covering the same area — at 14 yards, bags are not a
        realistic option. For the full picture of what a cubic yard of
        material covers and costs, see our{" "}
        <a href="/cubic-yard-coverage/">cubic yard coverage</a> and{" "}
        <a href="/cubic-yard-cost/">cubic yard cost</a> pages.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Ordering topsoil before the sod date.</strong> Topsoil
        sitting in a pile grows weeds and crusts over; sod sitting on a
        pallet cooks. Schedule delivery for the day before laying.{" "}
        <strong>No soil contact.</strong> Sod on unloosened, hard subsoil
        stays shallow-rooted and dies in the first drought.{" "}
        <strong>Skipping the roll.</strong> Unrolled sod leaves air pockets
        where roots dry out. <strong>Watering on a sprinkler timer.</strong>{" "}
        New sod wants frequent light water; established sod wants deep
        weekly soaks — the transition matters.{" "}
        <strong>Fertilizing day one.</strong> Let the roots establish for
        4–6 weeks before feeding; starter fertilizer at laying is fine, a
        heavy feed is not.
      </p>

      <Faq items={faqs} heading="Topsoil for Sod FAQ" />
    </GuideArticle>
  );
}
