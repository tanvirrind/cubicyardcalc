import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for a Dog Run? (Size Tables & Materials)",
  description:
    "Pea gravel quantities for common dog run sizes at 3 and 4 inch depths, in yards, tons, and bags — plus the pea gravel vs rubber mulch verdict.",
  keywords: [
    "how much pea gravel for a dog run",
    "best gravel for dog run",
    "dog run gravel depth",
    "pea gravel vs rubber mulch dog run",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-dog-run/" },
  openGraph: {
    title: "How Much Gravel Do I Need for a Dog Run? (Size Tables & Materials) | Cubic Yard Calculator",
    description:
      "Size tables in yards, tons, and bags at 3 and 4 inch depths, material comparison, and the install steps that keep it draining.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-dog-run/",
  },
};

const faqs = [
  {
    q: "How deep should gravel be in a dog run?",
    a: "3 to 4 inches is the sweet spot. Less than 3 inches and paws push through to mud; more than 4 inches and the surface shifts underfoot, waste sinks in, and you're buying stone you don't need. Use 4 inches for large or very active dogs.",
  },
  {
    q: "How much pea gravel do I need for a 10x10 dog run?",
    a: "About 1 cubic yard (1.3 tons) at a 3 inch depth, or about 1.25 yards (1.7 tons) at 4 inches. In bags, that's roughly 50 to 67 half-cubic-foot bags. Add 10% overage for settling and spillage.",
  },
  {
    q: "Is pea gravel or rubber mulch better for a dog run?",
    a: "Pea gravel wins for most runs: it's cheaper, drains better, doesn't break down, and waste is easy to scoop off it. Rubber mulch is softer on joints and doesn't scatter, but it costs several times more, can smell when new, and some dogs chew it — which is a vet visit waiting to happen.",
  },
  {
    q: "Will pea gravel hurt my dog's paws?",
    a: "Generally no — pea gravel's smooth, rounded edges make it the gentlest stone option for paws, far kinder than crushed angular rock. The one watch-out is summer heat: light-colored stone reflects heat better than dark rubber mulch, but hose the run down on very hot days either way.",
  },
  {
    q: "Do I need landscape fabric under dog run gravel?",
    a: "Yes — use a woven (not cheap spun) landscape fabric. It stops weeds from growing up through the stone and keeps the gravel from sinking into mud over time, while still letting urine and rain drain through. Cheap non-woven fabric clogs and turns the run into a swamp.",
  },
  {
    q: "What size pea gravel is best for a dog run?",
    a: "The standard 3/8 inch pea gravel. It's small enough to be comfortable under paws and to rake smooth, but large enough to drain well and not track into the house on fur the way finer stone does.",
  },
  {
    q: "How do you clean gravel in a dog run?",
    a: "Scoop solids daily like any yard, hose the gravel down weekly to flush urine, and rake it smooth. Every few months, treat odor spots with an enzyme-based pet cleaner — not bleach, which just masks smell and can irritate paws. Top-dress with fresh gravel yearly.",
  },
  {
    q: "How often should I replace the gravel in a dog run?",
    a: "Plan on topping up with fresh stone once a year to replace what gets kicked out and compacted, and a full refresh every 2 to 3 years. If odor persists after enzyme treatment or drainage slows noticeably, it's time for the full refresh.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for a Dog Run?"
      description="Pea gravel quantities for common dog run sizes at 3 and 4 inch depths — in cubic yards, tons, and bags — plus the material comparison and install steps that keep it draining for years."
      slug="how-much-gravel-for-a-dog-run"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "the-formula-one-worked-example", label: "The formula (one worked example)" },
        { id: "gravel-for-a-dog-run-at-3-inch-depth", label: "Gravel for a dog run at 3 inch depth" },
        { id: "gravel-for-a-dog-run-at-4-inch-depth", label: "Gravel for a dog run at 4 inch depth" },
        { id: "bagged-vs-bulk-the-crossover", label: "Bagged vs bulk: the crossover" },
        { id: "best-material-for-a-dog-run-compared", label: "Best material for a dog run, compared" },
        { id: "why-pea-gravel-usually-wins", label: "Why pea gravel usually wins" },
        { id: "installing-it-right-edging-fabric-and-slope", label: "Installing it right: edging, fabric, and slope" },
        { id: "cleaning-and-refreshing", label: "Cleaning and refreshing" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "ASTM C33 aggregate density ranges",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
        "Typical dog run installation practice — 3–4 inch pea gravel depth over woven landscape fabric, with edging and a slight drainage slope.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        A dog run wants <strong>3 to 4 inches of 3/8 inch pea gravel</strong>{" "}
        over woven landscape fabric, inside solid edging. A{" "}
        <strong>10&times;10 run at 3 inches</strong> needs about{" "}
        <strong>1 cubic yard (1.3 tons)</strong>; the same run at 4 inches
        needs about <strong>1.25 yards (1.7 tons)</strong>. Pea gravel beats
        crushed stone, decomposed granite, and rubber mulch for most dogs on
        the combination of paw comfort, drainage, easy cleanup, and cost.
        Add <strong>10% overage</strong> to every figure for settling and
        spillage.
      </p>

      <h2 id="the-formula-one-worked-example">The formula (one worked example)</h2>
      <p>
        Gravel volume is length &times; width &times; depth, all in feet,
        divided by 27 for cubic yards. Remember that{" "}
        <strong>3 inches = 0.25 feet</strong> and{" "}
        <strong>4 inches = &frac13; foot</strong>. The worked example: a
        10&times;10 run at 3 inches is 10 &times; 10 &times; 0.25 = 25 cubic
        feet; 25 &divide; 27 = <strong>0.93 cubic yards</strong>, which you
        round up to <strong>1 yard</strong>. At 2,800 lb per yard, that&apos;s
        0.93 &times; 1.4 = <strong>1.3 tons</strong>. Bagged as half-cubic-foot
        bags: 25 &divide; 0.5 = <strong>50 bags</strong>. Every table below
        is built from this same formula — and our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        runs it for any size you type in.
      </p>

      <h2 id="gravel-for-a-dog-run-at-3-inch-depth">Gravel for a dog run at 3 inch depth</h2>
      <p>
        Three inches suits small to medium dogs and runs that see moderate
        use. Bag counts assume standard 0.5 cu ft bags of pea gravel:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Run size</th><th>Cubic yards</th><th>Tons</th><th>0.5 cu ft bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 &times; 10 ft</td><td className="num">0.74</td><td className="num">1.0</td><td className="num">40</td></tr>
          <tr><td className="num">10 &times; 10 ft</td><td className="num">0.93</td><td className="num">1.3</td><td className="num">50</td></tr>
          <tr><td className="num">10 &times; 20 ft</td><td className="num">1.85</td><td className="num">2.6</td><td className="num">100</td></tr>
          <tr><td className="num">12 &times; 24 ft</td><td className="num">2.67</td><td className="num">3.7</td><td className="num">144</td></tr>
        </tbody>
      </table>

      <h2 id="gravel-for-a-dog-run-at-4-inch-depth">Gravel for a dog run at 4 inch depth</h2>
      <p>
        Four inches is the better call for large breeds, multi-dog runs, and
        any run that gets heavy daily use — the extra inch keeps paws off
        the mud line longer as the stone compacts and migrates:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Run size</th><th>Cubic yards</th><th>Tons</th><th>0.5 cu ft bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8 &times; 10 ft</td><td className="num">0.99</td><td className="num">1.4</td><td className="num">53</td></tr>
          <tr><td className="num">10 &times; 10 ft</td><td className="num">1.23</td><td className="num">1.7</td><td className="num">67</td></tr>
          <tr><td className="num">10 &times; 20 ft</td><td className="num">2.47</td><td className="num">3.5</td><td className="num">133</td></tr>
          <tr><td className="num">12 &times; 24 ft</td><td className="num">3.56</td><td className="num">5.0</td><td className="num">192</td></tr>
        </tbody>
      </table>
      <p>
        Add 10% overage before you order, then round to what your supplier
        sells — most bulk yards sell by the half yard, so 0.93 yards becomes
        a 1-yard order and 1.23 becomes 1.5. If your supplier prices by the
        ton instead, our{" "}
        <a href="/calculators/gravel-to-tons-calculator/">gravel to tons calculator</a>{" "}
        converts either direction.
      </p>

      <h2 id="bagged-vs-bulk-the-crossover">Bagged vs bulk: the crossover</h2>
      <p>
        A 0.5 cu ft bag of pea gravel typically runs $5–$7 at a home center,
        so one cubic yard in bags costs roughly $270–$380 (54 bags), versus
        roughly $40–$80 per yard in bulk plus a $50–$100 delivery fee —
        prices vary by market, so get a local quote. The practical crossover
        is around <strong>1 cubic yard</strong>: an 8&times;10 run at 3
        inches (0.74 yards, 40 bags) is genuinely convenient to buy bagged
        and haul in a car or SUV. A 10&times;20 at 4 inches (2.5 yards, 133
        bags) is a bulk order — you will not enjoy opening 133 bags, and
        you&apos;ll pay double for the privilege. Between those, bulk wins
        on price the moment a delivery fee is less than the bagged markup.
      </p>

      <h2 id="best-material-for-a-dog-run-compared">Best material for a dog run, compared</h2>
      <p>
        Four materials show up in dog runs. Here&apos;s how they actually
        compare on the things that matter — paws, drainage, cleanup, and
        cost:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Paw comfort</th><th>Drainage</th><th>Cleanup</th><th>Cost</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pea gravel</strong> (3/8&rdquo;)</td><td>Excellent — smooth, rounded</td><td>Excellent</td><td>Easy — waste sits on top</td><td>$</td></tr>
          <tr><td><strong>Crushed stone</strong> (#57 / crusher run)</td><td>Poor — sharp, angular edges</td><td>Excellent</td><td>Easy</td><td>$</td></tr>
          <tr><td><strong>Decomposed granite</strong></td><td>Good when compacted</td><td>Fair — packs tight, can puddle</td><td>Hard — waste blends in</td><td>$</td></tr>
          <tr><td><strong>Rubber mulch</strong></td><td>Excellent — soft</td><td>Good</td><td>Moderate — pieces cling to waste</td><td>$$$</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Crushed stone</strong> drains beautifully and locks in place,
        but its angular edges are genuinely uncomfortable for dogs that run
        and play on it daily — save it for drainage projects, not paws.{" "}
        <strong>Decomposed granite</strong> packs into a firm, natural-feeling
        surface that diggers can&apos;t excavate, but it turns dusty in dry
        weather, muddy in wet weather, and spotting waste on it is miserable.{" "}
        <strong>Rubber mulch</strong> is the softest option and doesn&apos;t
        scatter like stone, but it costs several times more per cubic yard,
        smells like a tire shop for the first weeks, gets hot in direct sun,
        and — the real dealbreaker — some dogs chew it, which means an
        emergency vet visit. It also never breaks down, so a contaminated
        batch can&apos;t be composted away.
      </p>

      <h2 id="why-pea-gravel-usually-wins">Why pea gravel usually wins</h2>
      <p>
        Pea gravel is the consensus pick because it&apos;s the only option
        that&apos;s good at everything rather than great at one thing. The{" "}
        <strong>rounded 3/8 inch stones</strong> are gentle on paws even for
        dogs that sprint the fence line all day; the voids between stones{" "}
        <strong>drain urine and rain fast</strong> so the surface stays dry
        and odor stays low; solid waste <strong>sits on top</strong> instead
        of blending in, so daily scooping takes minutes; and it&apos;s{" "}
        <strong>the cheapest option</strong> by a wide margin. Its weaknesses
        are manageable: it migrates and gets kicked out of the run (solved
        with proper edging), and it needs an annual top-dress. If you want
        the full rundown on stone sizing, our{" "}
        <a href="/guides/gravel-size-chart/">gravel size chart</a> covers
        what the numbers mean.
      </p>

      <h2 id="installing-it-right-edging-fabric-and-slope">Installing it right: edging, fabric, and slope</h2>
      <p>
        A dog run fails from the bottom up, so the install order matters:
      </p>
      <p>
        <strong>1. Lay out and excavate.</strong> Mark the run, then dig out
        5–6 inches of soil — that&apos;s room for 3–4 inches of gravel plus
        the fabric and a little settling. <strong>2. Grade a slight
        slope.</strong> The excavated base should fall about 1–2% (roughly
        1 inch over 8 feet) toward one side or a corner so water never ponds
        under the stone. <strong>3. Lay woven landscape fabric.</strong> Use
        woven, not the cheap spun stuff — woven fabric blocks weeds and
        keeps gravel from sinking into mud while still draining freely. Our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric under rock guide</a>{" "}
        covers the fabric types in detail. Overlap seams by 6 inches and run
        the fabric up the sides an inch or two. <strong>4. Set the
        edging.</strong> Steel landscape edging, pressure-treated timbers, or
        a soldier course of pavers — anything rigid that stands 1–2 inches
        proud of the finished gravel. This is what keeps 144 bags of pea
        gravel from migrating across your lawn. <strong>5. Spread and
        level.</strong> Dump, rake level to your 3 or 4 inch depth, and
        lightly hose it down — the water settles the stone into its final
        position and washes off quarry dust.
      </p>

      <h2 id="cleaning-and-refreshing">Cleaning and refreshing</h2>
      <p>
        Daily scooping is non-negotiable — waste left on gravel breaks down
        into the voids and becomes odor you can&apos;t rake out. Hose the
        run weekly to flush urine through the stone, and rake it smooth
        afterward so low spots don&apos;t collect. For persistent odor
        spots, use an <strong>enzyme-based pet cleaner</strong>, not bleach:
        enzymes break down the uric acid crystals that cause the smell,
        while bleach just perfumes over them and can irritate paws.{" "}
        <strong>Top-dress with fresh gravel once a year</strong> to replace
        what&apos;s been kicked out and what&apos;s compacted down — usually
        a quarter to a half yard for a 10&times;10. Plan a <strong>full
        refresh every 2–3 years</strong>: shovel out the old stone, check
        the fabric, and start clean.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Crushed angular stone.</strong> It&apos;s cheaper and locks
        tight, but your dog&apos;s paws pay for it daily — pea gravel is the
        paw-safe pick. <strong>Skipping the fabric.</strong> Within a year
        the gravel sinks into mud and weeds take over; woven fabric prevents
        both. <strong>No edging.</strong> Uncontained pea gravel migrates
        astonishingly far, astonishingly fast. <strong>Too deep.</strong>{" "}
        Past 4 inches the surface shifts underfoot and waste sinks out of
        scooping reach. <strong>Flat grade.</strong> Without that 1–2% slope,
        water ponds under the stone and the run smells like a swamp by
        August.
      </p>

      <Faq items={faqs} heading="Dog Run Gravel FAQ" />
    </GuideArticle>
  );
}
