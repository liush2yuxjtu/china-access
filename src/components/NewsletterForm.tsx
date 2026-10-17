"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // MVP: client-side only. Hook up Buttondown / Resend / Loops later.
    // Placeholder: do not POST anywhere yet.
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
        Thanks — we&apos;ll add a real mailing list soon. Your email stayed in
        this browser only for now.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full flex-1 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20"
      />
      <button
        type="submit"
        className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
      >
        Notify me
      </button>
    </form>
  );
}
