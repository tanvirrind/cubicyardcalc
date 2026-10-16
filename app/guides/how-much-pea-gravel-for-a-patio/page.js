import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Pea Gravel for a Patio? (Loose-Gravel Project Tables)",
  description:
    "Pea gravel patio math: 4-inch crushed base plus 2.5-inch loose top, size-by-size tables, 20% settlement overage, bag-vs-bulk crossover, edging and fabric.",
  keywords: [
    "how much pea gravel for a patio",
    "pea gravel patio calculator",
    "pea gravel patio depth",
    "pea gravel vs pavers patio",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-pea-gravel-for-a-patio/" },
  openGraph: {
    title: "How Much Pea Gravel for a Patio? | Cubic Yard Calculator",
    description:
      "Two layers, exact volumes: the crushed base and the loose pea gravel top, by patio size, with ordering overage and bag-vs-bulk math.",
    url: "https://cubicyardcalculator.site/guides/how-much-pea-gravel-for-a-patio/",
  },
};

const faqs = [
  {
    q: "How deep should pea gravel be on a patio?",
    a: "Plan on 2 to 2.5 inches of loose pea gravel over a 4-inch compacted base of crusher run. Go deeper than 2.5 inches and patio furniture legs start sinking and wobbling — the loose layer has to stay thin enough to walk on comfortably.",
  },
  {
    q: "Do I need a base layer under a pea gravel patio?",
    a: "Yes. Pea gravel laid straight on dirt sinks, migrates, and turns to mud after rain. A 4-inch layer of compacted crusher run (dense-grade aggregate with fines) gives the loose top something firm to sit on and keeps the stone from disappearing into soft soil.",
  },
  {
    q: "Pea gravel patio vs pavers — which is better?",
    a: "Pea gravel wins on cost and drainage and goes in fast — roughly a third of the material cost of a paver patio, no cutting or leveling courses. Pavers win on stability, maintenance, and resale value. If you want a hardscape surface, see our paver base sand and gravel guide; this guide is strictly for loose-gravel patios.",
  },
  {
    q: "How many bags of pea gravel do I need for a 10x10 patio?",
    a: "A 10×10 patio needs about 0.77 cubic yards of loose pea gravel at 2.5 inches — roughly 42 bags at 0.5 cubic feet per bag if you buy it bagged, before overage. With the 20% settlement buffer, plan on about 50–55 bags. Bulk is almost always cheaper at this size and up.",
  },
  {
    q: "Does a pea gravel patio need edging?",
    a: "Absolutely — edging is the one non-negotiable detail. Without a rigid edge, the loose top layer migrates onto the lawn and the edges crumble within a season. Steel, aluminum, or heavy plastic paver edging pinned with 8–10 inch landscape spikes holds the patio's shape.",
  },
  {
    q: "Will a pea gravel patio wash away or shift around?",
    a: "Some. Loose stone displaces under feet, chair legs, and running dogs, and heavy rain can push it if the grade is wrong. Grading the base to slope 1 inch per 8 feet away from the house, keeping the top layer at 2–2.5 inches, and raking it back a few times a season handles nearly all of it.",
  },
  {
    q: "Do I need landscape fabric under pea gravel?",
    a: "Yes — a quality landscape fabric between the soil and the crushed base keeps soil and weeds from migrating up into the stone and keeps the stone from sinking into the soil. Skip it and you'll be topping up gravel every year.",
  },
  {
    q: "Can I put pea gravel directly on dirt?",
    a: "You can, but you shouldn't. It sinks into the soil, weeds punch through within weeks, and mud mixes in after rain, ruining the clean look. The fabric plus the 4-inch compacted base is what makes a loose-gravel patio last years instead of months.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Pea Gravel for a Patio?"
      description="A loose-gravel patio is really two projects: a compacted crushed-stone base and a thin pea gravel top. This guide sizes both, with settlement overage and bag-vs-bulk math."
      slug="how-much-pea-gravel-for-a-patio"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>Not pavers — the loose-gravel distinction</h2>
      <p>
        Everything here is for <strong>loose pea gravel patios</strong>: stone
        poured over a compacted base, raked flat, and held in by edging. The
        quantities, depths, and base spec are completely different from a{" "}
        <strong>paver patio</strong>, where the surface locks together and the
        bedding is a thin screeded layer of concrete sand. If you&apos;re
        building with pavers, our{" "}
        <a href="/guides/paver-base-sand-gravel-guide/">paver base sand and gravel guide</a>{" "}
        has the right math for that project — what follows applies only to
        loose gravel.
      </p>

      <h2>The short answer</h2>
      <p>
        A loose-gravel patio has <strong>two layers</strong>: a{" "}
        <strong>4-inch compacted base of crusher run</strong> and a{" "}
        <strong>2 to 2.5-inch loose top of pea gravel</strong> — never deeper
        than 2.5 inches, or furniture sinks and wobbles. For the classic{" "}
        <strong>12×14-foot patio</strong> (168 sq ft), that&apos;s about{" "}
        <strong>2.07 cubic yards of crushed base</strong> plus{" "}
        <strong>1.3 cubic yards of pea gravel</strong>. Order about{" "}
        <strong>2.5 yards of base</strong> and{" "}
        <strong>1.75 yards of pea gravel</strong> to cover compaction and the
        15–25% settlement the loose layer loses as it beds in.
      </p>

      <h2>The two layers, and why you need both</h2>
      <p>
        <strong>Layer 1 — the crushed base (4 inches, compacted).</strong>{" "}
        Dense-grade crusher run or &ldquo;road base&rdquo; — crushed stone
        with fines that packs into a near-concrete slab under a plate
        compactor. This is what keeps the patio from turning into a muddy,
        sunken mess. It also carries the slope that drains water off the
        patio: grade the base to fall <strong>1 inch per 8 feet</strong> away
        from the house.
      </p>
      <p>
        <strong>Layer 2 — the pea gravel top (2–2.5 inches, loose).</strong>{" "}
        Rounded ⅜-inch pea gravel, poured on and raked level. The
        roundedness is a feature here — smooth, comfortable to walk on and
        rake back into place. Do <strong>not</strong> compact the top layer,
        and do not exceed 2.5 inches: deeper loose stone behaves like a
        beach, swallowing chair legs and feeling unstable underfoot.
      </p>
      <p>
        <strong>Under everything:</strong> landscape fabric on the bare soil
        before the base goes down. It separates the stone from the soil so
        the base doesn&apos;t sink and weeds don&apos;t migrate up. Our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric under rock guide</a>{" "}
        covers fabric types — a spunbond or woven contractor-grade fabric is
        right for this job; thin big-box weed barrier tears under a
        compactor.
      </p>

      <h2>The math: one formula, two depths</h2>
      <p>
        Cubic yards = length × width × (depth in feet) ÷ 27. Run it twice —
        once at 4 inches (⅓ foot) for the base, once at 2.5 inches (0.2083
        feet) for the loose top:
      </p>
      <p>
        <strong>Base:</strong> area in sq ft × (4 ÷ 12) ÷ 27
        <br />
        <strong>Loose top:</strong> area in sq ft × (2.5 ÷ 12) ÷ 27
      </p>
      <p>
        The 12×14 worked example: base = 168 × 0.3333 ÷ 27 = 56 ÷ 27 ={" "}
        <strong>2.07 cubic yards</strong>; loose top = 168 × 0.2083 ÷ 27 = 35
        ÷ 27 = <strong>1.30 cubic yards</strong>. Add overage and round to
        what the yard sells — bulk is sold by the full or half yard.
      </p>

      <h2>Crushed base table (4 inches, compacted)</h2>
      <p>
        Base volume is the compacted target; the &ldquo;order&rdquo; column
        adds 10% for compaction loss (4 inches of loose stone tamps down to
        less) and rounds to half yards. Tons use the gravel factor of 1.4
        tons per yard:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Patio (L×W)</th><th>Area</th><th>Base 4&Prime; (yd&sup3;)</th><th>Order (+10%)</th><th>Base tons</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">10 × 10 ft</td><td className="num">100 sq ft</td><td className="num">1.23</td><td className="num">1.5 yd</td><td className="num">2.1</td></tr>
          <tr><td className="num">10 × 12 ft</td><td className="num">120 sq ft</td><td className="num">1.48</td><td className="num">1.5 yd</td><td className="num">2.1</td></tr>
          <tr><td className="num">12 × 14 ft</td><td className="num">168 sq ft</td><td className="num">2.07</td><td className="num">2.5 yd</td><td className="num">3.5</td></tr>
          <tr><td className="num">12 × 16 ft</td><td className="num">192 sq ft</td><td className="num">2.37</td><td className="num">2.5 yd</td><td className="num">3.5</td></tr>
          <tr><td className="num">14 × 16 ft</td><td className="num">224 sq ft</td><td className="num">2.77</td><td className="num">3.0 yd</td><td className="num">4.2</td></tr>
          <tr><td className="num">16 × 20 ft</td><td className="num">320 sq ft</td><td className="num">3.95</td><td className="num">4.5 yd</td><td className="num">6.3</td></tr>
        </tbody>
      </table>

      <h2>Pea gravel top table (2.5 inches, loose)</h2>
      <p>
        Loose pea gravel settles <strong>15–25% in the first year</strong> as
        it beds into the base and foot traffic shakes it down — that&apos;s
        normal, not an error in your math. The &ldquo;order&rdquo; column
        builds in a 20% settlement buffer on top of the loose depth, rounded
        to half yards:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Patio (L×W)</th><th>Loose 2.5&Prime; (yd&sup3;)</th><th>Order (+20%)</th><th>Top tons</th><th>≈ 0.5-ft&sup3; bags</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">10 × 10 ft</td><td className="num">0.77</td><td className="num">1.0 yd</td><td className="num">1.4</td><td className="num">54</td></tr>
          <tr><td className="num">10 × 12 ft</td><td className="num">0.93</td><td className="num">1.25 yd</td><td className="num">1.75</td><td className="num">68</td></tr>
          <tr><td className="num">12 × 14 ft</td><td className="num">1.30</td><td className="num">1.75 yd</td><td className="num">2.45</td><td className="num">95</td></tr>
          <tr><td className="num">12 × 16 ft</td><td className="num">1.48</td><td className="num">2.0 yd</td><td className="num">2.8</td><td className="num">108</td></tr>
          <tr><td className="num">14 × 16 ft</td><td className="num">1.73</td><td className="num">2.25 yd</td><td className="num">3.15</td><td className="num">122</td></tr>
          <tr><td className="num">16 × 20 ft</td><td className="num">2.47</td><td className="num">3.0 yd</td><td className="num">4.2</td><td className="num">162</td></tr>
        </tbody>
      </table>
      <p>
        For a patio size not listed, our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        handles either layer — set the depth to 4 inches for the base or 2.5
        inches for the top.
      </p>

      <h2>When bags beat bulk</h2>
      <p>
        Big-box pea gravel comes in 0.5-cubic-foot bags, so{" "}
        <strong>bags per yard = 27 ÷ 0.5 = 54</strong>. The crossover is pure
        price math: bulk pea gravel runs roughly $60–$90 per cubic yard plus
        a $50–$100 delivery fee, while a bag at $5.50 implies{" "}
        <strong>54 × $5.50 ≈ $300 per yard-equivalent</strong>. Bags almost
        never win once you need a full yard — the bulk price is a quarter of
        the bagged price, and the delivery fee is spread across the whole
        load.
      </p>
      <p>
        The exception: <strong>tiny top-ups or the 10×10-and-under patios</strong>{" "}
        where you need under half a yard and would otherwise pay a $75
        delivery fee to dump a half yard of stone. And bags win on logistics
        — if your yard has no dump-truck access, hauling 50+ bags yourself
        may beat paying a stone-slinger surcharge. Rule of thumb:{" "}
        <strong>under ~0.75 yards, price both; at a yard or more, bulk wins
        essentially every time.</strong>
      </p>

      <h2>Edging is not optional</h2>
      <p>
        A loose-gravel patio without edging is a temporary gravel pile.
        Install a rigid edge <strong>before</strong> the base goes down:{" "}
        <strong>steel or aluminum paver edging</strong> (the longest-lasting,
        cleanest look), or heavy-duty <strong>plastic landscape edging</strong>{" "}
        pinned with 8–10 inch landscape spikes every 12–16 inches. Set the
        top of the edging <strong>flush with, or ¼ inch below</strong>, the
        finished gravel surface — high enough to hold the stone in, low
        enough to mow over and walk across. The classic failure is edging
        that&apos;s too short or pinned into the base instead of the soil:
        it heaves, leans, and the gravel migrates out within a season.
      </p>

      <h2>Stone size and color options</h2>
      <p>
        <strong>Size:</strong> ⅜-inch pea gravel is the patio standard —
        smooth, comfortable underfoot, and fine enough to rake level easily.
        Larger ¾-inch pea gravel reads bolder but rolls underfoot and is
        harder to keep level for furniture. Crushed stone as a top layer
        packs firmer but looks harsher; for the full comparison see our{" "}
        <a href="/guides/crushed-stone-vs-pea-gravel/">crushed stone vs pea gravel guide</a>{" "}
        and our{" "}
        <a href="/guides/decomposed-granite-vs-gravel/">decomposed granite vs gravel guide</a>{" "}
        if you&apos;re weighing alternatives to pea gravel entirely.
      </p>
      <p>
        <strong>Color:</strong> natural tan/cream pea gravel is cheapest and
        most available; rainbow/pebble mix adds contrast for a modest
        upcharge; white marble chip is the premium look — bright and crisp,
        but typically 1.5–2× the price and it shows leaves and dirt more.
        Color doesn&apos;t change the quantity math, but lighter stone gets
        noticeably hotter underfoot in summer — worth knowing if the patio
        is a barefoot zone.
      </p>

      <h2>Installation sequence that actually works</h2>
      <p>
        <strong>1.</strong> Mark the outline, strip sod and topsoil 6 inches
        deep (base + top + edging depth). <strong>2.</strong> Grade the soil
        for the 1-in-8-feet slope away from the house. <strong>3.</strong>{" "}
        Lay landscape fabric, overlapping seams 6 inches.{" "}
        <strong>4.</strong> Pin the edging at finished height.{" "}
        <strong>5.</strong> Place the crusher run in 2-inch lifts, compacting
        each lift with a plate compactor (rent one — hand tamping a whole
        patio is miserable and uneven). <strong>6.</strong> Spread the pea
        gravel, rake level, and resist the urge to compact it.{" "}
        <strong>7.</strong> Hose the top lightly to settle it into the base
        and wash off dust.
      </p>
      <p>
        For the base layer itself, our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        gives quick volumes for the crusher run; if you&apos;re also
        considering decorative rock elsewhere in the yard, the{" "}
        <a href="/calculators/landscape-rock-calculator/">landscape rock calculator</a>{" "}
        handles the heavier stone classes.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Skipping the base.</strong> Pea gravel straight on dirt
        disappears into mud — the 4-inch crushed base is the patio.{" "}
        <strong>Going deeper than 2.5 inches.</strong> Comfortable gravel
        patios are thin; deep gravel is a sandbox. <strong>No edging.</strong>{" "}
        The #1 cause of &ldquo;my patio looked great in May&rdquo; — the
        stone migrates within a season. <strong>Cheap fabric.</strong> Thin
        weed barrier shreds under the compactor and lets soil rise through
        the stone. <strong>Ordering exact yards.</strong> Between compaction,
        settlement, and spillage, exact yards guarantee a shortfall — the
        second delivery costs more than the extra half yard would have.
      </p>

      <Faq items={faqs} heading="Pea Gravel Patio FAQ" />
    </GuideArticle>
  );
}
