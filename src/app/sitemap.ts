import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Only routes that exist in the App Router. Product detail pages are not
 * public yet, so they are intentionally omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
