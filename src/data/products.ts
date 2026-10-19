export type Category = "video" | "llm" | "image" | "agent";
export type AccessStatus = "available" | "restricted" | "china-only" | "unknown";

export interface Product {
  id: string;
  name: string;
  company: string;
  category: Category;
  status: AccessStatus;
  needsChinesePhone: "yes" | "no" | "sometimes" | "unknown";
  paymentOverseas: string;
  pricingNotes: string;
  lastVerified: string;
  sourceUrl: string;
  tip: string;
  notes?: string;
}

/**
 * Seed data for China Access tracker.
 * lastVerified: 2026-10-17 for most rows; DeepSeek and Kling rechecked 2026-10-19.
 * Rule: never invent access facts — mark unknown when unsure.
 */
export const products: Product[] = [
  {
    id: "kling",
    name: "Kling",
    company: "Kuaishou",
    category: "video",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "International cards (USD via Stripe); Google/Apple SSO",
    pricingNotes: "Separate CN (klingai.com) and intl (kling.ai) accounts & credits — not interchangeable",
    lastVerified: "2026-10-19",
    sourceUrl: "https://kling.ai",
    tip: "Use kling.ai (intl). Kling 4.0 is GA (up to ~30s, multi-ref/keyframes) via MCP at https://kling.ai/mcp or CLI @klingai/cli-global. Avoid the mainland portal if you need overseas billing.",
    notes:
      "Enterprise/developer REST API for Kling 4.0 is still marked coming soon. MCP and the global CLI are the open agent paths.",
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    company: "MiniMax",
    category: "video",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "USD cards; credits / video packages / API billing",
    pricingNotes: "Intl portal (hailuoai.video) contracts via Singapore entity; CN vs intl pricing differ",
    lastVerified: "2026-10-17",
    sourceUrl: "https://hailuoai.video",
    tip: "Sign up with email or Google on hailuoai.video. Also check MiniMax API platform for developers.",
  },
  {
    id: "seedance-dreamina",
    name: "Seedance (Dreamina / CapCut)",
    company: "ByteDance",
    category: "video",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "CapCut / Dreamina subscriptions; regional card billing",
    pricingNotes: "Model rolls out by region on CapCut & Dreamina; versions and timing differ from Jimeng (CN)",
    lastVerified: "2026-10-17",
    sourceUrl: "https://dreamina.capcut.com",
    tip: "Outside China, use Dreamina or CapCut — not Jimeng. Check your region for Seedance model availability.",
  },
  {
    id: "jimeng",
    name: "Jimeng (即梦)",
    company: "ByteDance",
    category: "image",
    status: "china-only",
    needsChinesePhone: "yes",
    paymentOverseas: "China payment methods only",
    pricingNotes: "Domestic creative suite; international counterpart is Dreamina",
    lastVerified: "2026-10-17",
    sourceUrl: "https://jimeng.jianying.com",
    tip: "If you are overseas, use Dreamina (dreamina.capcut.com) instead of Jimeng.",
  },
  {
    id: "vidu",
    name: "Vidu",
    company: "Shengshu / Shengshu Tech",
    category: "video",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "Credits / platform billing (intl site)",
    pricingNotes: "English UI reported on global site; confirm live pricing on signup",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.vidu.com",
    tip: "Try vidu.com for English UI and credit packs as a Kling/Hailuo alternative.",
  },
  {
    id: "wan",
    name: "Wan / Tongyi Wanxiang",
    company: "Alibaba (Tongyi Lab)",
    category: "video",
    status: "available",
    needsChinesePhone: "sometimes",
    paymentOverseas: "Alibaba Cloud / Model Studio billing; open weights for self-host",
    pricingNotes: "Hosted API via Alibaba Cloud regions; open-weight Wan models also on Hugging Face",
    lastVerified: "2026-10-17",
    sourceUrl: "https://tongyi.aliyun.com",
    tip: "Prefer Alibaba Cloud Model Studio intl regions or open weights if DashScope CN signup blocks you.",
  },
  {
    id: "doubao",
    name: "Doubao (豆包)",
    company: "ByteDance",
    category: "llm",
    status: "china-only",
    needsChinesePhone: "yes",
    paymentOverseas: "CNY plans only (China app stores)",
    pricingNotes: "Consumer app listed for mainland CN / HK / Macau; no English overseas consumer product",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.doubao.com",
    tip: "Overseas teams usually use BytePlus ModelArk for Seed/Doubao-family APIs, not the Doubao consumer app.",
  },
  {
    id: "qwen",
    name: "Qwen / Tongyi",
    company: "Alibaba",
    category: "llm",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "Free chat tier; Alibaba Cloud Model Studio / Qwen Cloud for API",
    pricingNotes: "chat.qwen.ai is intl (email/OAuth). CN site (qianwen.com) is separate and phone-based",
    lastVerified: "2026-10-17",
    sourceUrl: "https://chat.qwen.ai",
    tip: "Use chat.qwen.ai (Google/GitHub/Apple). Do not mix with mainland Tongyi accounts.",
  },
  {
    id: "kimi",
    name: "Kimi / Moonshot",
    company: "Moonshot AI",
    category: "llm",
    status: "available",
    needsChinesePhone: "sometimes",
    paymentOverseas: "Free web; intl API at moonshot.ai / platform billing",
    pricingNotes: "Domestic and international API systems can be separate — keys may not transfer",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.kimi.com",
    tip: "For API work outside China, confirm you are on the international Moonshot endpoint (api.moonshot.ai).",
  },
  {
    id: "glm",
    name: "GLM / Zhipu (Z.ai)",
    company: "Zhipu AI",
    category: "llm",
    status: "restricted",
    needsChinesePhone: "sometimes",
    paymentOverseas: "Trial tokens; Z.ai / BigModel platform billing; enterprise sales",
    pricingNotes: "Partial English UI; open weights available. Intl route often via z.ai rather than open.bigmodel.cn",
    lastVerified: "2026-10-17",
    sourceUrl: "https://z.ai",
    tip: "Try z.ai for the international surface; fall back to open weights if hosted signup is blocked.",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    company: "DeepSeek",
    category: "llm",
    status: "restricted",
    needsChinesePhone: "sometimes",
    paymentOverseas: "Official top-up often Alipay/WeChat/UnionPay; gateways accept intl cards",
    pricingNotes:
      "deepseek-flash now serves DeepSeek-V4.1-Flash-1017. Search & Fetch API is $0.75 per 1k successful calls; server-side tool calls via DeepSeek Harness, Claude Code, and Codex are free until 2026-10-31 16:00 UTC. API reachable globally with a key; account funding is the common overseas friction. Open weights widely available",
    lastVerified: "2026-10-19",
    sourceUrl: "https://www.deepseek.com",
    tip: "Chat may work with email; for API, verify live signup. Search & Fetch docs: https://api-docs.deepseek.com/guides/search. Many teams use open weights or OpenAI-compatible gateways when official billing fails.",
    notes: "Sources disagree on whether official platform always requires a +86 number — treat payment/phone as the risk and verify yourself.",
  },
  {
    id: "sensenova",
    name: "SenseNova",
    company: "SenseTime",
    category: "llm",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "Intl Token Plan / platform billing (verify live on signup)",
    pricingNotes: "English site sensenova.ai; OpenAI-compatible token API reported at token.sensenova.ai",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.sensenova.ai",
    tip: "Use the international SenseNova site (sensenova.ai) and Token Plan — not only the .cn portal.",
    notes: "Confirm account creation and model availability from your country; CN and intl portals may differ.",
  },
  {
    id: "stepfun",
    name: "StepFun (阶跃星辰)",
    company: "StepFun",
    category: "llm",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "Open Platform / Step Plan billing on intl site (verify live)",
    pricingNotes: "English Open Platform at platform.stepfun.ai; OpenAI-compatible API at api.stepfun.ai",
    lastVerified: "2026-10-17",
    sourceUrl: "https://platform.stepfun.ai/",
    tip: "Sign up on platform.stepfun.ai and use base_url https://api.stepfun.ai/v1 with your API key.",
  },
  {
    id: "baichuan",
    name: "Baichuan",
    company: "Baichuan Intelligence",
    category: "llm",
    status: "china-only",
    needsChinesePhone: "yes",
    paymentOverseas: "Mainland platform only (CN phone + identity verification)",
    pricingNotes: "Hosted API/platform ToS limits use to mainland China; open-weight models remain available for self-host",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.baichuan-ai.com",
    tip: "For overseas use, prefer open weights (Hugging Face / GitHub) or a third-party host — do not rely on the hosted platform.",
    notes: "platform.baichuan-ai.com user agreement §12.4: product limited to mainland China use; signup is phone+SMS.",
  },
  {
    id: "minimax-agent",
    name: "MiniMax (Agent / API)",
    company: "MiniMax",
    category: "agent",
    status: "available",
    needsChinesePhone: "no",
    paymentOverseas: "Token plans, USD billing on intl platform",
    pricingNotes: "Same lab as Hailuo; text/agent/voice stack on international MiniMax hub",
    lastVerified: "2026-10-17",
    sourceUrl: "https://www.minimax.io",
    tip: "Use the international MiniMax hub / API docs for agent and LLM access alongside Hailuo video.",
  },
];

export const statusLabel: Record<AccessStatus, string> = {
  available: "Available",
  restricted: "Restricted",
  "china-only": "China-only",
  unknown: "Unknown",
};

export const categoryLabel: Record<Category, string> = {
  video: "Video",
  llm: "LLM",
  image: "Image",
  agent: "Agent",
};
