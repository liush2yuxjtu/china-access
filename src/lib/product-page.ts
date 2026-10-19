import {
  categoryLabel,
  products,
  statusLabel,
  type AccessStatus,
  type Product,
} from "@/data/products";
import { radarItems, type RadarItem } from "@/data/radar";
import { productUrl, siteName, siteUrl } from "@/lib/site";

/**
 * Titles and descriptions restate `products.ts` only.
 * Length is checked at module load so `next build` fails if a row drifts
 * outside the SEO bounds (title 50–60, description ≤160).
 */
const metaTitles: Record<string, string> = {
  kling: "Kling AI outside China: access, payment, and signup",
  hailuo: "Hailuo AI outside China: access without a CN phone",
  "seedance-dreamina": "Seedance outside China: Dreamina access and payment",
  jimeng: "Jimeng outside China: China-only access and payment",
  vidu: "Vidu AI outside China: access, credits, and signup",
  wan: "Wan AI outside China: access, payment, and signup tips",
  doubao: "Doubao outside China: China-only access and payment",
  qwen: "Qwen AI outside China: access, payment, and signup",
  kimi: "Kimi AI outside China: access, payment, and signup",
  glm: "GLM AI outside China: restricted access and payment",
  deepseek: "DeepSeek API outside China: access, payment, signup",
  sensenova: "SenseNova outside China: access, payment, and signup",
  stepfun: "StepFun outside China: API access and payment tips",
  baichuan: "Baichuan outside China: China-only access and limits",
  "minimax-agent": "MiniMax Agent outside China: API access and payment",
};

const metaDescriptions: Record<string, string> = {
  kling:
    "Kling (Kuaishou) is available outside China with no Chinese phone. International cards (USD via Stripe); Google/Apple SSO. Verified 2026-10-19.",
  hailuo:
    "Hailuo AI is available outside China with no Chinese phone. Pay with USD cards, credits, video packages, or API billing on hailuoai.video. Verified 2026-10-17.",
  "seedance-dreamina":
    "Seedance is available outside China via Dreamina or CapCut, with no Chinese phone. Regional card billing. Versions differ from Jimeng (CN). Verified 2026-10-17.",
  jimeng:
    "Jimeng (即梦) is China-only and needs a Chinese phone. China payment methods only. Overseas, use Dreamina instead of Jimeng. Verified 2026-10-17.",
  vidu:
    "Vidu is available outside China with no Chinese phone. Credits and platform billing on the intl site. Confirm live pricing at signup. Verified 2026-10-17.",
  wan:
    "Wan (Tongyi Wanxiang) is available overseas, but a Chinese phone is sometimes required. Alibaba Cloud billing or open weights. Verified 2026-10-17.",
  doubao:
    "Doubao (豆包) is China-only and needs a Chinese phone. CNY plans only. Overseas teams usually use BytePlus ModelArk, not the consumer app. Verified 2026-10-17.",
  qwen:
    "Qwen is available outside China with no Chinese phone on chat.qwen.ai. Free chat tier; API via Alibaba Cloud Model Studio. Verified 2026-10-17.",
  kimi:
    "Kimi is available outside China; a Chinese phone is sometimes required. Free web and an intl API at moonshot.ai. Keys may not transfer. Verified 2026-10-17.",
  glm:
    "GLM / Zhipu is restricted outside China; a Chinese phone is sometimes required. Try z.ai, trial tokens, or open weights. Verified 2026-10-17.",
  deepseek:
    "DeepSeek is restricted outside China and sometimes needs a Chinese phone. Top-up often Alipay/WeChat/UnionPay; gateways accept intl cards. Verified 2026-10-19.",
  sensenova:
    "SenseNova is available outside China with no Chinese phone. Intl Token Plan on sensenova.ai — confirm signup from your country. Verified 2026-10-17.",
  stepfun:
    "StepFun is available outside China with no Chinese phone. Open Platform billing on platform.stepfun.ai; API at api.stepfun.ai. Verified 2026-10-17.",
  baichuan:
    "Baichuan is China-only and needs a Chinese phone plus identity verification. Hosted use is limited to mainland China. Verified 2026-10-17.",
  "minimax-agent":
    "MiniMax Agent is available outside China with no Chinese phone. Token plans and USD billing on the international hub. Verified 2026-10-17.",
};

/** Names already used in radar copy. Matching is mention-only — no new facts. */
const radarTerms: Record<string, readonly string[]> = {
  kling: ["kling"],
  hailuo: ["hailuo"],
  "seedance-dreamina": ["seedance", "dreamina"],
  jimeng: ["jimeng", "即梦"],
  vidu: ["vidu"],
  wan: ["wanxiang"],
  doubao: ["doubao", "豆包"],
  qwen: ["qwen"],
  kimi: ["kimi", "moonshot"],
  glm: ["zhipu"],
  deepseek: ["deepseek"],
  sensenova: ["sensenova"],
  stepfun: ["stepfun", "阶跃"],
  baichuan: ["baichuan"],
  "minimax-agent": ["minimax"],
};

/** Same wording as the homepage status legend. */
export const statusMeaning: Record<AccessStatus, string> = {
  available: "workable intl signup/payment path",
  restricted: "partial, region-limited, or awkward billing",
  "china-only": "no practical overseas consumer path",
  unknown: "not confidently verified (we do not invent facts)",
};

export type Faq = { question: string; answer: string };

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.id === slug);
}

export function productMetaTitle(product: Product): string {
  return metaTitles[product.id] ?? "";
}

export function productMetaDescription(product: Product): string {
  return metaDescriptions[product.id] ?? "";
}

export function phoneSentence(product: Product): string {
  switch (product.needsChinesePhone) {
    case "yes":
      return "A Chinese phone number is required.";
    case "no":
      return "A Chinese phone number is not required.";
    case "sometimes":
      return "A Chinese phone number is sometimes required.";
    default:
      return "It is unknown whether a Chinese phone number is required.";
  }
}

export function productHeadline(product: Product): string {
  const phone = phoneSentence(product);
  switch (product.status) {
    case "available":
      return `Yes. You can use ${product.name} outside China. ${phone}`;
    case "restricted":
      return `Partly. ${product.name} is restricted outside China. ${phone}`;
    case "china-only":
      return `No. ${product.name} is China-only. ${phone}`;
    default:
      return `Unknown. Overseas use of ${product.name} is not verified. ${phone}`;
  }
}

export function productFaqs(product: Product): Faq[] {
  const faqs: Faq[] = [
    {
      question: `Can I use ${product.name} outside China?`,
      answer: `${productHeadline(product)} Tracker status: ${statusLabel[product.status]} — ${statusMeaning[product.status]}.`,
    },
    {
      question: `Does ${product.name} need a Chinese phone number?`,
      answer: phoneSentence(product),
    },
    {
      question: `How do overseas users pay for ${product.name}?`,
      answer: product.paymentOverseas,
    },
    {
      question: `What are the pricing notes for ${product.name}?`,
      answer: product.pricingNotes,
    },
    {
      question: `What is the overseas tip for ${product.name}?`,
      answer: product.tip,
    },
    {
      question: `When was ${product.name} access last verified?`,
      answer: `Last verified ${product.lastVerified}.`,
    },
  ];
  if (product.notes) {
    faqs.push({
      question: `What else is noted about ${product.name}?`,
      answer: product.notes,
    });
  }
  return faqs;
}

function mentions(haystack: string, term: string): boolean {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:[^a-z0-9]|$)`, "i").test(
    haystack,
  );
}

export function radarForProduct(product: Product): RadarItem[] {
  const terms = radarTerms[product.id] ?? [];
  if (terms.length === 0) return [];
  return radarItems.filter((item) => {
    const haystack = `${item.id} ${item.title} ${item.summary} ${item.url ?? ""}`;
    return terms.some((term) => mentions(haystack, term));
  });
}

const RELATED_LIMIT = 4;

export function relatedProducts(product: Product): {
  heading: string;
  products: Product[];
} {
  const inCategory = products.filter((item) => item.category === product.category);
  if (inCategory.length > 1) {
    const start = inCategory.findIndex((item) => item.id === product.id);
    const picked: Product[] = [];
    for (
      let step = 1;
      picked.length < RELATED_LIMIT && step < inCategory.length;
      step += 1
    ) {
      picked.push(inCategory[(start + step) % inCategory.length]);
    }
    return {
      heading: `Related ${categoryLabel[product.category].toLowerCase()} products`,
      products: picked,
    };
  }

  return {
    heading: `More from ${product.company}`,
    products: products
      .filter((item) => item.id !== product.id && item.company === product.company)
      .slice(0, RELATED_LIMIT),
  };
}

export function productFaqJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs(product).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productBreadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteName,
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: productUrl(product.id),
      },
    ],
  };
}

function assertSeoCopy() {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const product of products) {
    const title = productMetaTitle(product);
    const description = productMetaDescription(product);
    if (title.length < 50 || title.length > 60) {
      throw new Error(
        `SEO title for ${product.id} is ${title.length} chars: ${title}`,
      );
    }
    if (description.length === 0 || description.length > 160) {
      throw new Error(
        `SEO description for ${product.id} is ${description.length} chars: ${description}`,
      );
    }
    if (titles.has(title) || descriptions.has(description)) {
      throw new Error(`Duplicate SEO copy for ${product.id}`);
    }
    titles.add(title);
    descriptions.add(description);
  }
}

assertSeoCopy();
