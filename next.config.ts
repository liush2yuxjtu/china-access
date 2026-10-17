import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages (static HTML export) — free tier, no Workers runtime needed.
  // Build: `npx next build` → `out/`. See README Cloudflare section.
  output: "export",
  images: { unoptimized: true },
  // Keep Turbopack CSS rules for local `next dev`.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
