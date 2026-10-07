/** @type {import('next').NextConfig} */

// Legacy top-level calculator URLs (from the PHP site) redirect permanently
// to their new homes under /calculators/*. Both slash variants are listed so
// /slug and /slug/ both land on the canonical destination.
const legacySlugs = [
  "concrete-calculator",
  "dirt-calculator",
  "gravel-calculator",
  "mulch-calculator",
  "sand-calculator",
  "square-feet-to-cubic-yards-calculator",
  "tons-to-cubic-yards-calculator",
  "cubic-feet-to-cubic-yards-calculator",
  "square-yard-calculator",
  "fill-dirt-calculator",
  "landscape-rock-calculator",
  "concrete-bag-calculator",
  "mulch-bag-calculator",
  "gravel-to-tons-calculator",
];

const nextConfig = {
  // Match the live site's URL convention: every page serves with a trailing
  // slash, so legacy backlinks like /cubic-yard-cost/ resolve with no hop.
  trailingSlash: true,
  async redirects() {
    return legacySlugs.flatMap((slug) => [
      {
        source: `/${slug}`,
        destination: `/calculators/${slug}/`,
        permanent: true,
      },
      {
        source: `/${slug}/`,
        destination: `/calculators/${slug}/`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
