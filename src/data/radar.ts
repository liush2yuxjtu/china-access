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
    id: "deepseek-v41-flash-1017",
    date: "2026-10-17",
    title: "DeepSeek V4.1-Flash-1017 and Search/Fetch API",
    summary:
      "deepseek-flash now points at DeepSeek-V4.1-Flash-1017. Search & Fetch is open at $0.75 per 1k successful calls; server-side tool calls via DeepSeek Harness, Claude Code, and Codex stay free until 2026-10-31 16:00 UTC. Changelog: https://api-docs.deepseek.com/updates",
    tag: "LLM",
    url: "https://api-docs.deepseek.com/news/news261017/",
  },
  {
    id: "kling-4-mcp",
    date: "2026-10-15",
    title: "Kling 4.0 GA, with international MCP and CLI",
    summary:
      "Kling 4.0 is generally available (up to ~30s, multi-reference and keyframes). International accounts can use MCP at https://kling.ai/mcp and the CLI @klingai/cli-global; enterprise/developer REST API access is still marked coming soon. Guide: https://kling.ai/quickstart/kling-4-model-user-guide · Workflow: https://kling.ai/blog/kling-mcp-cinematic-performance-workflow",
    tag: "Video",
    url: "https://x.com/Kling_ai/status/2110747537187709424",
  },
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
