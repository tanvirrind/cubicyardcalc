import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Types of Sand: Play vs Mason vs All-Purpose vs Concrete vs Polymeric",
  description:
    "The five sands explained: grain size, texture, and which to use for sandboxes, pavers, mortar, concrete, and pools. Plus bag vs bulk buying math.",
  keywords: [
    "types of sand for landscaping",
    "play sand vs mason sand",
    "mason sand vs all purpose sand",
    "what is polymeric sand",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/types-of-sand/" },
  openGraph: {
    title: "Types of Sand: Play vs Mason vs All-Purpose vs Concrete vs Polymeric | Cubic Yard Calculator",
    description:
      "Grain size and use-this-not-this guidance for the five sands, ASTM specs in plain English, and bag-vs-bulk cost math.",
    url: "https://cubicyardcalculator.site/guides/types-of-sand/",
  },
};

const faqs = [
  {
    q: "What is polymeric sand?",
    a: "A fine, precisely graded sand blended with polymer binders, used as joint sand between pavers. When you water it in, the polymers set and lock the joints — resisting weeds, ants, and washout far better than plain sand.",
  },
  {
    q: "What is the difference between play sand and mason sand?",
    a: "Play sand is washed, fine, and tested for children's safety; mason (masonry) sand is finer, screen-cleaned sand made for mortar and smooth compacted surfaces. Mason sand is the better pick for construction uses like pool bases and mortar, while play sand is the safe pick for sandboxes.",
  },
  {
    q: "Can I use all-purpose sand for pavers?",
    a: "Not for the bedding layer — all-purpose sand is coarser and often unwashed, so it doesn't screed as evenly and can contain debris. Use coarse washed concrete sand for bedding and polymeric (or mason) sand for the joints.",
  },
  {
    q: "Which sand is best for a sandbox?",
    a: "Play sand. It's washed, fine-grained, and screened for children's use. Mason sand is technically fine but usually cheaper and coarser than needed for play; never use unwashed fill or all-purpose sand, which can contain debris and dust.",
  },
  {
    q: "What is the difference between mason sand and concrete sand?",
    a: "Mason sand is fine and smooth for mortar and compacted surfaces; concrete sand is coarse and washed for mixing into concrete. Their grain sizes are opposite ends of the spectrum — using fine sand in a concrete mix weakens it, and coarse sand in mortar makes it crumbly.",
  },
  {
    q: "How many 50 lb bags of sand are in a cubic yard?",
    a: "About 54. A 50-pound bag of sand holds roughly 0.5 cubic feet, and there are 27 cubic feet in a yard. That's why bulk sand at $20–50 per yard beats bagged sand at ~$5 a bag for any project over a couple of wheelbarrows.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Types of Sand: Play vs Mason vs All-Purpose vs Concrete vs Polymeric"
      description="The five sands you can actually buy, what each is made of, and the one-line answer for which your project needs — plus ASTM specs decoded and bag-vs-bulk buying math."
      slug="types-of-sand"
      calculatorHref="/calculators/sand-calculator/"
      calculatorLabel="Try the sand calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />

      <h2>The short answer</h2>
      <p>
        <strong>Sandbox? Play sand. Mortar or pool base? Mason sand. General
        yard work? All-purpose. Mixing concrete? Concrete sand. Paver joints?
        Polymeric sand.</strong> The wrong sand doesn&apos;t just perform
        worse — fine sand in a concrete mix weakens it, and coarse sand in
        mortar makes it crumbly. Grain size is the whole game, and the table
        below matches each sand to its jobs.
      </p>

      <h2>The five sands, compared</h2>
      <p>
        Every bag or bulk load you&apos;ll find at a yard or home center is
        one of these five. Here&apos;s how they differ on grain, texture, and
        cleanliness:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Sand</th><th>Grain size</th><th>Texture</th><th>Washed / screened?</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Play sand</strong></td><td className="num">Fine (~0.1–0.5 mm)</td><td>Soft, rounded</td><td>Washed &amp; screened for children&apos;s use</td></tr>
          <tr><td><strong>Mason sand</strong> (masonry)</td><td className="num">Fine (~0.1–0.6 mm)</td><td>Smooth, clean</td><td>Screened; made for mortar</td></tr>
          <tr><td><strong>All-purpose sand</strong></td><td className="num">Medium (~0.2–2 mm)</td><td>Coarser, mixed</td><td>Often unwashed; utility grade</td></tr>
          <tr><td><strong>Concrete sand</strong> (coarse)</td><td className="num">Coarse (~0.2–4.75 mm)</td><td>Gritty, angular</td><td>Washed; graded for concrete</td></tr>
          <tr><td><strong>Polymeric sand</strong></td><td className="num">Fine, precisely graded</td><td>Fine + polymer binders</td><td>Manufactured for paver joints</td></tr>
        </tbody>
      </table>

      <h2>Use this / not this, by project</h2>
      <p>
        Pick your project in the left column. The right column is what to
        avoid and why:
      </p>
      <table className="ref-table" style={{ margin: "20px 0" }}>
        <thead>
          <tr><th>Project</th><th>Use this</th><th>Not this — why</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Sandbox</strong></td><td>Play sand</td><td>All-purpose or fill sand — may contain debris and excess dust</td></tr>
          <tr><td><strong>Paver bedding</strong></td><td>Concrete sand, 1&Prime; screeded</td><td>Play sand — too soft, shifts; all-purpose — doesn&apos;t screed evenly</td></tr>
          <tr><td><strong>Paver joints</strong></td><td>Polymeric sand (or mason sand)</td><td>Play sand — washes out; plain dirt — grows weeds</td></tr>
          <tr><td><strong>Mortar</strong></td><td>Mason sand</td><td>Concrete sand — too coarse, makes mortar crumbly; all-purpose — inconsistent</td></tr>
          <tr><td><strong>Concrete mix</strong></td><td>Concrete sand</td><td>Mason or play sand — too fine, weakens the mix</td></tr>
          <tr><td><strong>Lawn leveling</strong></td><td>Mason or all-purpose sand</td><td>Polymeric — wrong job entirely; concrete sand — too coarse for turf</td></tr>
          <tr><td><strong>Pool base</strong></td><td>Mason sand, 2&Prime; inside the track</td><td>Play sand — coarser and pricier per yard; fill sand — sharp debris risks the liner</td></tr>
        </tbody>
      </table>

      <h2>A note on bedding vs joint sand for pavers</h2>
      <p>
        Pavers use two different sands doing two different jobs: coarse
        concrete sand as the 1-inch <strong>bedding</strong> layer, and
        polymeric sand swept into the <strong>joints</strong> to lock the
        pavers together. Mixing them up is the most common paver-sand
        mistake. Our{" "}
        <a href="/guides/paver-base-sand-gravel-guide/">paver base, sand, and gravel guide</a>{" "}
        covers the full layer-by-layer build with quantities.
      </p>

      <h2>Bag vs bulk: the price cliff</h2>
      <p>
        Sand is sold two ways and the price difference is brutal. A
        50-pound bag holds about <strong>0.5 cubic feet</strong>, so a cubic
        yard — 27 cubic feet — is about <strong>54 bags</strong>. At roughly
        $5 a bag, that&apos;s <strong>~$270 per yard in bags</strong> versus{" "}
        <strong>$20–50 per yard in bulk</strong> from a landscape supply
        yard, plus a $50–150 delivery fee.
      </p>
      <p>
        The rule of thumb: <strong>bags win under ~2–3 bags</strong> (small
        repairs, a sandbox top-up, anywhere a truck can&apos;t reach).{" "}
        <strong>Bulk wins for everything else</strong> — the delivery fee
        amortizes fast. A pool base needing 3 yards is about $105 in bulk
        sand (see our{" "}
        <a href="/guides/how-much-sand-for-pool-base/">pool base sand chart</a>)
        versus ~$800 in bags. For weight-based pricing, sand runs about
        2,700 pounds per yard — multiply your yards by{" "}
        <strong>1.35</strong> for tons.
      </p>

      <h2>ASTM specs, in plain English</h2>
      <p>
        Bulk sand from a real supplier is often graded to an{" "}
        <strong>ASTM standard</strong> — a published spec that guarantees
        grain size and cleanliness. Two matter for homeowners:
      </p>
      <p>
        <strong>ASTM C144</strong> — the masonry/mortar sand spec. It defines
        a fine, clean sand that mixes into workable mortar. If a yard sells
        &ldquo;masonry sand,&rdquo; it&apos;s graded to this (or close).
        <br />
        <strong>ASTM C33</strong> — the concrete aggregate spec. It defines
        the coarse, washed fine aggregate that goes into concrete. &ldquo;Washed
        concrete sand&rdquo; or &ldquo;C33 sand&rdquo; is what you want for
        mixing or for paver bedding.
      </p>
      <p>
        You don&apos;t need to memorize these — but when a supplier asks what
        spec you need, the names above get you exactly the right pile. (No
        ASTM number governs play sand; its &ldquo;kid-safe&rdquo; claim comes
        from washing and screening, not a construction standard.)
      </p>

      <h2>Where to buy each sand</h2>
      <p>
        Not every seller stocks every sand, and buying from the right place
        saves money. <strong>Home centers</strong> carry bagged play sand,
        all-purpose sand, and polymeric sand — convenient, but the worst
        per-yard price. <strong>Landscape supply yards</strong> sell bulk
        mason, concrete, and all-purpose sand by the cubic yard or ton — the
        right call for anything over a few bags, and their staff can usually
        tell you which pile matches your project. <strong>Masonry
        suppliers</strong> are the best source for true C144 mason sand and
        will deliver to job sites. Polymeric sand is a bagged product almost
        everywhere — buy it by the bag based on your joint volume (a 50-lb
        bag covers roughly 60–100 square feet of pavers, depending on joint
        width).
      </p>

      <h2>Can you mix sands?</h2>
      <p>
        Sometimes — but know what you&apos;re making. Blending mason sand
        into all-purpose sand for lawn leveling is fine. <strong>Never blend
        your way around a spec</strong>: mixing play sand into a concrete
        batch to &ldquo;stretch&rdquo; your concrete sand changes the
        aggregate grading and weakens the result, and adding all-purpose
        sand to mortar makes it unpredictable. When a job has a spec (C33,
        C144), buy the spec&apos;d sand. When it doesn&apos;t — sandbox
        top-ups, leveling, general fill — blending what&apos;s on hand is
        harmless.
      </p>

      <h2>Silica dust: the one safety note</h2>
      <p>
        All natural sand contains crystalline silica; the risk is{" "}
        <strong>breathing the dust</strong>, not touching the sand. Cutting
        or dry-sweeping large amounts of sand — or working with polymeric
        sand on a windy day — calls for a dust mask (N95 or better) and
        keeping the material damp while you work. Play sand gets extra
        scrutiny here: reputable brands test and label it, so buy it bagged
        from a known manufacturer rather than scooping unknown bulk sand
        for a sandbox.
      </p>

      <h2>How much sand do you actually need?</h2>
      <p>
        Once you&apos;ve picked the type, the quantity math is the same for
        all of them: <strong>(length × width × depth in feet) / 27</strong> =
        cubic yards. A 10×10-foot sandbox at 6 inches deep is (10 × 10 × 0.5)
        / 27 = <strong>1.85 cubic yards</strong> — order 2 yards, or about 100
        fifty-pound bags of play sand. Our{" "}
        <a href="/calculators/sand-calculator/">sand calculator</a> runs this
        for any shape and converts to tons and bags automatically.
      </p>

      <h2>Storage and handling</h2>
      <p>
        Bulk sand arrives in a pile — <strong>tarp it</strong> if it&apos;ll
        sit more than a day or two, because wet sand weighs more (delivery
        drivers care) and saturated sand is miserable to spread. Keep
        polymeric sand <strong>completely dry until it&apos;s in the
        joints</strong>: once the binders activate with water, any damp bag
        starts setting in storage. And a practical note — a cubic yard of
        sand is about 1.35 tons, so don&apos;t have it dumped anywhere your
        driveway or lawn can&apos;t take the weight.
      </p>

      <h2>Common mistakes</h2>
      <p>
        <strong>One sand for everything.</strong> The all-purpose bag is
        tempting; it&apos;s wrong for mortar, concrete, and paver joints.{" "}
        <strong>Fine sand in concrete.</strong> Mason or play sand in a mix
        produces weak, crumbly concrete. <strong>Coarse sand in mortar.</strong>{" "}
        Concrete sand makes mortar that won&apos;t bond properly.{" "}
        <strong>Buying bags for a bulk job.</strong> Past ~3 yards, bagged
        sand costs multiples of bulk. <strong>Wet polymeric sand.</strong>{" "}
        Store it dry or it sets before you use it.
      </p>

      <h2>A quick buying checklist</h2>
      <p>
        Before you order, run through this: <strong>1)</strong> Match the
        sand to the job using the table above — not whatever&apos;s
        cheapest. <strong>2)</strong> Decide bags vs bulk at the 2–3 bag
        threshold. <strong>3)</strong> For bulk, confirm the pile name with
        the yard (&ldquo;washed concrete sand,&rdquo; not just
        &ldquo;sand&rdquo;) and ask if it&apos;s graded to C33 or C144 when
        the job needs it. <strong>4)</strong> Check delivery access and have
        a tarp ready. <strong>5)</strong> For polymeric sand, buy from a
        single lot — color can vary between batches. Get those five right
        and the sand part of your project is the part you never think about
        again.
      </p>

      <Faq items={faqs} heading="Types of Sand FAQ" />
    </GuideArticle>
  );
}
