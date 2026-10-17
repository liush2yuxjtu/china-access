export interface RadarItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
  url?: string;
}

/** Hand-written “This week in China AI” seed items (not auto-scraped). */
export const radarItems: RadarItem[] = [
  {
    id: "seedance-25",
    date: "2026-07-31",
    title: "Seedance 2.5 rolls out on Dreamina",
    summary:
      "ByteDance’s Seedance 2.5 video+audio model began subscriber rollout on Dreamina across Europe, Asia, Middle East, and South America — CapCut/Dreamina remain the overseas path vs Jimeng in China.",
    tag: "Video",
    url: "https://dreamina.capcut.com/resource/seedance-2-5-launch",
  },
  {
    id: "deepseek-v4",
    date: "2026-08",
    title: "DeepSeek V4 API docs emphasize dual compatibility",
    summary:
      "Official DeepSeek docs highlight V4-Pro / Flash with OpenAI- and Anthropic-compatible endpoints. Overseas friction remains more about account funding than IP blocks.",
    tag: "LLM",
    url: "https://api-docs.deepseek.com/quick_start/pricing/",
  },
  {
    id: "kling-intl",
    date: "2026-08",
    title: "Kling intl continues via kling.ai (Singapore entity)",
    summary:
      "International creators keep using kling.ai with email/Google/Apple signup and USD Stripe billing, separate from mainland klingai.com credits.",
    tag: "Video",
    url: "https://kling.ai",
  },
  {
    id: "qwen-studio",
    date: "2026-09",
    title: "Qwen Studio (chat.qwen.ai) stays the overseas chat door",
    summary:
      "Alibaba’s English-facing Qwen Studio supports OAuth (Google/GitHub/Apple) without a mainland phone — distinct from qianwen.com / Tongyi domestic login.",
    tag: "LLM",
    url: "https://chat.qwen.ai",
  },
  {
    id: "minimax-h3",
    date: "2026-07",
    title: "MiniMax video stack pushes open-weight direction",
    summary:
      "Reporting around MiniMax’s newer video line (Hailuo / H3) highlighted hosted access plus plans for open weights — relevant for teams avoiding China-hosted inference.",
    tag: "Video",
    url: "https://hailuoai.video",
  },
];
