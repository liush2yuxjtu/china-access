import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold text-zinc-950">
            CA
          </span>
          <span>China Access</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-400">
          <Link href="/#tracker" className="hover:text-zinc-100">
            Tracker
          </Link>
          <Link href="/#radar" className="hover:text-zinc-100">
            Radar
          </Link>
          <Link href="/#newsletter" className="hover:text-zinc-100">
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © 2026 China Access · Independent tracker · Not affiliated with
          product vendors
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
  );
}
