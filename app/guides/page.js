import Link from "next/link";
import { guides } from "../../lib/guides";

export const metadata = {
  title: "Bulk Material Guides — Projects, Comparisons & Costs",
  description:
    "20 practical guides: project quantity charts for pools, french drains, fire pits, sheds, driveways and more, material comparisons, truck capacity, and installation costs. Free, with worked examples.",
  keywords: [
    "bulk material guides",
    "how many cubic yards fit in a pickup truck",
    "how much sand for pool base",
    "playground mulch depth",
    "mulch installation cost",
    "landscape fabric under rock",
    "decomposed granite vs gravel",
    "how much gravel for french drain",
    "topsoil vs fill dirt",
    "how much does a cubic yard weigh",
    "bagged vs ready mix concrete cost",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/" },
  openGraph: {
    title: "Bulk Material Guides — Projects, Comparisons & Costs | Cubic Yard Calculator",
    description:
      "Project quantity charts, material comparisons, truck capacity tables, and installation cost guides — 20 practical guides with worked examples.",
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
