import { radarItems } from "@/data/radar";

export function Radar() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {radarItems.map((item) => (
        <article
          key={item.id}
          className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-sky-300">
              {item.tag}
            </span>
            <time className="text-xs text-zinc-500">{item.date}</time>
          </div>
          <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            {item.summary}
          </p>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Source →
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
