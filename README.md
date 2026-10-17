# China Access

English website that tracks whether **Chinese AI products** can be used **outside China**.

Audience: developers and AI video creators who want a clear answer on overseas access, Chinese phone requirements, payment methods, and short how-tos.

Live: [https://china-access.vercel.app](https://china-access.vercel.app)

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Static-friendly data in the repo (`src/data/`)
- No paid services required for the MVP

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update tracker data

Edit **`src/data/products.ts`**.

Each product has:

| Field | Meaning |
| --- | --- |
| `name` / `company` / `category` | Identity (`video` \| `llm` \| `image` \| `agent`) |
| `status` | `available` \| `restricted` \| `china-only` \| `unknown` |
| `needsChinesePhone` | `yes` \| `no` \| `sometimes` \| `unknown` |
| `paymentOverseas` | How overseas users pay (or why they cannot) |
| `pricingNotes` | CN vs intl notes when known |
| `lastVerified` | ISO date `YYYY-MM-DD` |
| `sourceUrl` | Canonical product / docs URL |
| `tip` | Short how-to for overseas users |
| `notes` | Optional caveat (use when sources conflict) |

**Rules**

1. Never invent access facts. If unsure, set `status: "unknown"` and say so in `notes`.
2. Update `lastVerified` when you re-check.
3. Prefer official product / docs URLs in `sourceUrl`.

## Update release radar

Edit **`src/data/radar.ts`** — hand-written items for “This week in China AI”.

## Newsletter (free tier)

The signup form posts to a **public subscribe endpoint** when configured. No paid plan is required for a tiny weekly list.

### Recommended: Buttondown (free for first 100 subscribers)

Best fit for a small “China AI weekly radar” newsletter: purpose-built editor/archives, and a public HTML embed that needs **only your username** (not a secret API key in the browser).

1. Create a free account at [https://buttondown.com](https://buttondown.com) (no card required for the free tier).
2. Copy your embed-subscribe URL:
   `https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME`
3. In Vercel → Project → Settings → Environment Variables, add:

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION` | `https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME` |

4. Redeploy. The form in `src/components/NewsletterForm.tsx` will POST to that URL (native HTML submit; required by Buttondown for CAPTCHA / opt-in).

**TODO(owner):** create the free Buttondown account and paste the embed-subscribe URL into Vercel env. Do **not** invent or commit credentials.

### Alternatives (also free to start)

| Provider | Free headroom | Wire-up | Notes |
| --- | --- | --- | --- |
| **Buttondown** | First **100** active subscribers | Public embed URL (username) | Newsletter-native; **recommended** for this MVP |
| **Loops** | Up to **1,000** subscribed contacts / 4k sends per 30 days | Public form endpoint URL | Put the Loops form URL in the **same** env var |
| **Resend Audiences** | **1,000** marketing contacts | Server-side `RESEND_API_KEY` + Audience ID | Needs an API route; more DIY for a weekly newsletter |

Loops form URL example (same env var):

`NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION=https://app.loops.so/api/newsletter-form/YOUR_FORM_ID`

If the env var is unset, the form stays client-only (email never leaves the browser).

### Connectors / plugins

No Buttondown, Loops, or Resend connector was available via SearchPlugins in this environment (tool not present in the agent catalog). Wire-up is env + form only.

## Sponsor / contact

Footer mailto: `hello@chinaaccess.dev` (placeholder).

## License

Private / owner-controlled unless otherwise stated.
