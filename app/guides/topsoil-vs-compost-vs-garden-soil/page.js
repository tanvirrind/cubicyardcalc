import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Topsoil vs Compost vs Garden Soil: Which to Buy (and How Much)",
  description:
    "Topsoil vs compost vs garden soil — decide by project: raised beds, new beds, topdressing, leveling. Quantities in cubic yards and bags, cost-per-yard comparison, and bagged label math.",
  keywords: [
    "topsoil vs compost vs garden soil",
    "compost vs topsoil",
    "garden soil vs topsoil",
    "what soil to buy for raised beds",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/topsoil-vs-compost-vs-garden-soil/" },
  openGraph: {
    title: "Topsoil vs Compost vs Garden Soil: Which to Buy (and How Much) | Cubic Yard Calculator",
    description:
      "Start from your project, not the bag label: which material, how many yards, and the true cost per yard. Free topsoil calculator.",
    url: "https://cubicyardcalculator.site/guides/topsoil-vs-compost-vs-garden-soil/",
  },
};

const faqs = [
  {
    q: "What is the difference between topsoil, compost, and garden soil?",
    a: "Topsoil is screened native soil — the mineral base plants grow in. Compost is decomposed organic matter — a nutrient-rich amendment, not a standalone growing medium. Garden soil is a bagged blend of the two (plus fillers) sold for direct planting. For raised beds, most gardeners use a 50–60% topsoil / 40–50% compost mix.",
  },
  {
    q: "Can I use compost instead of topsoil?",
    a: "As an amendment, yes — mix it into topsoil or native soil. As the whole bed, no: pure compost holds too much water, breaks down and settles 20–30% in a season, and can burn young plants with excess nutrients. Keep compost to roughly half the mix by volume.",
  },
  {
    q: "How much soil do I need for a 4×8 raised bed?",
    a: "4 × 8 × 1 ft = 32 cu ft = 1.19 cubic yards. That's about 22 bags of 1.5 cu ft soil, or 16 bags of 2 cu ft. For a 50/50 mix: ~0.6 yards of topsoil plus ~0.6 yards of compost.",
  },
  {
    q: "Is garden soil the same as topsoil?",
    a: "No. Garden soil is a manufactured blend — topsoil plus compost, peat or bark fines, sometimes fertilizer — formulated for direct planting in beds. Topsoil is the plain screened-soil ingredient. Garden soil is convenient in bags; topsoil is cheaper in bulk.",
  },
  {
    q: "Should I use topsoil or fill dirt under a raised bed or new lawn?",
    a: "Topsoil for anything roots touch — the top 4–6 inches at minimum. Fill dirt is for bulk depth underneath: it's cheaper and more stable but grows nothing. Our topsoil vs fill dirt guide covers that pairing in detail.",
  },
  {
    q: "How much does a cubic yard of topsoil or compost weigh?",
    a: "Topsoil runs about 2,400 lbs per yard (1.2 tons), so it arrives by truck, not car. Compost is much lighter — typically 800–1,200 lbs per yard — which is why bagged compost is easy to haul. Garden soil blends land between the two.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Topsoil vs Compost vs Garden Soil: Which to Buy (and How Much)"
      description="Start from your project, not the bag label: which material to buy, how many cubic yards (or bags), the true cost per yard — and the bagged-label math that catches everyone."
      slug="topsoil-vs-compost-vs-garden-soil"
      calculatorHref="/calculators/topsoil-calculator/"
      calculatorLabel="Try the topsoil calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        Buy by <strong>project, not by bag</strong>: raised beds want a{" "}
        <strong>50–60% topsoil / 40–50% compost</strong> mix; new in-ground
        beds want compost tilled into the native soil; lawn topdressing
        wants screened compost in thin layers; leveling and filling want
        topsoil (with fill dirt underneath for real depth — see our{" "}
        <a href="/guides/topsoil-vs-fill-dirt/">topsoil vs fill dirt
        guide</a>). The flagship math: a 4&times;8&times;1 ft raised bed is 32 cu ft /
        27 = <strong>1.19 cubic yards</strong> — about 22 bags of 1.5 cu ft
        soil, or 16 of the 2 cu ft bags.
      </p>

      <h2>The 60-second material decoder</h2>
      <p>
        <strong>Topsoil</strong> is screened native soil — the mineral base
        with sand, silt, clay, and some organic matter. It&apos;s what lawns
        and beds actually grow in, and it&apos;s the cheapest option in bulk.{" "}
        <strong>Compost</strong> is decomposed organic matter — dark, rich,
        and full of nutrients. It&apos;s an <em>amendment</em>, not a soil:
        mixed into topsoil it improves structure and feeds plants; used
        alone it holds too much water, settles 20–30% as it keeps breaking
        down, and can burn young roots. <strong>Garden soil</strong> is a
        bagged blend of the two plus extras (peat, bark fines, sometimes
        starter fertilizer) — formulated so you can plant straight into the
        bag&apos;s contents. Convenient, but you pay for the convenience per
        yard (see the cost table below).
      </p>

      <h2>Project → material → quantity</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Buy this</th><th>Quantity rule</th></tr>
        </thead>
        <tbody>
          <tr><td>Raised bed (new)</td><td>50–60% topsoil + 40–50% compost, or bagged raised-bed mix</td><td className="num">L &times; W &times; D (ft) / 27</td></tr>
          <tr><td>New in-ground bed</td><td>Compost tilled 6–8 in into native soil</td><td className="num">Bed sq ft &times; 0.17 / 27 (2-inch layer)</td></tr>
          <tr><td>Lawn topdressing</td><td>Screened compost, thin</td><td className="num">Lawn sq ft &times; 0.042 / 27 (½-inch layer)</td></tr>
          <tr><td>Leveling / low spots</td><td>Topsoil (fill dirt below for depth)</td><td className="num">Area sq ft &times; depth in ft / 27</td></tr>
          <tr><td>Planting trees / shrubs</td><td>Native soil backfill + compost amendment</td><td className="num">Compost ≈ ¼ of backfill volume</td></tr>
        </tbody>
      </table>

      <h2>Raised beds: the worked example</h2>
      <p>
        The classic 4 &times; 8 &times; 1 ft raised bed: 4 &times; 8 &times; 1 = 32 cu ft / 27 =
        <strong> 1.19 cubic yards</strong>. A 50/50 mix means{" "}
        <strong>~0.6 yards of topsoil + ~0.6 yards of compost</strong> (a
        60/40 split is 0.71 + 0.47 — either works; measure by bucketfuls,
        not precision). Bagged route: 32 cu ft / 1.5 = 21.3 →{" "}
        <strong>22 bags</strong> of 1.5 cu ft soil, or 32 / 2 ={" "}
        <strong>16 bags</strong> of 2 cu ft. Deeper beds scale linearly — a
        4 &times; 8 &times; 2 ft bed needs 2.37 yards (see the table).
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Bed size</th><th>Volume</th><th>Yards</th><th>Bags (1.5 cu ft)</th></tr>
        </thead>
        <tbody>
          <tr><td className="num">4 &times; 4 &times; 1 ft</td><td className="num">16 cu ft</td><td className="num">0.59</td><td className="num">11</td></tr>
          <tr><td className="num">3 &times; 6 &times; 1 ft</td><td className="num">18 cu ft</td><td className="num">0.67</td><td className="num">12</td></tr>
          <tr><td className="num">4 &times; 8 &times; 1 ft</td><td className="num">32 cu ft</td><td className="num">1.19</td><td className="num">22</td></tr>
          <tr><td className="num">4 &times; 8 &times; 2 ft</td><td className="num">64 cu ft</td><td className="num">2.37</td><td className="num">43</td></tr>
        </tbody>
      </table>
      <p>
        Money tip for deep beds: the bottom half of a 2-foot bed can be
        cheap filler — logs, branches, and leaves (hugelkultur style) or
        plain fill material — with your good mix in the top 10–12 inches
        where roots actually live. A 4 &times; 8 &times; 2 ft bed needs only ~1.2 yards
        of mix this way instead of 2.37.
      </p>

      <h2>New in-ground beds: amend, don&apos;t replace</h2>
      <p>
        For a bed dug into native soil, you don&apos;t need a bed-full of
        bagged product — you need <strong>2–3 inches of compost tilled 6–8
        inches deep</strong> into what&apos;s there. Worked example: a 10 &times; 6
        ft bed = 60 sq ft; a 2-inch compost layer is 60 &times; (2/12) = 10 cu ft
        / 27 = <strong>0.37 cubic yards</strong> — about{" "}
        <strong>7 bags</strong> of 1.5 cu ft compost (10 / 1.5 = 6.67).
        Only if your native soil is truly hopeless (construction rubble,
        heavy clay pan) does full replacement with topsoil make sense — and
        then it&apos;s bulk topsoil by the yard, not bags.
      </p>

      <h2>Topdressing and leveling: compost vs topsoil</h2>
      <p>
        <strong>Topdressing a lawn</strong> (feeding it, not leveling) wants
        <strong> screened compost at ¼–½ inch</strong>: 1,000 sq ft at ½ inch
        = 1,000 &times; (0.5/12) / 27 = <strong>1.54 cubic yards</strong> of
        compost. Spread it thin, water it in, let the grass grow through.{" "}
        <strong>Leveling</strong> wants <strong>topsoil</strong> — compost
        keeps decomposing and the low spot comes back. 2,500 sq ft at 1 inch
        of topsoil: 2,500 &times; (1/12) / 27 = <strong>7.72 cubic
        yards</strong>, about <strong>9.26 tons</strong> at topsoil&apos;s 1.2
        tons per yard — a dump-truck delivery, and a reminder that
        &ldquo;just an inch&rdquo; is heavy on a big lawn.
      </p>

      <h2>Cost per yard: bulk vs bagged</h2>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Material</th><th>Bulk (per yard)</th><th>Bagged equivalent (per yard)</th></tr>
        </thead>
        <tbody>
          <tr><td>Topsoil</td><td className="num">$25–50</td><td className="num">$70–110</td></tr>
          <tr><td>Compost</td><td className="num">$30–60</td><td className="num">$80–120</td></tr>
          <tr><td>Garden soil blend</td><td className="num">$35–65</td><td className="num">$85–120</td></tr>
        </tbody>
      </table>
      <p>
        The bagged-equivalent math: a 1.5 cu ft bag is 1.5 / 27 = 0.0556
        yards, so <strong>18 bags make a yard</strong>. At $5 a bag
        that&apos;s $90 per yard — roughly double bulk. The crossover is
        around <strong>1–1.5 yards</strong>: below that, bags win on
        convenience (no delivery minimum, no shoveling a pile); above it,
        bulk delivery is decisively cheaper. That 4&times;8 raised bed at 1.19
        yards sits right on the line — bulk if you have other projects,
        bags if this is the only one.
      </p>

      <h2>The &ldquo;bagged lies&rdquo; label math</h2>
      <p>
        Bag labels state volume at fill, and bags are filled fluffy —
        the contents settle. Three things to check:{" "}
        <strong>1. The actual cubic feet</strong>, printed small on the
        bag (a &ldquo;1.5 cu ft&rdquo; bag is the standard unit of garden
        math — 18 per yard, 12 per half yard). <strong>2. Expanded vs.
        compressed volume</strong> — peat-heavy mixes list compressed
        volume; fluffed, they&apos;re bigger, but you pay for compressed.{" "}
        <strong>3. Moisture weight</strong> — a rain-soaked bag can weigh
        half again as much without containing more soil. When comparing
        bag prices, divide price by the stated cubic feet: the $4 bag that
        holds 1 cu ft ($4/cu ft) loses to the $5.50 bag that holds 2 cu ft
        ($2.75/cu ft) every time.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>Pure compost beds.</strong> Settles, holds water, burns
        seedlings — always blend with topsoil. <strong>Topsoil under
        concrete or pavers</strong> where fill dirt belongs — its organic
        content settles. <strong>Buying garden soil in bulk quantities
        bagged.</strong> Past ~1.5 yards the markup is painful.{" "}
        <strong>Leveling with compost.</strong> The low spot returns as the
        compost decomposes. <strong>Skipping the math on bags.</strong>{" "}
        Count bags from the yard figure (yards &times; 18 for 1.5 cu ft bags),
        not from vibes — the 4&times;8 bed is 22 bags, not &ldquo;a trunkful.&rdquo;
      </p>

      <Faq items={faqs} heading="Topsoil & Compost FAQ" />
    </GuideArticle>
  );
}
