import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Gravel & Crushed Stone Size Chart: #57, #21A, Crusher Run & More",
  description:
    "Crushed stone size chart for homeowners: #57, #21A, crusher run, #8, pea gravel, #3/#4 and quarry process — size, looks, compaction, drainage, and best uses.",
  keywords: [
    "gravel size chart",
    "#57 stone vs crusher run",
    "what is 21a gravel",
    "crushed stone sizes explained",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/gravel-size-chart/" },
  openGraph: {
    title: "Gravel & Crushed Stone Size Chart: #57, #21A, Crusher Run & More | Cubic Yard Calculator",
    description:
      "Every common crushed stone size explained: what it looks like, whether it compacts or drains, and which projects it fits.",
    url: "https://cubicyardcalculator.site/guides/gravel-size-chart/",
  },
};

const faqs = [
  {
    q: "What is the difference between #57 stone and crusher run?",
    a: "#57 stone is clean, crushed rock about ¾ to 1 inch across with the dust washed out — it drains beautifully but only locks together moderately. Crusher run is ¾-inch-minus stone that still contains its rock-dust fines, so it compacts into a hard, pavement-like crust but drains poorly. Pick #57 where water must pass through, crusher run where tires or feet must drive on it.",
  },
  {
    q: "What is 21A gravel?",
    a: "21A is the Mid-Atlantic quarry term for ¾-inch crusher run — crushed stone graded from ¾ inch down to rock dust, with the fines included. It is the same material other regions call crusher run, dense grade, or quarry process. Its fines are what let it compact into a firm driving surface.",
  },
  {
    q: "Does pea gravel compact?",
    a: "No. Pea gravel's stones are rounded river rock, so they roll past each other instead of locking together — it migrates under tires and shuffles under feet. Use it for walkways, patios, and fire-pit areas where looks matter, and use crusher run for anything that must stay put.",
  },
  {
    q: "Which gravel drains the best?",
    a: "Clean angular stone with no fines drains best: #57 stone, #8 chips, and #3/#4 large stone all let water pass straight through. Avoid crusher run, 21A, quarry process, or dense grade anywhere drainage matters — their fines clog the voids that water needs.",
  },
  {
    q: "What size gravel is best for a driveway?",
    a: "Build in layers: large #3 stone (about 2 to 3 inches) for the base, #57 stone (about 1 inch) in the middle, and crusher run (¾-inch minus with fines) on top. The crushed, angular top layer locks together into the drivable surface.",
  },
  {
    q: "How much gravel do I need for my project?",
    a: "Measure length times width times depth in feet, then divide by 27 to get cubic yards. Gravel is sold by the ton, and a cubic yard weighs about 1.4 tons, so multiply your cubic yards by 1.4. The gravel calculator does this conversion automatically.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Gravel & Crushed Stone Size Chart: #57, #21A, Crusher Run & More"
      description="The homeowner's reference for every common gravel size — what it looks like, whether it compacts or drains, which projects it suits, and exactly what to say at the quarry."
      slug="gravel-size-chart"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10-13"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Almost every gravel decision comes down to two families.{" "}
        <strong>Clean crushed stone</strong> (#57, #8, #3) has the dust
        washed out: it drains beautifully but only locks together
        moderately, so it is the right call anywhere water must pass
        through. <strong>Stone with fines</strong> (crusher run, 21A,
        quarry process, dense grade) keeps its rock dust: it compacts into
        a hard, pavement-like crust, but drains poorly — so it is the
        right call anywhere tires or feet need a firm surface. The rule
        of thumb: <strong>drive on it → fines; drain through it →
        clean.</strong> One more thing to know before you shop: gravel
        names are regional. 21A, crusher run, quarry process, and dense
        grade are often the exact same bin of stone wearing different
        labels — the chart below translates them for you.
      </p>

      <h2>The master chart: every common size, decoded</h2>
      <p>
        Find the stone, read across for what it looks like, how it
        behaves, and where it belongs. The last column gives you the
        exact words to use when you call the quarry.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr>
            <th>Stone</th>
            <th>Typical size</th>
            <th>What it looks like</th>
            <th>Compacts?</th>
            <th>Drains?</th>
            <th>Best projects</th>
            <th>What to ask the quarry for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>#57 stone</strong></td>
            <td className="num">¾&ndash;1 in</td>
            <td>Chunky angular gray rock, washed clean</td>
            <td>Moderately — locks in place but stays open</td>
            <td>Excellent</td>
            <td><a href="/guides/how-much-gravel-for-a-french-drain/">French drains</a>, driveway middle layer, drainage beds</td>
            <td>&ldquo;#57 stone&rdquo; or &ldquo;1-inch clean stone&rdquo;</td>
          </tr>
          <tr>
            <td><strong>#21A / crusher run</strong></td>
            <td className="num">¾ in minus + fines</td>
            <td>Mixed chips and rock dust — packs like pavement</td>
            <td>Excellent — the best binder on this chart</td>
            <td>Poor to fair (fines block the voids)</td>
            <td><a href="/guides/how-much-gravel-for-a-driveway/">Driveways</a>, <a href="/guides/how-much-gravel-for-a-shed-base/">shed bases</a>, <a href="/guides/how-much-gravel-for-an-rv-pad/">RV pads</a></td>
            <td>&ldquo;Crusher run&rdquo;, &ldquo;21A&rdquo;, or &ldquo;¾-inch minus&rdquo;</td>
          </tr>
          <tr>
            <td><strong>#8 stone</strong></td>
            <td className="num">⅜ in chips</td>
            <td>Small angular chips, washed clean</td>
            <td>Moderately, in thin layers</td>
            <td>Excellent</td>
            <td><a href="/guides/paver-base-sand-gravel-guide/">Paver bedding and joints</a>, drainage trenches, <a href="/guides/how-much-gravel-for-a-fire-pit-area/">fire-pit areas</a></td>
            <td>&ldquo;#8 stone&rdquo; or &ldquo;⅜-inch chips&rdquo;</td>
          </tr>
          <tr>
            <td><strong>Pea gravel</strong></td>
            <td className="num">⅜ in, rounded</td>
            <td>Smooth colorful river pebbles — the pretty one</td>
            <td>No — round stones roll and migrate</td>
            <td>Excellent</td>
            <td><a href="/guides/how-much-gravel-for-a-walkway/">Walkways</a>, patios, <a href="/guides/how-much-gravel-for-a-fire-pit-area/">fire-pit areas</a></td>
            <td>&ldquo;Pea gravel&rdquo;</td>
          </tr>
          <tr>
            <td><strong>#3 / #4 stone</strong></td>
            <td className="num">1&ndash;3 in</td>
            <td>Big angular chunks — looks like riprap&apos;s little sibling</td>
            <td>No — bridges soft soil instead</td>
            <td>Excellent</td>
            <td>Deep driveway/road bases, <a href="/guides/how-much-gravel-for-a-retaining-wall/">retaining-wall drainage</a>, construction entrances</td>
            <td>&ldquo;#3 stone&rdquo; or &ldquo;2-inch clean&rdquo;</td>
          </tr>
          <tr>
            <td><strong>Quarry process / dense grade</strong></td>
            <td className="num">¾ in minus + fines</td>
            <td>Near-twin of crusher run, blended to a spec</td>
            <td>Excellent</td>
            <td>Poor to fair</td>
            <td><a href="/guides/how-much-gravel-for-a-driveway/">Driveways</a>, <a href="/guides/how-much-gravel-for-a-shed-base/">shed bases</a>, path bases</td>
            <td>&ldquo;Quarry process&rdquo;, &ldquo;Item 4&rdquo;, or &ldquo;dense graded aggregate&rdquo;</td>
          </tr>
        </tbody>
      </table>

      <h2>Regional names: same bin, different label</h2>
      <p>
        Gravel naming follows quarry tradition, not national standards, so
        the same material can sound like four different products. When
        you hear <strong>21A</strong> (Mid-Atlantic),{" "}
        <strong>crusher run</strong> (Southeast),{" "}
        <strong>quarry process</strong> or <strong>Item 4</strong> (New
        York / New England), <strong>dense grade</strong> (Midwest), or{" "}
        <strong>¾-minus</strong> (Pacific Northwest), you are almost always
        hearing about ¾-inch crushed stone <strong>with fines
        included</strong> — the compacting, driveway-grade material.{" "}
        <strong>#57</strong> is the nationwide term for 1-inch clean stone
        with the fines washed out. If a quote uses a name you do not
        recognize, ask the one clarifying question:{" "}
        <strong>&ldquo;Is that with fines, or washed clean?&rdquo;</strong>{" "}
        The answer tells you everything about how it will behave.
      </p>

      <h2>The two-question buying shortcut</h2>
      <p>
        Staring at the chart and still unsure? Answer these in order.
        <strong>One:</strong> will it be driven or walked on heavily? If
        yes, you need fines that bind — crusher run, 21A, quarry process,
        or dense grade. A firm top layer is non-negotiable for driveways,
        RV pads, and shed bases. <strong>Two:</strong> does water need to
        pass through it? If yes — French drains, drainage beds, retaining
        wall backfill, fire-pit surrounds — you need clean stone with no
        fines: #57, #8, or #3. Mixing the two up is the most common gravel
        mistake: fines under a downspout trench clog it into a pond, and
        clean stone under a car scatters like marbles.
      </p>

      <h2>What to tell the quarry (exact script)</h2>
      <p>
        Quarries sell by the ton and quote faster when you sound like you
        know the drill. Say: <em>&ldquo;I need [quantity] tons of
        [stone name], delivered to [address].&rdquo;</em> To get the
        quantity, compute cubic yards first — length × width × (depth in
        inches ÷ 12) ÷ 27 — then multiply by{" "}
        <strong>1.4</strong> (a cubic yard of gravel weighs about 2,800
        lbs, or 1.4 tons). Then confirm three things: that the price is{" "}
        <strong>delivered per ton</strong> (hauling is where quotes
        balloon), whether a tailgate-spread is possible on your site, and
        that a tri-axle can reach the dump spot (about 12 feet wide and 14
        feet of overhead clearance). Always ask for loose stone, not bags
        — bagged gravel costs several times more per ton and only makes
        sense for patching.
      </p>

      <h2>Ordering math: from this chart to a tonnage quote</h2>
      <p>
        Once the chart has told you <em>which</em> stone, the order is
        simple arithmetic. Cubic yards = length × width × (depth in
        inches ÷ 12) ÷ 27. Tons = cubic yards ×{" "}
        <strong>1.4</strong> (a cubic yard of gravel weighs about 2,800
        lbs). Example: a 12×50 ft driveway lane at 6 inches — the
        standard rebuild depth — is (12 × 50 × 0.5) / 27 ={" "}
        <strong>11.1 cubic yards</strong>, × 1.4 ={" "}
        <strong>15.6 tons</strong> of crusher run for the top layer. Then
        add <strong>10% overage</strong> for compaction loss and edge
        spill, and you have your quote number: about 17 tons. Build the
        base layer the same way with #3 stone if the soil is soft. The{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        runs the same math with your dimensions in one click.
      </p>

      <h2>Common mistakes this chart prevents</h2>
      <p>
        <strong>Pea gravel driveways.</strong> It looks charming in the
        photos and migrates to the lawn within a month — round stone
        cannot lock under tires. <strong>Crusher run in drainage
        trenches.</strong> The fines that make it great under tires make
        it terrible under water; drainage stone must be washed clean.{" "}
        <strong>One stone for the whole build.</strong> Bases want big,
        clean stone (#3) that bridges soil; surfaces want fines that bind
        (crusher run). <strong>Ordering before asking about fines.</strong>{" "}
        If the quote just says &ldquo;gravel,&rdquo; ask whether it is
        with fines or washed clean — that single answer decides whether
        your project works.
      </p>

      <Faq items={faqs} heading="Gravel & Stone Size Chart FAQ" />
    </GuideArticle>
  );
}
