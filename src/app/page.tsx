import { NewsletterForm } from "@/components/NewsletterForm";
import { ProductTable } from "@/components/ProductTable";
import { Radar } from "@/components/Radar";
import { products } from "@/data/products";

const available = products.filter((p) => p.status === "available").length;
const restricted = products.filter((p) => p.status === "restricted").length;
const chinaOnly = products.filter((p) => p.status === "china-only").length;
const unknown = products.filter((p) => p.status === "unknown").length;

export default function HomePage() {
  return (
    <>
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold text-zinc-950">
              CA
            </span>
            <span>China Access</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-zinc-400">
            <a href="#tracker" className="hover:text-zinc-100">
              Tracker
            </a>
            <a href="#radar" className="hover:text-zinc-100">
              Radar
            </a>
            <a href="#newsletter" className="hover:text-zinc-100">
              Newsletter
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-zinc-800/80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">
              For developers & AI video creators outside China
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              Can Chinese AI products be used overseas?
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              China Access is an English tracker of overseas availability for
              Chinese video, LLM, image, and agent products — status, whether you
              need a Chinese phone, payment notes, and short how-tos. Seed data
              verified{" "}
              <time dateTime="2026-10-17">2026-10-17</time>. Facts can change;
              always re-check the source.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Stat label="Tracked" value={String(products.length)} />
              <Stat label="Available" value={String(available)} tone="good" />
              <Stat label="Restricted" value={String(restricted)} tone="warn" />
              <Stat label="China-only" value={String(chinaOnly)} tone="bad" />
              <Stat label="Unknown" value={String(unknown)} />
            </div>
          </div>
        </section>

        <section id="tracker" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Access tracker
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Status meanings: <strong className="text-zinc-200">Available</strong>{" "}
              — workable intl signup/payment path;{" "}
              <strong className="text-zinc-200">Restricted</strong> — partial,
              region-limited, or awkward billing;{" "}
              <strong className="text-zinc-200">China-only</strong> — no practical
              overseas consumer path;{" "}
              <strong className="text-zinc-200">Unknown</strong> — not confidently
              verified (we do not invent facts).
            </p>
          </div>
          <ProductTable />
        </section>

        <section
          id="radar"
          className="border-y border-zinc-800/80 bg-zinc-900/20"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                This week in China AI
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Release radar — hand-curated notes on launches that matter for
                overseas users. Not a full news feed (yet).
              </p>
            </div>
            <Radar />
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Newsletter (coming soon)
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Occasional English digests: access changes, new overseas doors, and
              pricing gotchas. MVP form is UI-only — no list provider connected
              yet (Buttondown / Resend placeholder later).
            </p>
            <div className="mt-6 max-w-lg">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 China Access · Independent tracker ·
            Not affiliated with product vendors
          </p>
          <p>
            <a
              href="mailto:hello@chinaaccess.dev"
              className="text-zinc-300 hover:text-sky-300"
            >
              Sponsor / list your product
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "good" | "warn" | "bad";
}) {
  const color =
    tone === "good"
      ? "text-emerald-300"
      : tone === "warn"
        ? "text-amber-300"
        : tone === "bad"
          ? "text-rose-300"
          : "text-zinc-100";
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
      <div className={`text-xl font-semibold ${color}`}>{value}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}
