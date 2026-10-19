export const siteUrl = "https://china-access.vercel.app";

export const siteName = "China Access";

export function productPath(id: string): string {
  return `/products/${id}`;
}

export function productUrl(id: string): string {
  return `${siteUrl}${productPath(id)}`;
}

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "China Access — overseas tracker for Chinese AI products",
};

export const siteTitle =
  "China Access — Overseas tracker for Chinese AI products";

/** Kept in the 150–160 character meta description range. */
export const siteDescription =
  "Can you use Chinese AI products outside China? Track Kling, Hailuo, Qwen, DeepSeek, Seedance, and more — access status, payment, and tips for developers.";
