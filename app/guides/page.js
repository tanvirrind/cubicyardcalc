import Link from "next/link";
import { guides } from "../../lib/guides";

export const metadata = {
  title: "Bulk Material Guides — Bags, Bulk & Density",
  description:
    "Practical guides: how many concrete bags per cubic yard, how much mulch you need, and converting cubic yards to tons. Free, with worked examples.",
  keywords: [
    "how many bags of concrete per cubic yard",
    "how much mulch do i need",
    "cubic yards to tons conversion",
    "bulk material guides",
  ],
  alternates: { canonical: "https://cubicyardcalculator.site/guides/" },
  openGraph: {
    title: "Bulk Material Guides — Bags, Bulk & Density | Cubic Yard Calculator",
    description:
      "Concrete bag counts, mulch bags vs bulk, and cubic-yards-to-tons conversion — practical guides with worked examples.",
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
            Browse all 8 calculators
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
