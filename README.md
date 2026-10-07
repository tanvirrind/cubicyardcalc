# Cubic Yard Calculator

Free bulk-material volume calculators for [cubicyardcalculator.site](https://cubicyardcalculator.site) —
concrete, gravel, mulch, dirt, sand, plus square-feet and tons converters. Next.js 15, modeled on the
CalcBid design system (warm paper, Oswald display + IBM Plex Mono, calc-layout/result-card classes).

## Quick start (local)

```bash
cd ~/workspace/cubicyard
npm install
npm run dev        # http://localhost:3000
```

## Production build + local serve

```bash
npm run build      # static pre-render of all routes
npm start -- -p 3100   # or PORT=3100 npm start
```

All routes are statically generated (no database, no auth, no backend).

## Routes

| Route | What |
|---|---|
| `/` | Hero + main cubic yard calculator + quick answers + FAQ |
| `/calculators` | Hub with all 16 calculators |
| `/calculators/cubic-yard-calculator` | Core tool: L×W×D → yd³, ft³, weight, +10% overage |
| `/calculators/concrete-calculator` | Slab or direct yards → yards, weight, 5 bag counts, 2026 cost estimator |
| `/calculators/dirt-calculator` | Topsoil / fill dirt / garden soil → yards + tons |
| `/calculators/topsoil-calculator` | Topsoil with garden-bed presets → yards + tons |
| `/calculators/fill-dirt-calculator` | Fill dirt grading → yards + tons + coverage chart |
| `/calculators/mulch-calculator` | Yards + 2/3 cu ft bag counts |
| `/calculators/gravel-calculator` | Yards + tons (1.4 t/yd³) |
| `/calculators/landscape-rock-calculator` | Rock & stone → yards + tons (2.25 t/yd³) |
| `/calculators/sand-calculator` | Yards + tons (1.35 t/yd³) + 50 lb bag estimate |
| `/calculators/square-feet-to-cubic-yards-calculator` | Area + depth → yd³ |
| `/calculators/cubic-feet-to-cubic-yards-calculator` | Two-way ft³ ↔ yd³ converter |
| `/calculators/square-yard-calculator` | L×W → sq ft + sq yd |
| `/calculators/tons-to-cubic-yards-calculator` | Two-way converter with material densities |
| `/calculators/gravel-to-tons-calculator` | Two-way yards ↔ tons for gravel |
| `/calculators/concrete-bag-calculator` | Two-way yards ↔ bags (40–90 lb) |
| `/calculators/mulch-bag-calculator` | Two-way yards ↔ bags (2/3 cu ft) |
| `/cubic-yard-coverage/` | Coverage chart by depth |
| `/cubic-yard-cost/` | 2026 cost & ordering guide |
| `/how-many-feet-in-a-yard/` | Yard conversion guide |
| `/how-to-calculate-cubic-yards/` | Formula + worked examples |
| `/how-many-cubic-feet-in-a-cubic-yard/` | The 27-cubic-foot rule |
| `/guides` | Hub |
| `/guides/how-many-bags-of-concrete-per-cubic-yard` | Bag-count guide |
| `/guides/how-much-mulch-do-i-need` | Mulch formula + bags-vs-bulk |
| `/guides/cubic-yards-to-tons-conversion-guide` | Density table + formulas |
| `/about`, `/contact`, `/privacy-policy` | Static pages (contact = mailto composer, no backend) |

## Math reference

- `cubic yards = L_ft × W_ft × D_ft / 27` (`lib/calc.js` — single source of truth)
- Overage: +10% on every result
- Concrete bags per yard: 80 lb → 45, 60 lb → 60, 50 lb → 72, 40 lb → 90, 90 lb → 40 (rounded up)
- Mulch: 2 cu ft bags → 13.5/yd, 3 cu ft bags → 9/yd (rounded up)
- Tons per yard (from DENSITIES, single source of truth): concrete 2.025, gravel 1.4, sand 1.35, fill dirt 1.1, topsoil 1.2, mulch 0.4, rock 2.25
- Redirects: `next.config.mjs` permanently redirects the 14 legacy top-level calculator URLs (`/concrete-calculator/`, etc.) to `/calculators/*` (both slash variants). The 5 info pages (`/cubic-yard-cost/`, `/cubic-yard-coverage/`, `/how-many-feet-in-a-yard/`, `/how-to-calculate-cubic-yards/`, `/how-many-cubic-feet-in-a-cubic-yard/`) keep their exact legacy paths.

## SEO

- Per-page `<title>` (≤60 chars), meta description (≤155), canonical, Open Graph
- JSON-LD on every page: `WebApplication` + `FAQPage` + `BreadcrumbList` per calculator page,
  `Organization` + `WebSite` sitewide, `Article` on guides
- `app/sitemap.js` (18 routes), `app/robots.js` (allow all + sitemap)
- Titles/descriptions/FAQs/reference tables ported from the legacy PHP site (`~/workspace/seo/site/`),
  with URLs remapped to the `/calculators/*` structure
