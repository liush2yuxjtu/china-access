"use client";

import { track } from "@vercel/analytics";
import { useMemo, useState } from "react";
import {
  products,
  categoryLabel,
  type AccessStatus,
  type Category,
  type Product,
} from "@/data/products";
import { StatusBadge } from "./StatusBadge";

function destinationHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function trackProductOutbound(product: Pick<Product, "id" | "sourceUrl">) {
  track("outbound_click", {
    product_slug: product.id,
    destination_host: destinationHost(product.sourceUrl),
  });
}

const statuses: Array<AccessStatus | "all"> = [
  "all",
  "available",
  "restricted",
  "china-only",
  "unknown",
];

const categories: Array<Category | "all"> = [
  "all",
  "video",
  "llm",
  "image",
  "agent",
];

export function ProductTable() {
  const [status, setStatus] = useState<AccessStatus | "all">("all");
  const [category, setCategory] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter((p) => {
      if (status !== "all" && p.status !== status) return false;
      if (category !== "all" && p.category !== category) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.company.toLowerCase().includes(query) ||
        p.tip.toLowerCase().includes(query)
      );
    });
  }, [status, category, q]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                status === s
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {s === "all" ? "All status" : s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                category === c
                  ? "bg-sky-500 text-zinc-950"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {c === "all" ? "All categories" : categoryLabel[c]}
            </button>
          ))}
        </div>
      </div>

      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products, companies, tips…"
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-sky-500/60 focus:ring-2 focus:ring-sky-500/20"
      />

      <p className="text-xs text-zinc-500">
        Showing {filtered.length} of {products.length} products · last verified
        seed date 2026-10-17 · do not treat as legal advice
      </p>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-2xl border border-zinc-800 md:block">
        <table className="min-w-full divide-y divide-zinc-800 text-left text-sm">
          <thead className="bg-zinc-900/90 text-xs uppercase tracking-wide text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Overseas</th>
              <th className="px-4 py-3 font-medium">CN phone?</th>
              <th className="px-4 py-3 font-medium">Payment</th>
              <th className="px-4 py-3 font-medium">Pricing notes</th>
              <th className="px-4 py-3 font-medium">Verified</th>
              <th className="px-4 py-3 font-medium">Tip</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/80 bg-zinc-950/40">
            {filtered.map((p) => (
              <tr key={p.id} className="align-top hover:bg-zinc-900/50">
                <td className="px-4 py-3">
                  <a
                    href={p.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-100 hover:text-sky-300"
                    onClick={() => trackProductOutbound(p)}
                  >
                    {p.name}
                  </a>
                  <div className="text-xs text-zinc-500">{p.company}</div>
                </td>
                <td className="px-4 py-3 text-zinc-300">
                  {categoryLabel[p.category]}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-4 py-3 capitalize text-zinc-300">
                  {p.needsChinesePhone}
                </td>
                <td className="max-w-[14rem] px-4 py-3 text-zinc-400">
                  {p.paymentOverseas}
                </td>
                <td className="max-w-[16rem] px-4 py-3 text-zinc-400">
                  {p.pricingNotes}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-zinc-500">
                  {p.lastVerified}
                </td>
                <td className="max-w-[16rem] px-4 py-3 text-zinc-300">
                  {p.tip}
                  {p.notes ? (
                    <div className="mt-1 text-xs text-amber-400/90">{p.notes}</div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-3 md:hidden">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-100 hover:text-sky-300"
                  onClick={() => trackProductOutbound(p)}
                >
                  {p.name}
                </a>
                <p className="text-xs text-zinc-500">
                  {p.company} · {categoryLabel[p.category]}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">CN phone?</dt>
                <dd className="capitalize text-zinc-200">{p.needsChinesePhone}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Payment</dt>
                <dd className="text-zinc-300">{p.paymentOverseas}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Pricing</dt>
                <dd className="text-zinc-300">{p.pricingNotes}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Tip</dt>
                <dd className="text-zinc-200">{p.tip}</dd>
              </div>
              {p.notes ? (
                <p className="text-xs text-amber-400/90">{p.notes}</p>
              ) : null}
              <p className="text-xs text-zinc-500">Verified {p.lastVerified}</p>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
