import { notFound } from "next/navigation";
import Link from "next/link";
import { ITEMS, TYPE_LABELS, cultureGraph, VIBES } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SaveButton from "@/components/SaveButton";
import CultureGraph from "@/components/CultureGraph";

import GraphHero from "@/components/GraphHero";

export function generateStaticParams() {
  return ITEMS.map((item) => ({ slug: item.id }));
}

export default async function GraphPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = ITEMS.find((i) => i.id === slug);
  if (!item) notFound();

  const graph = cultureGraph(item);
  const vibes = VIBES.filter((v) => item.vibes.includes(v.slug));

  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-2 text-ink/50 hover:text-ink transition-colors mb-8"
          >
            ← Back to PULP.
          </Link>

          <div
            className="relative rounded-5xl border-2 border-ink overflow-hidden mb-6"
            style={{ background: item.gradient }}
          >
            <div className="halftone absolute inset-0 opacity-[0.12] mix-blend-overlay" />
            <div className="relative p-8 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="eyebrow rounded-full bg-paper/90 border-2 border-ink px-4 py-1.5 text-ink">
                  {TYPE_LABELS[item.type]}
                </span>
                <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-paper max-w-2xl">
                  {item.title}
                </h1>
                <p className="mt-3 text-paper/80 text-base md:text-lg">
                  {item.subtitle}
                </p>
                {item.blurb && (
                  <p className="mt-5 max-w-xl text-paper/90 text-sm md:text-base">
                    {item.blurb}
                  </p>
                )}
              </div>
             <GraphHero item={item} />



            </div>
          </div>

          {vibes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-16">
              {vibes.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vibe/${v.slug}`}
                  className="eyebrow rounded-full border-2 border-ink px-4 py-1.5 text-ink bg-lavender hover:bg-neon transition-colors duration-200"
                >
                  {v.emoji} {v.name}
                </Link>
              ))}
            </div>
          )}

          <div className="mb-10">
            <h2 className="font-display font-black text-3xl md:text-4xl text-ink">
              Where this leads next
            </h2>
            <p className="mt-2 text-ink/60 max-w-lg">
              Nothing on PULP. is the end of the road. Here&apos;s everything
              connected to {item.title}&nbsp;&mdash; keep clicking.
            </p>
          </div>

          <CultureGraph graph={graph} />
        </div>
      </main>
      <Footer />
    </>
  );
}
