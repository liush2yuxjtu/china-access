import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OfficialLink } from "@/components/OfficialLink";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { StatusBadge } from "@/components/StatusBadge";
import { categoryLabel, products, statusLabel } from "@/data/products";
import {
  phoneSentence,
  productBreadcrumbJsonLd,
  productFaqJsonLd,
  productFaqs,
  productHeadline,
  productMetaDescription,
  productMetaTitle,
  radarForProduct,
  relatedProducts,
  statusMeaning,
  getProduct,
} from "@/lib/product-page";
import { ogImage, productPath, productUrl, siteName } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return {
      title: "Page not found",
      robots: { index: false, follow: false },
    };
  }

  const title = productMetaTitle(product);
  const description = productMetaDescription(product);
  const url = productUrl(product.id);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const faqs = productFaqs(product);
  const radar = radarForProduct(product);
  const related = relatedProducts(product);
  const facts = [
    {
      label: "Overseas status",
      value: `${statusLabel[product.status]} — ${statusMeaning[product.status]}`,
    },
    { label: "Chinese phone", value: phoneSentence(product) },
    { label: "Payment", value: product.paymentOverseas },
    { label: "Pricing notes", value: product.pricingNotes },
    { label: "Tip", value: product.tip },
    { label: "Last verified", value: product.lastVerified, time: true },
  ];

  return (
    <>
      <JsonLd data={productFaqJsonLd(product)} />
      <JsonLd data={productBreadcrumbJsonLd(product)} />
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-zinc-100">
                  China Access
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-200" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-sky-400">
            {categoryLabel[product.category]} · {product.company}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <StatusBadge status={product.status} />
            <span className="text-sm text-zinc-500">
              Verified{" "}
              <time dateTime={product.lastVerified}>{product.lastVerified}</time>
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {productHeadline(product)}
          </h1>

          <dl className="mt-8 divide-y divide-zinc-800 overflow-hidden rounded-2xl border border-zinc-800">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 bg-zinc-950/40 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"
              >
                <dt className="text-sm text-zinc-500">{fact.label}</dt>
                <dd className="text-sm leading-relaxed text-zinc-200">
                  {fact.time ? (
                    <time dateTime={product.lastVerified}>{fact.value}</time>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {product.notes ? (
            <p className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-amber-200">
              {product.notes}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <OfficialLink
              slug={product.id}
              href={product.sourceUrl}
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-400"
            >
              Official site
            </OfficialLink>
            <Link
              href="/#tracker"
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500"
            >
              Back to tracker
            </Link>
          </div>
          <p className="mt-3 break-all text-xs text-zinc-500">
            {product.sourceUrl}
          </p>

          <section className="mt-14" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              FAQ
            </h2>
            <div className="mt-6 divide-y divide-zinc-800 rounded-2xl border border-zinc-800">
              {faqs.map((faq) => (
                <div key={faq.question} className="px-4 py-4 sm:px-5">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {radar.length > 0 ? (
            <section className="mt-14" aria-labelledby="radar-heading">
              <h2
                id="radar-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Related radar
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {radar.map((item) => (
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
                    <h3 className="text-base font-semibold text-zinc-100">
                      {item.title}
                    </h3>
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
            </section>
          ) : null}

          {related.products.length > 0 ? (
            <section className="mt-14" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                {related.heading}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {related.products.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={productPath(item.id)}
                      className="block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-600"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-medium text-zinc-100">
                            {item.name}
                          </div>
                          <div className="text-xs text-zinc-500">
                            {item.company} · {categoryLabel[item.category]}
                          </div>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {item.tip}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
