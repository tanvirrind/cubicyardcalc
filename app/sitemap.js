import { guides } from "../lib/guides";

const SITE_URL = "https://cubicyardcalculator.site";

// Public, indexable routes.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/calculators/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/cubic-yard-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/concrete-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/dirt-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/mulch-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/gravel-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/sand-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/square-feet-to-cubic-yards-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/cubic-feet-to-cubic-yards-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/square-yard-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/tons-to-cubic-yards-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/fill-dirt-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/topsoil-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/landscape-rock-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/concrete-bag-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/mulch-bag-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/gravel-to-tons-calculator/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/cubic-yard-coverage/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cubic-yard-cost/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-many-feet-in-a-yard/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-to-calculate-cubic-yards/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-many-cubic-feet-in-a-cubic-yard/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/", priority: 0.7, changeFrequency: "weekly" },
  ...guides.map((g) => ({
    path: `/guides/${g.slug}/`,
    priority: 0.7,
    changeFrequency: "monthly",
  })),
  { path: "/about/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy/", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
