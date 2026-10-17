# China Access

English website that tracks whether **Chinese AI products** can be used **outside China**.

Audience: developers and AI video creators who want a clear answer on overseas access, Chinese phone requirements, payment methods, and short how-tos.

Live MVP: deploy via Vercel from this repo.

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

## Newsletter

The signup form is **client-side only** for MVP. It does not POST to a provider.

To connect a real list later (free tiers preferred):

- [Buttondown](https://buttondown.com)
- [Resend Audiences](https://resend.com)
- [Loops](https://loops.so)

Replace the submit handler in `src/components/NewsletterForm.tsx`.

## Sponsor / contact

Footer mailto: `hello@chinaaccess.dev` (placeholder).

## License

Private / owner-controlled unless otherwise stated.
