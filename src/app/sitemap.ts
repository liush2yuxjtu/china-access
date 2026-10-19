import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { productUrl, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Homepage plus one URL per product in `src/data/products.ts`. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products.map((product) => ({
      url: productUrl(product.id),
      lastModified: product.lastVerified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
