import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on China Access.",
  robots: { index: false, follow: false },
  // Drop the homepage canonical inherited from the root layout.
  alternates: {},
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-sky-400">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
        This URL is not on China Access. Open the homepage tracker to find a
        product page.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-400"
      >
        Back to the tracker
      </Link>
    </main>
  );
}
