import Link from "next/link";
import { guides } from "../../lib/guides";

export const metadata = {
  title: "Bulk Material Guides — Bags, Bulk & Density",
  description:
    "Practical guides: concrete bag counts and bagged vs ready-mix costs, topsoil vs fill dirt, a complete material weight chart, gravel driveways, paver bases, mulch needs, and cubic-yards-to-tons conversion. Free, with worked examples.",
  keywords: [
    "how many bags of concrete per cubic yard",
    "how much mulch do i need",
    "topsoil vs fill dirt",
    "how much does a cubic yard weigh",
    "how much gravel do i need for a driveway",
    "bagged vs ready mix concrete cost",
    "how much sand do i need for pavers",
    "crushed stone vs pea gravel",
    "how many wheelbarrow loads in a cubic yard",
    "cubic yards to tons conversion",
    "bulk material guides",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/" },
  openGraph: {
    title: "Bulk Material Guides — Bags, Bulk & Density | Cubic Yard Calculator",
    description:
      "Concrete bags, mulch math, topsoil vs fill dirt, weight charts, gravel driveways, paver bases, and tons conversion — practical guides with worked examples.",
    url: "https://cubicyardcalculator.site/guides/",
  },
};

export default function GuidesHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Guides</div>
        <h1 className="h2">Order with confidence, not guesses</h1>
        <p className="sub">
          The math behind the calculators: bag counts, bulk-vs-bags math, and
          the density tables suppliers use. Short, practical, no fluff.
        </p>
        <div className="grid3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{g.title}</h3>
              <p>{g.note}</p>
            </Link>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          Want the tool instead?{" "}
          <Link href="/calculators/" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Browse all 16 calculators
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
