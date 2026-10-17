import type { AccessStatus } from "@/data/products";
import { statusLabel } from "@/data/products";

const styles: Record<AccessStatus, string> = {
  available:
    "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
  restricted:
    "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30",
  "china-only":
    "bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30",
  unknown:
    "bg-zinc-500/15 text-zinc-300 ring-1 ring-zinc-500/30",
};

export function StatusBadge({ status }: { status: AccessStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${styles[status]}`}
    >
      {statusLabel[status]}
    </span>
  );
}
