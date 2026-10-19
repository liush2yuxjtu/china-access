"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

function destinationHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export function OfficialLink({
  slug,
  href,
  className,
  children,
}: {
  slug: string;
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        track("outbound_click", {
          product_slug: slug,
          destination_host: destinationHost(href),
        })
      }
    >
      {children}
    </a>
  );
}
