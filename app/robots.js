export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://cubicyardcalculator.site/sitemap.xml",
  };
}
