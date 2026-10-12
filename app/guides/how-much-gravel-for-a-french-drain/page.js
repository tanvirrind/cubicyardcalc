import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Gravel Do I Need for a French Drain? (Per-Foot Chart)",
  description:
    "Gravel per linear foot of French drain: volume chart by trench size and pipe diameter, #57 stone guidance, fabric + slope install steps, and tons conversion.",
  keywords: [
    "how much gravel for a french drain",
    "gravel per foot of french drain",
    "best gravel size for french drain",
    "#57 stone french drain",
    "how much pea gravel for french drain",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-french-drain/" },
  openGraph: {
    title: "How Much Gravel Do I Need for a French Drain? | Cubic Yard Calculator",
    description:
      "Per-foot volume chart, the #57-stone-vs-pea-gravel call, fabric wrap and slope steps, and yards-to-tons for ordering.",
    url: "https://cubicyardcalculator.site/guides/how-much-gravel-for-a-french-drain/",
  },
};

const faqs = [
  {
    q: "How much gravel do I need per foot of French drain?",
    a: "About 0.75 cubic feet per foot for the standard 10×12 inch trench with 4-inch pipe — roughly 0.03 cubic yards. A 100-foot drain needs about 2.8 yards; order 3.",
  },
  {
    q: "What is the best gravel size for a French drain?",
    a: "Number 57 stone — angular, washed rock about 1/2 to 1 inch. The angular pieces lock together and leave large voids for water flow. Avoid rounded pea gravel: it migrates and packs tighter.",
  },
  {
    q: "Can I use pea gravel for a French drain?",
    a: "You can, but you shouldn't. Rounded pea gravel shifts over time and compacts more than angular stone, reducing flow. #57 crushed stone is the standard for a reason.",
  },
  {
    q: "How much gravel do I need for a 100 ft French drain?",
    a: "About 2.8 cubic yards of gravel for a 10×12 inch trench with 4-inch pipe — order 3 yards, or about 4.2 tons. A deeper 12×18 trench needs about 5.2 yards; order 6.",
  },
  {
    q: "Do I need landscape fabric in a French drain?",
    a: "Yes. Wrap the trench in non-woven geotextile fabric, burrito-style, before adding stone. It keeps silt out of the voids — without it, the drain silts up and stops working within a few years.",
  },
  {
    q: "How deep and wide should a French drain trench be?",
    a: "Residential drains are typically 10–12 inches wide and 12–18 inches deep, with the pipe 8–12 inches below grade. Go 12×24 inches for heavy flows or long runs with 6-inch pipe.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Gravel Do I Need for a French Drain?"
      description="The per-foot volume chart by trench size, the #57-stone-vs-pea-gravel call, fabric wrap and slope steps, and yards-to-tons for ordering."
      slug="how-much-gravel-for-a-french-drain"
      calculatorHref="/calculators/gravel-calculator/"
      calculatorLabel="Try the gravel calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        The standard residential French drain — a <strong>10&times;12 inch
        trench with 4-inch pipe</strong> — takes about{" "}
        <strong>0.75 cubic feet of gravel per linear foot</strong>. Multiply
        by your run length and divide by 27: a 100-foot drain needs about{" "}
        <strong>2.8 cubic yards</strong> (order 3). The formula: trench
        cross-section in square feet × length in feet, minus the pipe&apos;s
        volume, divided by 27.
      </p>

      <h2>Gravel per linear foot, by trench size</h2>
      <p>
        Cubic feet per foot is the number to remember, because every drain
        length scales from it. The pipe&apos;s own volume is subtracted
        (a 4-inch pipe displaces about 0.09 cu ft per foot; a 6-inch pipe
        about 0.20):
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Trench (W×D)</th><th>Pipe</th><th>Cu ft per foot</th><th>Yards per 25 ft</th><th>Yards per 50 ft</th><th>Yards per 100 ft</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">8&Prime;&times;12&Prime;</td><td className="num">4&Prime;</td><td className="num">0.58</td><td className="num">0.54</td><td className="num">1.07</td><td className="num">2.15</td></tr>
          <tr><td className="num">10&Prime;&times;12&Prime;</td><td className="num">4&Prime;</td><td className="num">0.75</td><td className="num">0.69</td><td className="num">1.38</td><td className="num">2.76</td></tr>
          <tr><td className="num">12&Prime;&times;18&Prime;</td><td className="num">4&Prime;</td><td className="num">1.41</td><td className="num">1.31</td><td className="num">2.62</td><td className="num">5.23</td></tr>
          <tr><td className="num">12&Prime;&times;24&Prime;</td><td className="num">6&Prime;</td><td className="num">1.80</td><td className="num">1.67</td><td className="num">3.34</td><td className="num">6.68</td></tr>
        </tbody>
      </table>
      <p>
        Suppliers sell whole and half yards, so round up — and add about
        10% overage, because hand-dug trenches are never perfectly uniform.
        If your run lengths don&apos;t match the columns, our{" "}
        <a href="/calculators/gravel-calculator/">gravel calculator</a>{" "}
        handles any trench size.
      </p>

      <h2>Worked example: an 80-foot drain</h2>
      <p>
        An 80-foot run with a 12&times;18 inch trench and 4-inch pipe: 1.41
        cu ft per foot × 80 = <strong>113 cubic feet</strong> — that&apos;s
        4.19 cubic yards. Order <strong>4.5 to 5 yards</strong> (suppliers
        round to half yards, and the overage covers trench irregularities).
        In tons — how bulk stone is often priced — that&apos;s 4.5 × 1.4 ={" "}
        <strong>6.3 tons</strong>.
      </p>

      <h2>Choose the right stone: #57, not pea gravel</h2>
      <p>
        The standard is <strong>#57 stone</strong>: angular, washed crushed
        rock roughly ½ to 1 inch. The angular faces lock together while
        leaving big voids for water to move through — that&apos;s the whole
        point of the drain. The common mistake is <strong>rounded pea
        gravel</strong>: the round stones migrate, pack tighter over time,
        and shed fines that clog the system. Washed matters too — unwashed
        &ldquo;crusher run&rdquo; carries dust that can seal the voids. If
        your supplier asks what you need, &ldquo;clean #57&rdquo; is the
        magic phrase.
      </p>

      <h2>Yards to tons for ordering</h2>
      <p>
        Bulk stone is often priced per ton: gravel weighs about 2,800 lb per
        cubic yard, so <strong>multiply yards by 1.4</strong>. Quick
        conversions for the standard 10&times;12 inch trench with 4-inch pipe:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Run length</th><th>Cubic yards needed</th><th>Order this</th><th>Tons to pay for</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">25 ft</td><td className="num">0.7</td><td className="num">1 yd</td><td className="num">1.4</td></tr>
          <tr><td className="num">50 ft</td><td className="num">1.4</td><td className="num">1.5 yd</td><td className="num">2.1</td></tr>
          <tr><td className="num">100 ft</td><td className="num">2.8</td><td className="num">3 yd</td><td className="num">4.2</td></tr>
          <tr><td className="num">150 ft</td><td className="num">4.1</td><td className="num">4.5 yd</td><td className="num">6.3</td></tr>
          <tr><td className="num">200 ft</td><td className="num">5.5</td><td className="num">6 yd</td><td className="num">8.4</td></tr>
        </tbody>
      </table>

      <h2>Install: fabric wrap and 1% slope</h2>
      <p>
        Quantity is only half the job — a drain installed wrong stops
        working. <strong>Line the trench with non-woven geotextile fabric
        before any stone goes in</strong>, and wrap it over the top
        burrito-style after backfilling. The fabric keeps silt from
        infiltrating the voids; skip it and the drain silts up in a few
        years. (We cover fabric selection in detail in our{" "}
        <a href="/guides/landscape-fabric-under-rock/">landscape fabric under rock guide</a>.)
        Keep a <strong>1% slope</strong> — about 1 inch of drop per 8 feet —
        toward the outlet the entire run, lay the perforated pipe{" "}
        <strong>holes-down</strong>, bed it on 2 inches of stone, cover it
        with stone, then wrap the fabric closed and top with soil or sod.
      </p>

      <h2>Where does the water go?</h2>
      <p>
        A French drain is only as good as its outlet. The three standard
        endings: <strong>daylight</strong> — the pipe exits downhill above
        grade (cheapest and most reliable, if the slope allows); a{" "}
        <strong>dry well</strong> — a buried pit of stone that the pipe
        drains into when there&apos;s nowhere downhill to go; or a{" "}
        <strong>sump pump basin</strong> for flat sites. The outlet does not
        change your gravel quantity much — budget an extra half yard of #57
        for a dry well&apos;s surround — but decide it <strong>before</strong>{" "}
        you dig, because a drain with no exit just moves the puddle.
      </p>

      <h2>Call 811 before you dig</h2>
      <p>
        This costs nothing and avoids cutting a gas or fiber line. In most
        US states you call 811 a few business days before digging and
        utilities mark their buried lines for free. Some municipalities
        require a permit for drainage work that alters runoff, especially
        near property lines — a five-minute call to your city&apos;s permits
        desk settles it.
      </p>

      <h2>How much fabric do you need?</h2>
      <p>
        Size the fabric from the trench&apos;s perimeter. A 12&times;18 inch
        trench has about 3.5 feet of perimeter (12 + 18 + 18 inches, plus a
        few inches of overlap at the top) — so a 100-foot run needs roughly{" "}
        <strong>350 square feet of fabric, or one 4&times;100-foot
        roll</strong> with overlap to spare. Buy non-woven geotextile rated
        for drainage (cheap woven landscape weed barrier can clog);
        4-ounce non-woven is the common residential choice. Overlap sections
        by 6–12 inches rather than cutting separate pieces for each side —
        the burrito wrap needs to be continuous to keep silt out.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Rounded stone.</strong> Pea gravel migrates and compacts —
        #57 angular is the standard. <strong>Skipping fabric.</strong> Silt
        kills drains. <strong>Pipe holes up.</strong> Holes go down so water
        rises into them and exits. <strong>Flat runs.</strong> Water
        doesn&apos;t move without slope — check it with a level as you go.{" "}
        <strong>Ordering exact yards.</strong> Hand-dug trenches wander; 10%
        overage is cheaper than a second delivery fee.
      </p>

      <Faq items={faqs} heading="French Drain Gravel FAQ" />
    </GuideArticle>
  );
}
