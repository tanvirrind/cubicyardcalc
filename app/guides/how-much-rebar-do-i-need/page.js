import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Rebar Do I Need? Spacing Chart, Bar Counts & Weights",
  description:
    "How much rebar do you need for a slab, patio, driveway, or footing? Typical spacing by application, bar-count tables for 10×10 and 20×20 slabs, and a weight table by bar size — all using this site's calculator convention.",
  keywords: [
    "how much rebar do i need",
    "rebar spacing chart",
    "how many bars of rebar for a 10x10 slab",
    "rebar calculator slab",
    "rebar weight per foot chart",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-rebar-do-i-need/" },
  openGraph: {
    title: "How Much Rebar Do I Need? | Cubic Yard Calculator",
    description:
      "Spacing by application, worked bar counts for 10×10 and 20×20 slabs, lap-splice rules, and a weight table by bar size.",
    url: "https://cubicyardcalculator.site/guides/how-much-rebar-do-i-need/",
  },
};

const faqs = [
  {
    q: "How much rebar do I need for a 20×20 slab?",
    a: "At 18-inch spacing with 3 inches of edge clearance: 14 bars each direction × 19.5 ft = 546 linear feet total. In #4 bar (0.668 lb/ft) that is 364.7 lbs — order about 401 lbs with 10% waste. At 12-inch spacing it is 20 bars/dir × 19.5 ft = 780 ft; at 24-inch spacing it is 10 bars/dir × 19.5 ft = 390 ft.",
  },
  {
    q: "What is the standard rebar spacing for a concrete slab?",
    a: "Typical residential guidance: #4 bar at 18 inches on center for slab-on-grade, #4 at 24 inches for light patios, and #5 at 18 inches for driveways carrying vehicle loads. These are typical-practice figures, not engineering — check your local building code and any structural drawings before you order.",
  },
  {
    q: "How do you calculate the number of rebar bars for a slab?",
    a: "Bars per direction = floor((dimension in inches − 2 × edge clearance) ÷ spacing in inches) + 1, with each bar spanning the full dimension minus 2 × clearance. So a 20 ft (240 in) side at 18-in spacing with 3-in clearance gives floor((240 − 6) ÷ 18) + 1 = 14 bars, each 19.5 ft long.",
  },
  {
    q: "How long should rebar lap splices be?",
    a: "A typical Class B splice is about 40× the bar diameter: roughly 15 in for #3, 20 in for #4, 25 in for #5, and 30 in for #6. That is typical guidance — the exact lap length is set by ACI 318 for your concrete strength and bar conditions, so verify with the structural detail.",
  },
  {
    q: "How much rebar do I need for footings?",
    a: "Residential footings typically run 2 continuous horizontal bars (often #4) plus vertical dowels tying into the wall above. For a 20 ft footing with 3-in end clearance: 2 bars × 19.5 ft = 39 ft of bar, plus dowels. Continuous runs also need corner bends and lap splices at joints.",
  },
  {
    q: "Should rebar spacing be measured from the center or the edge?",
    a: "On center — the distance between the centers of adjacent bars. Edge clearance (typically 3 inches minimum per ACI for ground-contact concrete) is separate: it is the gap from the concrete face to the end of the first bar, and it does not change the on-center spacing between bars.",
  },
  {
    q: "How much waste should I add when ordering rebar?",
    a: "About 10% is the standard planning allowance — it covers lap splices, off-cuts, and the short pieces around openings. Jobs with many splices, corners, or complex footprints should lean toward 12–15% rather than cutting it close.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Rebar Do I Need? Spacing Chart, Bar Counts & Weights"
      description="Typical spacing by application, worked bar-count tables for 10×10 and 20×20 slabs, lap-splice rules, and a weight table by bar size — every number from the site's calculator convention."
      slug="how-much-rebar-do-i-need"
      calculatorHref="/calculators/rebar-calculator/"
      calculatorLabel="Try the rebar calculator"
      updated="2026-10"
      toc={[
        { id: "spacing-chart", label: "Spacing chart by application" },
        { id: "the-formula", label: "The bar-count formula" },
        { id: "worked-tables", label: "Worked tables: 10×10 and 20×20" },
        { id: "weights", label: "Weight table by bar size" },
        { id: "footings", label: "Footings and walls" },
        { id: "laps", label: "Lap splices and waste" },
        { id: "accessories", label: "Chairs, ties, and the other 10%" },
        { id: "reading-details", label: "Reading rebar notes on plans" },
        { id: "ordering", label: "Ordering from a supplier" },
        { id: "mistakes", label: "Common mistakes" },
      ]}
      references={[
        "ACI 318 — the governing structural concrete code for edge clearance, splice lengths, and cover requirements (referenced as the code of record, not quoted).",
        "ASTM A615 — nominal bar weights per foot used in this site's rebar calculator.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <p style={{ background: "#f0f7ff", border: "1px solid #cfe3fa", borderRadius: 8, padding: "14px 16px" }}>
        Short on time? The <a href="/calculators/rebar-calculator/">rebar
        calculator</a> computes bars, linear feet, weight, and the 10% waste
        allowance for any slab in one step. This guide explains the
        convention behind it — spacing, worked tables, laps — so you can
        read a structural detail or a supplier&apos;s quote and know exactly
        what you are looking at.
      </p>

      <h2 id="spacing-chart">Spacing chart by application</h2>
      <p>
        These are <strong>typical residential guidance figures</strong>, the
        spacing values you will see on standard details and contractor
        quotes. They are not engineering: your local building code, soil
        conditions, and any stamped structural drawings govern. When in
        doubt, <strong>check local code</strong> — the cost of asking is
        zero, and the cost of under-reinforcing a slab is not.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Application</th><th>Typical bar</th><th>Typical spacing</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Slab-on-grade (shed, garage, interior)</td><td className="num">#4 (½ in)</td><td className="num">18 in on center</td><td>The default residential slab grid</td></tr>
          <tr><td>Patio / walkway</td><td className="num">#4 (½ in)</td><td className="num">24 in on center</td><td>Light duty; sometimes wire mesh instead</td></tr>
          <tr><td>Driveway</td><td className="num">#5 (⅝ in)</td><td className="num">18 in on center</td><td>Heavier bar for vehicle loads</td></tr>
          <tr><td>Footings (continuous)</td><td className="num">#4 (½ in)</td><td className="num">2 continuous bars</td><td>Plus vertical dowels to the wall</td></tr>
          <tr><td>Structural / commercial slabs</td><td className="num">#4–#6</td><td className="num">12 in on center</td><td>Engineer-specified; tighter grid</td></tr>
        </tbody>
      </table>
      <p>
        Bar size notation: <strong>#4 means 4/8 = ½ inch</strong> diameter,{" "}
        <strong>#5 is ⅝ in</strong>, <strong>#6 is ¾ in</strong>, and{" "}
        <strong>#3 is ⅜ in</strong> — the number is eighths of an inch.{" "}
        Residential work lives at #3 and #4; #5 shows up for driveways and
        heavier slabs; #6 and #8 are engineer-specified territory.
      </p>

      <h2 id="the-formula">The bar-count formula</h2>
      <p>
        Every table below — and the calculator — uses one convention.
        For each direction of a rectangular slab grid:
      </p>
      <ul>
        <li><strong>Bars per direction</strong> = floor((dimension in inches − 2 × edge clearance) ÷ spacing) + 1</li>
        <li><strong>Bar length</strong> = dimension in feet − 2 × (clearance ÷ 12)</li>
      </ul>
      <p>
        The default edge clearance is <strong>3 inches</strong> — the ACI
        minimum for concrete in ground contact. So a 20 ft side at 18-in
        spacing: floor((240 − 6) ÷ 18) + 1 = floor(234 ÷ 18) + 1 = 13 + 1 ={" "}
        <strong>14 bars</strong>, each 20 − 2 × 0.25 ={" "}
        <strong>19.5 ft</strong>. That gives 14 × 19.5 = 273 ft in one
        direction. Do it again for the other direction and you have the
        grid: <strong>14 bars/dir × 19.5 ft = 546 linear feet</strong>.
      </p>
      <p>
        Why &ldquo;+ 1&rdquo;? Because the first bar sits at the clearance
        line, not one spacing beyond it: you count the bar at the start
        edge, the bar at the finish edge, and the spaces between them.
        This is the fence-post convention — N spacings need N + 1 posts.
      </p>

      <h2 id="worked-tables">Worked tables: 10×10 and 20×20 slabs</h2>
      <p>
        Both tables use 3-in edge clearance. &ldquo;Per direction&rdquo;
        means one axis of the grid; a slab needs both, so the total is
        doubled.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th colSpan={4}>10 × 10 ft slab (clearance 3 in → bars 9.5 ft long)</th></tr>
          <tr><th>Spacing</th><th>Bars per direction</th><th>Ft per direction</th><th>Total ft</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">12 in</td><td className="num">10</td><td className="num">95.0</td><td className="num"><strong>190.0</strong></td></tr>
          <tr><td className="num">18 in</td><td className="num">7</td><td className="num">66.5</td><td className="num"><strong>133.0</strong></td></tr>
          <tr><td className="num">24 in</td><td className="num">5</td><td className="num">47.5</td><td className="num"><strong>95.0</strong></td></tr>
        </tbody>
      </table>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th colSpan={4}>20 × 20 ft slab (clearance 3 in → bars 19.5 ft long)</th></tr>
          <tr><th>Spacing</th><th>Bars per direction</th><th>Ft per direction</th><th>Total ft</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">12 in</td><td className="num">20</td><td className="num">390.0</td><td className="num"><strong>780.0</strong></td></tr>
          <tr><td className="num">18 in</td><td className="num">14</td><td className="num">273.0</td><td className="num"><strong>546.0</strong></td></tr>
          <tr><td className="num">24 in</td><td className="num">10</td><td className="num">195.0</td><td className="num"><strong>390.0</strong></td></tr>
        </tbody>
      </table>
      <p>
        Check one by hand: 20×20 at 18 in. Each side is 240 in; subtract
        2 × 3 in clearance → 234 in; floor(234 ÷ 18) = 13; + 1 ={" "}
        <strong>14 bars</strong>. Bar length: 20 − 2 × 0.25 ={" "}
        <strong>19.5 ft</strong>. Per direction: 14 × 19.5 ={" "}
        <strong>273 ft</strong>. Both directions: <strong>546 ft</strong>.
        In #4 bar at 0.668 lb/ft that is 546 × 0.668 ={" "}
        <strong>364.7 lbs</strong> — about <strong>401 lbs</strong> with
        the 10% waste allowance (see the weights section next).
      </p>

      <h2 id="weights">Weight table by bar size</h2>
      <p>
        Nominal weights per foot (ASTM A615) are the second column; the
        third column applies them to the 20×20 @ 18 in example (546 ft) so
        you can feel the jump between sizes:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bar</th><th>Diameter</th><th>Weight (lb/ft)</th><th>546 ft weighs</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">#3</td><td className="num">⅜ in</td><td className="num">0.376</td><td className="num">205.3 lb</td></tr>
          <tr><td className="num">#4</td><td className="num">½ in</td><td className="num">0.668</td><td className="num">364.7 lb</td></tr>
          <tr><td className="num">#5</td><td className="num">⅝ in</td><td className="num">1.043</td><td className="num">569.5 lb</td></tr>
          <tr><td className="num">#6</td><td className="num">¾ in</td><td className="num">1.502</td><td className="num">820.1 lb</td></tr>
          <tr><td className="num">#8</td><td className="num">1 in</td><td className="num">2.670</td><td className="num">1,457.8 lb</td></tr>
        </tbody>
      </table>
      <p>
        Suppliers price by weight (per pound or per ton), so the weight
        column is your order ticket. Standard rebar comes in 20-ft lengths
        from most yards — that matters for the bar-length column: a 19.5-ft
        bar fits a 20-ft stick with a half-foot cutoff, while a 29.5-ft bar
        needs two sticks plus a lap splice. Factor standard lengths into
        your waste allowance on big slabs.
      </p>

      <h2 id="footings">Footings and walls</h2>
      <p>
        Footings do not use a grid — they use <strong>continuous
        longitudinal bars</strong>, typically 2 (sometimes 3 for wide
        footings), running the full footing length with standard end
        clearance. The formula is the same idea: bars × (length − 2 ×
        clearance/12).
      </p>
      <ul>
        <li><strong>20 ft footing, 2 × #4:</strong> 2 bars × 19.5 ft = <strong>39 ft</strong> — about 26.1 lb, order 29 lb with waste.</li>
        <li><strong>40 ft footing (two sides), 2 × #4:</strong> 4 bars × 19.5 ft = <strong>78 ft</strong> — 52.1 lb.</li>
        <li><strong>Vertical dowels:</strong> typically #4 at 48 in on center tying the wall to the footing — count them separately; they are short pieces the grid formula misses.</li>
        <li><strong>Corners and T-intersections:</strong> continuous bars must turn corners with bent bars or extra lap splices; each splice costs one lap length (see below).</li>
      </ul>
      <p>
        For footing volume and concrete sizing, pair this with the{" "}
        <a href="/calculators/concrete-footing-calculator/">concrete
        footing calculator</a> — it handles strip, square, and round
        footings and applies the same 10% overage.
      </p>

      <h2 id="laps">Lap splices and waste</h2>
      <p>
        Rebar sticks max out at 20 ft from most suppliers, so long runs
        need <strong>lap splices</strong> — overlapping two bars so the
        concrete bonds them into one. The typical rule of thumb is a{" "}
        <strong>Class B splice of about 40× the bar diameter</strong>:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bar</th><th>Diameter</th><th>Typical lap length</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">#3</td><td className="num">0.375 in</td><td className="num">~15 in</td></tr>
          <tr><td className="num">#4</td><td className="num">0.500 in</td><td className="num">~20 in</td></tr>
          <tr><td className="num">#5</td><td className="num">0.625 in</td><td className="num">~25 in</td></tr>
          <tr><td className="num">#6</td><td className="num">0.750 in</td><td className="num">~30 in</td></tr>
        </tbody>
      </table>
      <p>
        Label this as typical guidance: the exact splice length comes from
        ACI 318 and depends on concrete strength, bar coating, and
        position — check the structural detail on permitted work. The
        calculator does <em>not</em> count splice laps in its bar total;
        instead it rolls them into the <strong>10% waste allowance</strong>{" "}
        alongside off-cuts. On jobs with many splices, corners, or
        openings, raise the allowance to 12–15% rather than cutting it
        fine.
      </p>

      <h2 id="accessories">Chairs, ties, and the other 10%</h2>
      <p>
        The bar count is the headline; the accessories are what keep the
        steel where the design put it. <strong>Chairs</strong> (or dobies
        and bricks on small jobs) hold the grid up at the right height —
        rebar belongs in the middle of the slab, not resting on the dirt,
        because cover below the steel matters as much as cover above it.
        Plan roughly one chair per 4–6 sq ft of grid.{" "}
        <strong>Tie wire</strong> (16-gauge, sold in coils or pre-cut
        loops) fastens every bar intersection or every other one — a 20×20
        grid has 196 intersections, and a coil is cheap insurance against
        the grid walking during the pour. Neither is glamorous; both are
        the difference between reinforcement and expensive decoration.
      </p>

      <h2 id="reading-details">Reading rebar notes on plans and quotes</h2>
      <p>
        Once you know the convention, contractor shorthand decodes itself.
        <strong>#4 @ 18&rdquo; O.C.</strong> means #4 bar at 18 inches on
        center — exactly the grid this guide computes.{" "}
        <strong>E.W.</strong> means &ldquo;each way&rdquo; (both directions
        of the grid); <strong>T&B</strong> means top and bottom mats on a
        thick slab. <strong>Cont.</strong> marks continuous bars in
        footings, and <strong>#4 dowels @ 48&rdquo; O.C.</strong> is the
        standard vertical tie between footing and wall. When a quote says
        &ldquo;546 LF of #4,&rdquo; you can now run the bar-count formula
        backward: 546 ft ÷ 2 directions ÷ 19.5 ft per bar = 14 bars per
        direction — a 20×20 slab at 18-in spacing, and you know instantly
        whether the quote matches your slab.
      </p>

      <h2 id="ordering">Ordering from a supplier: what to say</h2>
      <p>
        Suppliers speak in weight and standard lengths, so translate your
        numbers before you call. For the 20×20 @ 18-in example the order
        is not &ldquo;28 bars&rdquo; — it is <strong>~600 linear feet of
        #4</strong> (546 ft plus the 10% allowance the calculator folds
        in, rounded to a sensible number), which the yard will sell as{" "}
        <strong>30 twenty-foot sticks</strong> — 28 for the grid plus 2
        for cuts and laps — weighing <strong>~401 lbs</strong>. Ask for
        stick count and weight, confirm the price per pound or per stick,
        and ask whether they cut to length (most will, for a small fee —
        worth it on big slabs, where hauling 30 full-length sticks is its
        own project). Epoxy-coated bar costs more and needs touch-up paint
        at every cut; plain black bar is the default for residential work.
      </p>

      <h2 id="mistakes">Common mistakes</h2>
      <p>
        <strong>Measuring spacing edge-to-edge instead of on
        center.</strong> Spacing is center-to-center; edge-to-edge
        shortchanges the grid. <strong>Skipping edge clearance.</strong>{" "}
        Bars need ~3 in of concrete cover at the edges (ACI minimum for
        ground contact) — concrete protects steel from corrosion, and steel
        at the face rusts, expands, and spalls the concrete off.{" "}
        <strong>Counting only one direction.</strong> A slab grid has two
        axes; every number above doubles. <strong>Forgetting
        dowels.</strong> Walls-to-footing dowels and slab thickening bars
        are not in the grid math — add them separately.{" "}
        <strong>Ordering exact footage.</strong> A 20-ft stick yields one
        19.5-ft bar; a 29.5-ft bar needs two sticks and a splice. Plan cuts
        and laps into the 10%. <strong>Swapping bar size without checking
        weight.</strong> Moving a driveway from #4 to #5 at 18 in jumps the
        546-ft example from 365 lb to 570 lb — same grid, 56% more steel.
      </p>

      <p>
        Run your exact slab through the{" "}
        <a href="/calculators/rebar-calculator/">rebar calculator</a> —
        bars, linear feet, pounds, tons, and the waste-adjusted order in
        one result.
      </p>

      <Faq items={faqs} heading="How Much Rebar Do I Need FAQ" />
    </GuideArticle>
  );
}
