const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://soliloquy.vercel.app/",
  pagesDirectory: __dirname + "/.next/serverless/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "jsx", "map"],
  ignoredPaths: ["[fallback]"],
});