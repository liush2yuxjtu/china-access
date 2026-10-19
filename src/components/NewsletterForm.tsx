"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";

/**
 * Newsletter signup.
 *
 * Wire-up (preferred: Buttondown free tier):
 *   Set NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION in Vercel / .env.local to your
 *   public embed-subscribe URL, e.g.
 *   https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME
 *
 * Loops alternative (same env var):
 *   https://app.loops.so/api/newsletter-form/YOUR_FORM_ID
 *
 * TODO(owner): create a free Buttondown account and paste the embed-subscribe
 * URL into Vercel env as NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION. Do not commit
 * secrets; the embed URL only needs your public username / form id.
 */
const FORM_ACTION =
  process.env.NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION?.trim() || "";

const isButtondown =
  FORM_ACTION.includes("buttondown.com") ||
  FORM_ACTION.includes("buttondown.email");

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  // Provider not configured: keep emails in-browser only.
  if (!FORM_ACTION) {
    function onSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (!email.trim()) return;
      track("newsletter_submit");
      setDone(true);
      setEmail("");
    }

    if (done) {
      return (
        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thanks — mailing list is not connected yet. Your email stayed in this
          browser only for now.
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

  // Real provider: native HTML POST (Buttondown requires a real form submit,
  // not fetch, so CAPTCHA / double-opt-in redirects work).
  return (
    <form
      action={FORM_ACTION}
      method="post"
      target="_blank"
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={() => {
        track("newsletter_submit");
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="w-full flex-1 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20"
      />
      {isButtondown ? (
        <input type="hidden" name="embed" value="1" />
      ) : null}
      <button
        type="submit"
        className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
      >
        Notify me
      </button>
    </form>
  );
}
