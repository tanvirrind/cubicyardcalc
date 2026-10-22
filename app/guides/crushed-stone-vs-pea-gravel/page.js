import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Crushed Stone vs Pea Gravel: Which Is Better for Driveways & Landscaping?",
  description:
    "Crushed stone vs pea gravel compared: stability, compaction, drainage, comfort, and cost. Driveway math, the decision matrix, and common mistakes. Free gravel calculator.",
  keywords: [
    "crushed stone vs pea gravel",
    "pea gravel vs crushed stone driveway",
    "best gravel for driveway",
    "pea gravel vs river rock",
    "crushed stone driveway",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/crushed-stone-vs-pea-gravel/" },
  openGraph: {
    title: "Crushed Stone vs Pea Gravel: Which Is Better for Driveways & Landscaping? | Cubic Yard Calculator",
    description:
      "The honest comparison: which stone compacts, which drains, which feels good underfoot — plus driveway quantity math and cost.",
    url: "https://cubicyardcalculator.site/guides/crushed-stone-vs-pea-gravel/",
  },
};

const faqs = [
  {
    q: "Can you use pea gravel for a driveway?",
    a: "You can, but it is a compromise. Pea gravel's rounded stones shift under tires, rut in the wheel tracks, and migrate off the edges — expect ongoing raking and replenishment. Crushed stone locks together under load, so it is the better driveway material for anything driven on regularly.",
  },
  {
    q: "Does crushed stone compact?",
    a: "Yes — that is its defining advantage. The angular faces of crushed stone interlock when compacted, forming a dense, stable surface that resists rutting. Round stones like pea gravel can never lock this way, which is why crushed stone is the standard under patios, driveways, and foundations.",
  },
  {
    q: "Which is cheaper, crushed stone or pea gravel?",
    a: "Usually similar per yard or per ton in most markets — both are bulk aggregates from the same quarries, and pea gravel is only occasionally a bit pricier where it is shipped in. Price rarely decides this comparison; the job does.",
  },
  {
    q: "What size crushed stone for a driveway?",
    a: "3/4-inch crushed stone is the workhorse for residential driveways — it compacts well and stays walkable. A common build is a 3-inch base of larger stone (2–3 inch) topped with 1–2 inches of 3/4-inch crusher-run for a tight surface. Finish depth is typically 3–4 inches total.",
  },
  {
    q: "What is the difference between pea gravel and river rock?",
    a: "Size and job. Pea gravel is small (1/4 to 3/8 inch), rounded, and made for walkable surfaces — paths, play areas, patios. River rock is larger (1 inch and up), purely decorative, and best for beds, drainage swales, and accent areas where nobody walks on it. Pea gravel you walk on; river rock you look at.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Crushed Stone vs Pea Gravel: Which Is Better for Driveways & Landscaping?"
      description="Stability, compaction, drainage, comfort underfoot, and cost — the honest comparison, a which-stone-for-which-job matrix, and driveway quantity math."
      slug="crushed-stone-vs-pea-gravel"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10-12"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "crushed-stone-vs-pea-gravel-side-by-side", label: "Crushed stone vs pea gravel, side by side" },
        { id: "which-stone-for-which-job", label: "Which stone for which job" },
        { id: "quantity-math-by-project", label: "Quantity math by project" },
        { id: "cost-comparison-honestly-it-is-a-tie", label: "Cost comparison: honestly, it is a tie" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "ASTM C33 aggregate density ranges",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        <strong>Driveways and anything that must hold firm under load:
        crushed stone.</strong> Its angular faces interlock and compact
        into a surface that resists ruts. <strong>Walkways, patios, play
        areas, and decorative beds: pea gravel.</strong> Its smooth,
        rounded stones are comfortable underfoot and look natural in
        landscapes. <strong>Drainage:</strong> either works — both shed
        water well — but crushed stone stays put where pea gravel migrates.
        They cost roughly the same per yard in most markets, so the
        decision comes down to the job, not the price. Size any of these
        projects with the{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        and browse decorative options on the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock
        calculator</a>.
      </p>

      <h2 id="crushed-stone-vs-pea-gravel-side-by-side">Crushed stone vs pea gravel, side by side</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Factor</th><th>Crushed stone</th><th>Pea gravel</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Appearance</strong></td><td>Angular, rough-edged chips; gray, tan, or blue-gray; structured look</td><td>Smooth, rounded pebbles 1/4–3/8 in; warm natural tones; soft look</td></tr>
          <tr><td><strong>Stability & compaction</strong></td><td>Excellent — angular faces interlock and lock tight under compaction</td><td>Poor — round stones roll against each other and never lock</td></tr>
          <tr><td><strong>Drainage</strong></td><td>Very good</td><td>Very good — slightly better surface permeability</td></tr>
          <tr><td><strong>Comfort underfoot</strong></td><td>Crunchy and uneven — fine for driveways, not for bare feet</td><td>Smooth and comfortable — good for paths, patios, play areas</td></tr>
          <tr><td><strong>Maintenance</strong></td><td>Low — stays in place, occasional top-up</td><td>Higher — migrates onto lawns and paths, needs raking and replenishment</td></tr>
          <tr><td><strong>Weight</strong></td><td className="num">2,800 lbs per cubic yard (1.4 tons)</td><td className="num">2,800 lbs per cubic yard (1.4 tons)</td></tr>
          <tr><td><strong>Cost</strong></td><td className="num">~$30–55/ton delivered (typical 2026 US range)</td><td className="num">~$30–55/ton delivered (typical 2026 US range)</td></tr>
        </tbody>
      </table>
      <p>
        Both materials weigh about the same — roughly 2,800 lbs, or 1.4
        tons, per cubic yard — so the tons math is identical for both. The
        real difference is mechanical: angular stone locks, round stone
        rolls. That single property drives almost every recommendation
        below.
      </p>

      <h2 id="which-stone-for-which-job">Which stone for which job</h2>
      <p>
        <strong>Driveway (regular vehicle traffic) → crushed stone.</strong>{" "}
        Use 3/4-inch stone or crusher-run at 3–4 inches deep, compacted in
        lifts. Pea gravel under cars ruts, sprays, and slowly leaves the
        driveway for the lawn.
      </p>
      <p>
        <strong>Garden path or walkway → pea gravel.</strong> Comfortable,
        attractive, and quiet — the classic choice. Keep it at 2–3 inches
        deep (more on why below) and edge it so it stays put.
      </p>
      <p>
        <strong>French drains and drainage swales → crushed stone.</strong>{" "}
        It stays where you put it while water moves through it. Pea gravel
        also drains, but it migrates in flowing water.
      </p>
      <p>
        <strong>Decorative beds and borders → pea gravel (or river rock
        for larger beds).</strong> Pea gravel&rsquo;s warm, rounded look
        is made for beds. For beds nobody walks on, larger river rock —
        1 inch and up — is the classic decorative pick and needs the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock
        calculator</a> for sizing.
      </p>
      <p>
        <strong>Under patios, sheds, and pavers → crushed stone.</strong>{" "}
        Anything structural needs a base that compacts and locks. Round
        stone under a patio is the same category of mistake as topsoil
        under a patio — it moves.
      </p>
      <p>
        <strong>Play areas and pet runs → pea gravel.</strong> Soft,
        drainable, and forgiving. Just plan on topping up occasionally.
      </p>

      <h2 id="quantity-math-by-project">Quantity math by project</h2>
      <p>
        The formula is always length × width × depth in feet, divided by
        27. With 2,800 lbs per cubic yard, gravel converts at{" "}
        <strong>1.4 tons per yard</strong> — multiply yards by 1.4 for
        the tonnage most suppliers quote.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Dimensions</th><th>Cubic yards</th><th>Tons</th></tr>
        </thead>
        <tbody>
          <tr><td>Two-car driveway (crushed stone)</td><td className="num">12 × 50 ft at 4 in</td><td className="num">7.4</td><td className="num">10.4</td></tr>
          <tr><td>Garden path (pea gravel)</td><td className="num">3 × 40 ft at 3 in</td><td className="num">1.1</td><td className="num">1.6</td></tr>
          <tr><td>Backyard patio bed (pea gravel)</td><td className="num">10 × 12 ft at 2 in</td><td className="num">0.7</td><td className="num">1.0</td></tr>
          <tr><td>French drain trench (crushed stone)</td><td className="num">1 × 50 ft at 12 in</td><td className="num">1.9</td><td className="num">2.6</td></tr>
        </tbody>
      </table>
      <p>
        Check the driveway row: (12 × 50 × 0.333) / 27 ={" "}
        <strong>7.4 cubic yards</strong>, and 7.4 × 1.4 ={" "}
        <strong>10.4 tons</strong>. Add 10% overage and you are ordering
        about 8 yards or 11.5 tons. At typical 2026 delivered prices of
        $30–55 per ton, that driveway lands roughly in the $345–$630
        range for material — similar whether you pick crushed stone or
        pea gravel, so let the job, not the price, decide.
      </p>

      <h2 id="cost-comparison-honestly-it-is-a-tie">Cost comparison: honestly, it is a tie</h2>
      <p>
        Both materials typically run $30–55 per ton delivered in 2026 US
        pricing, and at 1.4 tons per yard that is about $42–77 per cubic
        yard. Pea gravel occasionally runs a little higher in markets
        where it is shipped in rather than quarried locally, and bagged
        pea gravel from the garden center is dramatically more per yard
        than bulk — but for bulk orders the price difference rarely
        changes the decision. The cost story is really about maintenance:
        pea gravel&rsquo;s migration means periodic top-ups and raking
        time, while crushed stone mostly stays put. Over five years, the
        stone that stays in place is the cheaper stone.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Pea gravel on slopes.</strong> Round stones plus gravity
        equals migration — on any meaningful slope, pea gravel walks
        downhill in the first hard rain. Use crushed stone, or terrace the
        slope.{" "}
        <strong>Pea gravel deeper than 3 inches.</strong> Past 3 inches,
        round stone gets wobbly and &ldquo;swimmy&rdquo; underfoot — it
        feels unstable because it is. Keep walkable pea gravel at 2–3
        inches with firm edging.{" "}
        <strong>Round stone where compaction matters.</strong> Pea gravel
        under a shed, a paver base, or a parking pad will not compact no
        matter how long you tamp it — the stones roll, they don&rsquo;t
        lock. Crushed stone or crusher-run only, in compacted lifts.{" "}
        <strong>No edging.</strong> Unedged pea gravel spreads into the
        lawn within a season. Steel, stone, or timber edging is not
        optional.{" "}
        <strong>Skipping the landscape fabric under paths.</strong>{" "}
        Without fabric, pea gravel works its way into the soil and the
        soil works its way up — you end up with mudstone soup instead of
        a path.{" "}
        <strong>Ordering by the ton when your plan is in yards.</strong>{" "}
        Mixing up units is the fastest way to over-order by 40%. Yards ×
        1.4 = tons for gravel. Wet material can weigh 5–15% more than dry,
        so tonnage quotes assume roughly dry material.
      </p>

      <Faq items={faqs} heading="Crushed stone vs pea gravel FAQ" />
    </GuideArticle>
  );
}
