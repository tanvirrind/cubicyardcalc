import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much River Rock Do I Need? Coverage Chart, Tons Math & Project Table",
  description:
    "How much river rock do I need for a landscape bed? Coverage by rock size (1–2 in, 2–4 in, 4–8 in), cubic-yard math, the 1.45 vs 2.35 tons/yd³ distinction, and a worked project table.",
  keywords: [
    "how much river rock do i need",
    "river rock coverage calculator",
    "how much river rock for landscaping",
    "river rock coverage chart",
    "river rock tons per cubic yard",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-river-rock-do-i-need/" },
  openGraph: {
    title: "How Much River Rock Do I Need? | Cubic Yard Calculator",
    description:
      "Coverage by rock size, cubic-yard and tons math at both site densities, a worked project table, landscape fabric and edging notes.",
    url: "https://cubicyardcalculator.site/guides/how-much-river-rock-do-i-need/",
  },
};

const faqs = [
  {
    q: "How much river rock do I need for a 30×3 ft landscape bed?",
    a: "At the typical 3-inch depth for 1–2 inch rock: 30 × 3 × 0.25 ft = 22.5 ft³ = 0.833 yd³, which is about 1.21 tons at the gravel-line density of 1.45 tons/yd³ — so order 1 cubic yard (roughly 1.5 tons) with a little overage. This is the exact math our landscape rock calculator runs for you.",
  },
  {
    q: "How many tons are in a cubic yard of river rock?",
    a: "One cubic yard of river rock weighs 1.45 tons at this site's gravel-line density (2,900 lbs/yd³) or 2.35 tons at the rock-line density (4,700 lbs/yd³). Dense rounded river stone runs heavy; always check which density your supplier or calculator is using before you convert.",
  },
  {
    q: "How deep should river rock be?",
    a: "Typical depths: 2–3 inches for 1–2 inch rock, 3–4 inches for 2–4 inch rock, and 5–6 inches for 4–8 inch rock. The rule of thumb is a bed 2–3 times the average stone diameter so the fabric underneath stays covered and the stones sit without shifting.",
  },
  {
    q: "Do I need landscape fabric under river rock?",
    a: "Yes — lay quality woven landscape fabric before spreading rock. It stops weeds from rooting up through the stone, keeps soil from migrating up and burying the rock over time, and makes future cleanup or removal far easier. Details are in our landscape fabric under rock guide.",
  },
  {
    q: "How many cubic feet are in a ton of river rock?",
    a: "At 1.45 tons per cubic yard, one ton is 27 ÷ 1.45 ≈ 18.6 cubic feet. At 2.35 tons per cubic yard, one ton is 27 ÷ 2.35 ≈ 11.5 cubic feet. Suppliers that price by the ton and deliver by the cubic yard will use one of these two figures — confirm which.",
  },
  {
    q: "What size river rock is best for landscaping?",
    a: "1–2 inch river rock is the versatile default for beds and borders — it covers evenly, stays put, and is comfortable to walk beside. 2–4 inch suits dry creek beds and drainage areas. 4–8 inch boulders are accent pieces and erosion-control stones, placed individually rather than spread as coverage.",
  },
  {
    q: "How many bags of river rock equal a cubic yard?",
    a: "A common 0.5 ft³ home-center bag is 1/54 of a cubic yard, so you'd need 54 bags per yard. Bulk is dramatically cheaper beyond about half a yard — a 30×3 ft bed at 3 inches needs roughly 45 bags versus one bulk yard delivered.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much River Rock Do I Need? Coverage Chart, Tons Math & Project Table"
      description="Rock size determines bed depth, depth determines cubic yards, and density determines tons. This guide runs the full chain for river rock — with coverage tables, the 1.45 vs 2.35 tons/yd³ distinction, and a worked project table."
      slug="how-much-river-rock-do-i-need"
      calculatorHref="/calculators/landscape-rock-calculator/"
      calculatorLabel="Try the landscape rock calculator"
      updated="2026-10"
      toc={[
        { id: "short-answer", label: "The short answer" },
        { id: "coverage-by-size", label: "Coverage by rock size" },
        { id: "tons-math", label: "The tons math: 1.45 vs 2.35 t/yd³" },
        { id: "project-table", label: "Worked project table" },
        { id: "fabric-and-edging", label: "Landscape fabric & edging" },
        { id: "ordering-tips", label: "Ordering tips" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Site density constants used by this site's calculators (ASTM C33 / supplier spec-sheet ranges; river rock at 2,900 lbs/yd³ gravel line, 4,700 lbs/yd³ rock line)",
        "Landscaping industry coverage guidance: bed depth 2–3× average stone diameter; landscape fabric beneath decorative stone",
        "US bulk aggregate pricing conventions: material priced per ton or per cubic yard; delivery fees by load and distance",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="short-answer">The short answer</h2>
      <p>
        For the most common landscaping job — <strong>1–2 inch river rock at
        3 inches deep</strong> — one cubic yard covers about{" "}
        <strong>108 square feet</strong> and weighs about{" "}
        <strong>1.45 tons</strong> (typical US range). The formula behind
        every number in this guide is{" "}
        <strong>(length × width × depth ÷ 27) = cubic yards</strong>, then
        yards × tons-per-yard = tons. Depth is not a free choice: it follows
        the stone size, and the two work together in the table below. If you
        want to skip the arithmetic, the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock
        calculator</a> runs the whole chain with 10% overage built in.
      </p>

      <h2 id="coverage-by-size">Coverage by rock size: depth follows diameter</h2>
      <p>
        River rock sells by stone diameter, and the right bed depth is
        roughly <strong>2–3 times the average stone diameter</strong> —
        deep enough to hide the ground (and any fabric) beneath, shallow
        enough that stones nest without shifting. Too thin and soil shows
        through; too thick and you are paying to bury expensive stone under
        more expensive stone. The table below gives typical depths, the
        coverage each cubic yard buys you at that depth, and what the size
        is best used for.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Rock size</th><th>Typical bed depth</th><th>Coverage per yd³</th><th>Best for</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1–2 in (cobble pebble)</td>
            <td className="num">2–3 in (typical)</td>
            <td className="num">~108 sq ft</td>
            <td>Beds, borders, tree rings, pathways</td>
          </tr>
          <tr>
            <td>2–4 in (medium cobble)</td>
            <td className="num">3–4 in (typical)</td>
            <td className="num">~81 sq ft</td>
            <td>Dry creek beds, drainage swales, slopes</td>
          </tr>
          <tr>
            <td>4–8 in (large cobble / boulders)</td>
            <td className="num">5–6 in (typical)</td>
            <td className="num">~54 sq ft</td>
            <td>Accents, erosion control, shoreline</td>
          </tr>
        </tbody>
      </table>
      <p>
        Coverage math for one yard: 27 ft³ ÷ depth-in-feet. At 3 inches
        (0.25 ft), 27 ÷ 0.25 = <strong>108 sq ft per cubic yard</strong>. At
        4 inches, 27 ÷ 0.333 = <strong>81 sq ft</strong>. At 6 inches, 27 ÷
        0.5 = <strong>54 sq ft</strong>. These are struck volumes — in the
        real world, rounded stones do not pack perfectly, so treat the
        result as the <em>minimum</em> order and add the calculator&apos;s
        10% overage for settling and imperfect grading. For a dry creek bed
        specifically, see our{" "}
        <a href="/guides/how-much-rock-for-a-dry-creek-bed/">dry creek bed
        rock guide</a>, which accounts for the channel shape and spill
        margins that flat-area math misses.
      </p>

      <h2 id="tons-math">The tons math: 1.45 vs 2.35 t/yd³ — know which line you are on</h2>
      <p>
        Here is the point where most people get surprised by their delivery
        ticket: <strong>&ldquo;river rock&rdquo; lives on two different
        density lines</strong> on this site, and which one applies depends
        on how the material is being sold to you.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Density line</th><th>River rock density</th><th>Tons per yd³</th><th>Used by</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Gravel line</td>
            <td className="num">2,900 lbs/yd³</td>
            <td className="num">1.45</td>
            <td>Gravel-family calculators (aggregate sold as bulk gravel)</td>
          </tr>
          <tr>
            <td>Rock line</td>
            <td className="num">4,700 lbs/yd³</td>
            <td className="num">2.35</td>
            <td>The landscape rock calculator (decorative stone)</td>
          </tr>
        </tbody>
      </table>
      <p>
        In plain terms: <strong>1 yd³ of river rock = 1.45 tons</strong> on
        the gravel line, or <strong>2.35 tons</strong> on the rock line.
        The difference is real geology — dense rounded cobble packs tighter
        and heavier than the loose decorative blends many yards call
        &ldquo;river rock.&rdquo; When a supplier quotes per ton, confirm
        which density they use to convert: at 1.45 t/yd³, one ton is 27 ÷
        1.45 ≈ <strong>18.6 ft³</strong>; at 2.35 t/yd³, one ton is 27 ÷
        2.35 ≈ <strong>11.5 ft³</strong>. A quote of &ldquo;$80 per
        ton&rdquo; means very different coverage depending on the answer.
        When in doubt, order by the cubic yard — the volume you need is the
        volume your bed needs, regardless of what it weighs.
      </p>

      <h2 id="project-table">Worked project table</h2>
      <p>
        Common bed shapes run through the full chain: volume in ft³, cubic
        yards, and tons at the gravel-line 1.45 t/yd³ (in parentheses, the
        rock-line 2.35 t/yd³ figure the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock
        calculator</a> uses). All prices below are typical US ranges as of
        Oct 2026.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Dimensions</th><th>Volume</th><th>Tons</th><th>Typical bulk cost</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundation bed</td>
            <td className="num">30 × 3 ft @ 3 in</td>
            <td className="num">22.5 ft³ = 0.833 yd³</td>
            <td className="num">1.21 t (1.96 t rock line)</td>
            <td className="num">$50–$120</td>
          </tr>
          <tr>
            <td>Tree ring</td>
            <td className="num">6 ft circle @ 3 in</td>
            <td className="num">7.07 ft³ = 0.26 yd³</td>
            <td className="num">0.38 t (0.62 t rock line)</td>
            <td className="num">$15–$35</td>
          </tr>
          <tr>
            <td>Walkway</td>
            <td className="num">20 × 4 ft @ 3 in</td>
            <td className="num">20 ft³ = 0.74 yd³</td>
            <td className="num">1.07 t (1.74 t rock line)</td>
            <td className="num">$45–$90</td>
          </tr>
          <tr>
            <td>Full front bed</td>
            <td className="num">40 × 6 ft @ 3 in</td>
            <td className="num">60 ft³ = 2.22 yd³</td>
            <td className="num">3.22 t (5.22 t rock line)</td>
            <td className="num">$130–$260</td>
          </tr>
          <tr>
            <td>Slope / bank</td>
            <td className="num">25 × 8 ft @ 4 in (2–4 in stone)</td>
            <td className="num">66.7 ft³ = 2.47 yd³</td>
            <td className="num">3.58 t (5.80 t rock line)</td>
            <td className="num">$145–$295</td>
          </tr>
        </tbody>
      </table>
      <p>
        Check the lead row by hand: 30 × 3 × 0.25 ={" "}
        <strong>22.5 ft³</strong>; 22.5 ÷ 27 = <strong>0.833 yd³</strong>;
        0.833 × 1.45 = <strong>1.21 tons</strong>. On the rock line, 0.833
        × 2.35 = <strong>1.96 tons</strong>. Cost math: river rock runs
        about $50–$100 per ton bulk (typical US range, as of Oct 2026), so
        the 1.21-ton foundation bed lands around $60–$120 for the stone
        itself, plus delivery — suppliers commonly charge $50–$200 per
        load for a local drop (typical US range, as of Oct 2026).
      </p>

      <h2 id="fabric-and-edging">Landscape fabric &amp; edging: the prep that saves the rock</h2>
      <p>
        <strong>Landscape fabric goes down first, always.</strong> Rock
        without fabric sinks into soil within a season or two — mud
        migrates up, the stones disappear, and you end up buying the same
        rock twice. Use a woven fabric (not the thin spun-bond weed
        barrier, which tears under stone) and overlap seams by 6 inches.
        Cut X-shaped slits only where plants go through. Full detail —
        fabric types, stapling, and what goes under what stone — is in our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric
        under rock guide</a>.
      </p>
      <p>
        <strong>Edging keeps the bed a bed.</strong> Loose rock migrates:
        mowers fling it, rain washes it, feet kick it. Steel, aluminum, or
        concrete edging (installed 1–2 inches below the finished stone
        surface and an inch proud of the lawn) is what separates a
        $300 river rock bed from a $300 rock pile scattered across your
        grass. On slopes, edging doubles as the retaining lip that keeps
        the 2–4 inch stone from sliding — pair it with the deeper 3–4
        inch bed from the coverage table above.
      </p>

      <h2 id="ordering-tips">Ordering tips</h2>
      <p>
        <strong>Order by the yard, not the ton.</strong> Your bed needs a
        volume; tons are how the truck is weighed. If the yard quotes
        &ldquo;river rock, $70/ton,&rdquo; convert with their density — or
        with the 1.45 or 2.35 figures above — and compare against the bulk
        per-yard price ($50–$120/yd³ typical US range, as of Oct 2026) to
        see if the quote is fair. <strong>Round up to full yards</strong>
        for anything over 0.5 yd³ — half-yard minimums are common and the
        surcharge for a &ldquo;partial&rdquo; load erases the savings.{" "}
        <strong>Buy from a landscape supply yard, not bags</strong>, once
        you pass about half a cubic yard: the 0.833-yd³ bed above needs 45
        half-cubic-foot bags at $5–$8 each ($225–$360) versus one bulk
        yard at ~$60–$120. And <strong>add 10%</strong> — the calculator
        does this by default — because graded beds always take more than
        the flat math says.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Spreading 2–4 inch stone at 2 inches deep.</strong> The
        stones can&apos;t nest, fabric shows, and the bed looks thin and
        unfinished — use the size-depth pairing in the table above.{" "}
        <strong>Skipping fabric.</strong> The single most expensive
        shortcut: re-buying your rock in two years when it sinks.{" "}
        <strong>Ordering by weight from the wrong density line.</strong>{" "}
        Assuming 1.45 t/yd³ when the supplier ships at rock-line density
        leaves you short by over a third. <strong>No edging.</strong>{" "}
        Especially with mowers nearby — one season turns an unedged bed
        into a yard-wide scatter zone. <strong>Buying bagged rock for a
        whole bed.</strong> Bags exist for touch-ups; the bed deserves bulk
        pricing.
      </p>

      <Faq items={faqs} heading="How Much River Rock Do I Need? FAQ" />
    </GuideArticle>
  );
}
