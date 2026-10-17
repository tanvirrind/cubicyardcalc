import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Deep Should Playground Mulch Be? (Safety Depths + How Much to Buy)",
  description:
    "Playground mulch depth is a safety spec, not a garden guess. CPSC-anchored depths by equipment fall height, engineered wood fiber vs rubber mulch compared, worked quantity examples, and top-up cadence.",
  keywords: [
    "how deep should playground mulch be",
    "how much mulch for playground",
    "playground mulch depth safety",
    "engineered wood fiber depth",
    "how much rubber mulch for playground",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/playground-mulch-depth-guide/" },
  openGraph: {
    title: "How Deep Should Playground Mulch Be? (Safety Depths + How Much to Buy) | Cubic Yard Calculator",
    description:
      "Safety depths by fall height, EWF vs rubber mulch, and worked quantity math for any play zone. Free mulch calculator.",
    url: "https://cubicyardcalculator.site/guides/playground-mulch-depth-guide/",
  },
};

const faqs = [
  {
    q: "How deep should mulch be under a backyard swing set?",
    a: "A minimum of 9 inches of settled engineered wood fiber (EWF) protects fall heights up to about 10 feet, which covers most residential swing sets. Measure depth monthly in the high-traffic landing zones — under the swings and at slide exits — because play displaces fill faster than you'd expect.",
  },
  {
    q: "Can I use regular garden mulch for a playground?",
    a: "No. Regular landscape mulch isn't tested to ASTM F1292, can contain splinters or CCA-treated wood, and breaks down unpredictably. Use engineered wood fiber — graded, splinter-free, and rated for play surfaces — or playground-grade rubber mulch.",
  },
  {
    q: "How much rubber mulch do I need for a 20×20 play area?",
    a: "Rubber mulch is installed at 6 inches: (20 × 20 × 0.5) / 27 = about 7.4 cubic yards. Rubber settles far less than wood fiber, so 5–10% overage is enough — order 8 yards.",
  },
  {
    q: "How often does playground mulch need topping up?",
    a: "Plan on 1 to 3 inches of fresh engineered wood fiber per year, checked monthly in landing zones. EWF decomposes and compacts over 3 to 5 years, at which point a full refresh restores the safety depth. Rubber mulch needs only periodic raking and redistribution over a 10+ year life.",
  },
  {
    q: "Is rubber mulch safer than engineered wood fiber?",
    a: "Both pass ASTM F1292 impact tests when installed at their rated depths — about 6 inches for rubber, 9 to 12 for wood fiber. Rubber lasts far longer and displaces less, but it gets much hotter in direct sun. EWF is cooler, cheaper, and all-natural but needs annual top-ups.",
  },
  {
    q: "How much does playground mulch cost?",
    a: "Engineered wood fiber typically runs $25–40 per cubic yard in bulk, so a 20×20 play zone at 9 inches (11.1 yards) is roughly $280–450 in material. Playground rubber mulch runs $110–160 per yard — the same zone at 6 inches (7.4 yards) is roughly $800–1,200.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Deep Should Playground Mulch Be?"
      description="This is a safety spec, not a garden guess: CPSC-anchored depths by equipment fall height, engineered wood fiber vs rubber mulch compared, and worked quantity math for any play zone."
      slug="playground-mulch-depth-guide"
      calculatorHref="/calculators/mulch-calculator/"
      calculatorLabel="Try the mulch calculator"
      updated="2026-10"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        For most backyard and school playgrounds: <strong>9 to 12 inches of
        engineered wood fiber (EWF)</strong>, or <strong>about 6 inches of
        playground-grade rubber mulch</strong> — measured as settled,
        compacted depth, not loose. Quantity is the same volume formula as
        decorative mulch: (length × width × depth in feet) / 27. A 20×20 play
        zone at 9 inches: (20 × 20 × 0.75) / 27 = <strong>11.1 cubic
        yards</strong> of EWF. If you only know decorative mulch depths (2–4
        inches), see our <a href="/guides/how-much-mulch-do-i-need/">mulch
        quantity guide</a> — playground surfacing is a different spec
        entirely.
      </p>

      <h2>Safety depths by fall height</h2>
      <p>
        The depths below follow the guidance in the CPSC Public Playground
        Safety Handbook (Publication 325) and the impact-attenuation testing
        of ASTM F1292 — the standard that measures whether a surface can
        absorb a fall. Match the depth to your <strong>equipment&apos;s fall
        height</strong>: the highest play surface a child can stand on.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Equipment fall height</th><th>Engineered wood fiber (settled)</th><th>Rubber mulch (settled)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Up to 4 ft</td><td className="num">6 in</td><td className="num">6 in</td></tr>
          <tr><td className="num">Up to 6 ft</td><td className="num">9 in</td><td className="num">6 in</td></tr>
          <tr><td className="num">Up to 8–10 ft</td><td className="num">9–12 in</td><td className="num">6 in</td></tr>
          <tr><td className="num">Up to 12 ft</td><td className="num">12 in</td><td className="num">6 in (check manufacturer rating)</td></tr>
        </tbody>
      </table>
      <p>
        Two rules sit behind the table. First, the depths above are
        <strong> settled depth</strong>: install loose fill 25–30% deeper to
        start, because it compacts (a 12-inch loose layer of EWF settles to
        roughly 9 inches). Second, depth is only valid inside the
        <strong> use zone</strong> — CPSC calls for at least 6 feet of
        protective surfacing in all directions from stationary equipment,
        and swings need surfacing extending twice the pivot-bar height in
        front and back. A perfect 12-inch bed that ends 3 feet short of the
        slide exit fails the spec.
      </p>

      <h2>Engineered wood fiber vs rubber mulch</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th></th><th>Engineered wood fiber</th><th>Playground rubber mulch</th></tr>
        </thead>
        <tbody>
          <tr><td>Required settled depth</td><td className="num">9–12 in</td><td className="num">~6 in</td></tr>
          <tr><td>Lifespan</td><td>3–5 years (decomposes)</td><td>10–15 years</td></tr>
          <tr><td>Heat in direct sun</td><td>Stays cooler (near air temp)</td><td>Can exceed 160°F — burn risk for bare feet</td></tr>
          <tr><td>Material cost (bulk)</td><td className="num">~$25–40/yd³</td><td className="num">~$110–160/yd³</td></tr>
          <tr><td>Displacement under swings</td><td>High — rakes back often</td><td>Lower — stays put better</td></tr>
          <tr><td>Maintenance</td><td>1–3 in top-up yearly; full refresh every 3–5 yrs</td><td>Redistribute yearly; replace gradually</td></tr>
          <tr><td>Drainage</td><td>Good (needs base drainage)</td><td>Excellent — won&apos;t absorb water</td></tr>
          <tr><td>End of life</td><td>Biodegrades into soil</td><td>Must be removed and disposed</td></tr>
        </tbody>
      </table>
      <p>
        EWF wins on cost and heat for sunny backyard setups; rubber wins on
        maintenance and longevity for schools, churches, and HOAs that
        don&apos;t want an annual top-up budget. Never substitute regular
        landscape mulch for EWF — only material tested to ASTM F1292 carries
        a fall-height rating.
      </p>

      <h2>Worked quantity examples</h2>
      <p>
        Measure the <strong>whole use zone</strong>, not just the equipment
        footprint. Yards = (L × W × depth in feet) / 27; EWF tons = yards ×
        0.4 (EWF runs about 800 lbs/yd³). The &ldquo;order&rdquo; column adds
        ~30% for settling and displacement so the settled depth holds.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Play zone</th><th>Settled depth</th><th>Cubic yards</th><th>EWF tons</th><th>Order</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">12 × 12 ft</td><td className="num">9 in</td><td className="num">4.0</td><td className="num">1.6</td><td className="num">5–5.5</td></tr>
          <tr><td className="num">15 × 15 ft</td><td className="num">12 in</td><td className="num">8.3</td><td className="num">3.3</td><td className="num">10.5–11</td></tr>
          <tr><td className="num">20 × 20 ft</td><td className="num">9 in</td><td className="num">11.1</td><td className="num">4.4</td><td className="num">14–15</td></tr>
          <tr><td className="num">24 × 24 ft</td><td className="num">12 in</td><td className="num">21.3</td><td className="num">8.5</td><td className="num">27–28</td></tr>
        </tbody>
      </table>
      <p>
        Sanity check: 20 × 20 × 0.75 = 300 cu ft / 27 = 11.1 yards. At 4.4
        tons for the 20×20 EWF job, a single-axle dump truck (roughly 5–8
        yards) covers most backyard zones — plan driveway access before
        delivery.
      </p>

      <h2>The settle and compaction allowance</h2>
      <p>
        Loose-fill surfacing loses <strong>25–30% of its depth to
        settling</strong> in the first months of play. Because CPSC depths are
        specified for settled material, there are only two compliant ways to
        hit them: install extra up front (12 inches loose for a 9-inch
        settled target), or top up aggressively after the first season. The
        pragmatic move is both — install 30% over the settled target, then
        check. The cheapest compliance tool is a <strong>depth marker</strong>:
        a painted stake or fence post in the middle of the play zone marked
        at 9 and 12 inches, checked monthly. Displacement concentrates where
        kids land — under swings and at slide exits thin out first, and a
        zone that averages 10 inches can be 5 inches where it matters most.
      </p>

      <h2>Maintenance cadence that keeps the rating</h2>
      <p>
        <strong>Monthly:</strong> rake landing zones level and check depth at
        the markers. <strong>Yearly:</strong> add 1–3 inches of fresh EWF —
        think of it as a tire rotation for the playground. <strong>Every 3–5
        years:</strong> strip and refresh EWF fully; decomposed wood fiber
        compacts into a hardpan that loses cushioning. Rubber mulch gets an
        easier schedule: rake back into place yearly, top up thin spots, and
        expect 10+ years before replacement. Clear debris (glass, sticks,
        animal waste) on every check — loose fill hides hazards well. And
        make sure the base drains: a french-drain style gravel strip or a
        simple slope under the fill keeps EWF from rotting in standing water.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Using decorative mulch.</strong> Bagged landscape mulch is
        not EWF — inconsistent particle size, possible splinters, no impact
        rating. <strong>Measuring the wrong area.</strong> The use zone, not
        the equipment footprint, gets surfacing. <strong>Skipping
        drainage.</strong> Fill over a flat, undrained pad turns into a
        swamp that rots wood fiber. <strong>No edging.</strong> Loose fill
        migrates; a timber or plastic border holds the depth you paid for.
        <strong>Set-and-forget.</strong> Depth drifts within months —
        without a monthly check, you&apos;re guessing at a safety spec.
        <strong>Surfacing over hard base.</strong> Loose fill over concrete
        or asphalt needs extra depth and drainage, not the standard table —
        CPSC cautions against assuming the rating transfers.
      </p>

      <p>
        <em>This is general guidance based on CPSC and ASTM F1292
        references. Always follow your equipment manufacturer&apos;s tested
        depth data and any local code — standards data beats a web article.</em>
      </p>

      <Faq items={faqs} heading="Playground Mulch FAQ" />
    </GuideArticle>
  );
}
