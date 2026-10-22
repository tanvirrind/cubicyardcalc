import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Rock Do I Need for a Dry Creek Bed? (Sizing & Quantity Guide)",
  description:
    "Dry creek bed rock quantities: channel cross-section math, rock size by creek width, layering (base gravel + river rock + boulders), fabric notes, and per-ton ordering tips. Free rock calculator.",
  keywords: [
    "how much rock for a dry creek bed",
    "dry creek bed rock calculator",
    "what size rock for dry creek bed",
    "how many tons of rock for creek bed",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-rock-for-a-dry-creek-bed/" },
  openGraph: {
    title: "How Much Rock Do I Need for a Dry Creek Bed? | Cubic Yard Calculator",
    description:
      "Channel math, rock sizes, and layering — figure rock in tons before you call the quarry. Free landscape rock calculator.",
    url: "https://cubicyardcalculator.site/guides/how-much-rock-for-a-dry-creek-bed/",
  },
};

const faqs = [
  {
    q: "How much rock do I need for a dry creek bed?",
    a: "Multiply width × depth × length in feet, divide by 27 for cubic yards, then multiply by 2.25 for tons. A 3-ft-wide, 1-ft-deep, 30-ft channel is 90 / 27 = 3.33 yards, about 7.5 tons of rock.",
  },
  {
    q: "What size rock is best for a dry creek bed?",
    a: "Size follows creek width: 1–2 inch rock for beds under 2 ft wide, 2–4 inch river rock for 2–3 ft, 3–6 inch rock with boulders for 3–5 ft, and 4–8 inch cobble plus boulders for wider creeks. Rock that's too small washes out; too large looks out of scale.",
  },
  {
    q: "How deep should a dry creek bed be?",
    a: "9–12 inches of channel depth for most landscape creeks, up to 18 inches where the creek must carry real stormwater. Keep the top of the rock layer a few inches below the surrounding grade so runoff flows in.",
  },
  {
    q: "Do I need landscape fabric under a dry creek bed?",
    a: "Yes. Fabric stops the rock from sinking into the soil and keeps mud from working up into the stone between rains. Our landscape fabric under rock guide covers which weight to use and how to stake it on a slope.",
  },
  {
    q: "How do I calculate tons of rock from cubic yards?",
    a: "River rock runs about 4,500 lbs per cubic yard, so tons = yards × 2.25. A 4.44-yard creek bed needs 10 tons. Verify with your quarry — crushed stone and specialty rock vary a few hundred pounds per yard.",
  },
  {
    q: "Is it cheaper to buy rock by the ton or the yard?",
    a: "Quarries usually price bulk stone by the ton, landscapers often by the yard — they're the same material through the 2.25 tons-per-yard conversion. Compare the all-in price including delivery, and ask about minimums: many yards require 1–3 tons minimum.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Rock Do I Need for a Dry Creek Bed?"
      description="Channel cross-section math, rock sizing by creek width, the base-gravel → river-rock → boulder layering order, fabric and slope notes, and per-ton ordering tips."
      slug="how-much-rock-for-a-dry-creek-bed"
      calculatorHref="/calculators/landscape-rock-calculator/"
      calculatorLabel="Try the landscape rock calculator"
      updated="2026-10"
      toc={[
        { id: "the-short-answer", label: "The short answer" },
        { id: "the-channel-cross-section-method", label: "The channel cross-section method" },
        { id: "what-size-rock-match-it-to-the-creek-width", label: "What size rock: match it to the creek width" },
        { id: "layering-base-gravel-river-rock-boulders", label: "Layering: base gravel, river rock, boulders" },
        { id: "landscape-fabric-under-the-rock", label: "Landscape fabric under the rock" },
        { id: "slope-the-creek-must-actually-drain", label: "Slope: the creek must actually drain" },
        { id: "cost-per-ton-ordering-tips", label: "Cost-per-ton ordering tips" },
        { id: "common-mistakes", label: "Common mistakes" },
      ]}
      references={[
        "Material densities: published bulk-material density tables cross-checked against supplier data (see /data-sources/).",
        "Site's published density variants (lib/calc.js)",
        "Pricing: published contractor cost guides and supplier listings, checked October 2026.",
      ]}
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2 id="the-short-answer">The short answer</h2>
      <p>
        <strong>Cubic yards = (width &times; depth &times; length in ft) / 27</strong>,{" "}
        then <strong>tons = yards &times; 2.25</strong> (rock runs 4,500 lbs per
        yard). The classic 3-ft-wide, 1-ft-deep, 30-ft channel: 90 cu ft /
        27 = <strong>3.33 cubic yards ≈ 7.5 tons</strong>. Split the order:
        roughly a quarter as ¾-inch base gravel for the bedding layer and
        three quarters as 2–4 inch river rock, plus accent boulders priced
        separately.
      </p>

      <h2 id="the-channel-cross-section-method">The channel cross-section method</h2>
      <p>
        A dry creek bed is a shallow channel, so its volume is the channel
        cross-section (width &times; depth) times its length — the same rectangle
        formula you&apos;d use for a trench. Measure width bank to bank at
        the top, depth from the bank line down to the channel bottom, and
        length along the centerline, following curves with the tape on the
        ground. Depth is the <em>finished</em> depth including the base
        layer — dig the channel a few inches deeper than your target rock
        depth to make room for bedding gravel.
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Channel (width &times; depth &times; length)</th><th>Cubic yards</th><th>Tons (&times; 2.25)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">2 &times; 0.75 &times; 20 ft</td><td className="num">1.11</td><td className="num">2.5</td></tr>
          <tr><td className="num">2 &times; 0.75 &times; 30 ft</td><td className="num">1.67</td><td className="num">3.75</td></tr>
          <tr><td className="num">3 &times; 1 &times; 20 ft</td><td className="num">2.22</td><td className="num">5.0</td></tr>
          <tr><td className="num">3 &times; 1 &times; 30 ft</td><td className="num">3.33</td><td className="num">7.5</td></tr>
          <tr><td className="num">3 &times; 1 &times; 40 ft</td><td className="num">4.44</td><td className="num">10.0</td></tr>
          <tr><td className="num">4 &times; 1 &times; 30 ft</td><td className="num">4.44</td><td className="num">10.0</td></tr>
          <tr><td className="num">4 &times; 1.5 &times; 50 ft</td><td className="num">11.11</td><td className="num">25.0</td></tr>
        </tbody>
      </table>
      <p>
        Verify the reference row: 3 &times; 1 &times; 30 = 90 cu ft / 27 = 3.33 yards;
        3.33 &times; 2.25 = 7.5 tons. And the big one: 4 &times; 1.5 &times; 50 = 300 cu ft /
        27 = 11.11 yards; 11.11 &times; 2.25 = 25 tons — that&apos;s a dump truck
        of stone, worth planning access for. For creeks that curve sharply,
        break the length into straight runs and add them up — the same
        segment trick from our <a href="/guides/how-to-measure-irregular-areas/">irregular-area
        measuring guide</a>.
      </p>

      <h2 id="what-size-rock-match-it-to-the-creek-width">What size rock: match it to the creek width</h2>
      <p>
        Scale is the whole aesthetic — and the engineering. Rock too small
        migrates downstream in the first storm; rock too large looks like a
        rock pile instead of a creek. Use this width-to-size ladder:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Creek width</th><th>Main rock size</th><th>Accent boulders</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">Under 2 ft</td><td>1–2 inch river rock</td><td>6–12 inch, a few</td></tr>
          <tr><td className="num">2–3 ft</td><td>2–4 inch river rock</td><td>12–18 inch</td></tr>
          <tr><td className="num">3–5 ft</td><td>3–6 inch river rock / cobble</td><td>18–24 inch</td></tr>
          <tr><td className="num">Over 5 ft</td><td>4–8 inch cobble</td><td>24 inch+, boulder groupings</td></tr>
        </tbody>
      </table>
      <p>
        The rule of thumb: the largest stones should be roughly{" "}
        <strong>one-third the creek width</strong>. On a 3-foot creek, 12-inch
        boulders read right; on a 2-foot creek they swallow the channel. Our{" "}
        <a href="/guides/gravel-size-chart/">gravel size chart</a> shows
        what each named size actually looks like if you&apos;re ordering
        from a quarry list you don&apos;t recognize.
      </p>

      <h2 id="layering-base-gravel-river-rock-boulders">Layering: base gravel, river rock, boulders</h2>
      <p>
        A creek bed is three layers, ordered and installed bottom-up:
      </p>
      <p>
        <strong>1. Base gravel (¾-inch crushed), 2–3 inches.</strong> This
        bedding layer locks together, holds the fabric down, and gives the
        river rock something level to sit on. Order roughly <strong>one
        quarter</strong> of the channel volume as base gravel.{" "}
        <strong>2. River rock (per the width table), 3–4 inches visible.</strong>{" "}
        This is the creek&apos;s face — about <strong>three quarters</strong>{" "}
        of the volume. Rounded rock reads as water-worn; angular rock reads
        as a dry gulch. <strong>3. Accent boulders, placed — not
        poured.</strong> Boulders go on edges and in groupings of odd
        numbers, partially buried so they look settled. They&apos;re priced
        per piece or per ton separately from the bulk rock.
      </p>
      <p>
        Worked layering on the 3.33-yard reference channel: order{" "}
        <strong>~1 yard of ¾-inch base gravel</strong> and{" "}
        <strong>~2.5 yards of 2–4 inch river rock</strong>, then 5–7 boulders
        in the 12–18 inch range placed along the banks. Round the gravel
        up — you&apos;ll use the extra at the channel edges and under the
        boulders.
      </p>

      <h2 id="landscape-fabric-under-the-rock">Landscape fabric under the rock</h2>
      <p>
        Fabric is not optional here: without it, the base gravel sinks into
        the soil within a season and mud pumps up through the rock every
        rain, turning the creek bed into a muddy stripe. Use a{" "}
        <strong>woven geotextile</strong> (not thin weed-barrier fabric,
        which shreds under stone), overlap seams 6–12 inches, and pin it
        with landscape staples every 2–3 feet — more on slopes. Our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric
        under rock guide</a> covers weights, staking, and the slope pins
        that keep fabric from sliding.
      </p>

      <h2 id="slope-the-creek-must-actually-drain">Slope: the creek must actually drain</h2>
      <p>
        A dry creek bed is drainage infrastructure pretending to be
        landscaping — give it <strong>at least 1–2% fall</strong> (1–2 feet
        of drop per 100 feet of run) along its whole length. Check with a
        string line and level before the rock goes in: any flat or reverse
        spot becomes a mosquito pond after rain. At the downhill end, give
        the water somewhere to go — a storm drain, a swale, or a rain
        garden. On steeper pitches (over ~5%), the rock creeps downhill
        over time; larger stone and boulder check-dams every 10–15 feet
        hold it in place.
      </p>

      <h2 id="cost-per-ton-ordering-tips">Cost-per-ton ordering tips</h2>
      <p>
        Bulk river rock typically runs <strong>$35–75 per ton</strong> at the
        quarry, with delivery of $50–150 per load depending on distance.
        The 7.5-ton reference channel is roughly $300–650 in stone before
        delivery; boulders add $50–200+ each depending on size. Tips that
        save real money: <strong>call the quarry, not just the landscaper</strong>{" "}
        — landscaper markup on stone is often 30–50%.{" "}
        <strong>Ask about minimums</strong> — many yards require 1–3 tons
        minimum, which makes tiny creeks expensive per ton; combine with a
        neighbor&apos;s order if you can. <strong>Compare tons to
        yards</strong> using the 2.25 factor so you&apos;re comparing the
        same material. And <strong>order one product</strong> where possible:
        two half-tons of different stone cost more per ton than one full ton.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        <strong>Rock that&apos;s too small for the slope.</strong> 1-inch
        rock in a drainage creek ends up in the storm drain.{" "}
        <strong>No fabric.</strong> The mud-stripe creek within a year.{" "}
        <strong>Flat channel.</strong> Ponds, mosquitoes, unhappy spouse.{" "}
        <strong>Boulders sitting on top.</strong> Unburied boulders look like
        they were dropped from a truck — bury a third of each one.{" "}
        <strong>Ordering by the yard from a per-ton quarry</strong> without
        converting — always run the 2.25 factor before comparing quotes.
      </p>

      <Faq items={faqs} heading="Dry Creek Bed FAQ" />
    </GuideArticle>
  );
}
