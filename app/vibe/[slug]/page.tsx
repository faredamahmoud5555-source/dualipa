import { notFound } from "next/navigation";
import Link from "next/link";
import { VIBES, itemsByVibe, groupByType, TYPE_LABELS } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";

export function generateStaticParams() {
  return VIBES.map((v) => ({ slug: v.slug }));
}

export default async function VibePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vibe = VIBES.find((v) => v.slug === slug);
  if (!vibe) notFound();

  const items = itemsByVibe(slug);
  const groups = groupByType(items);

  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/vibe"
            className="eyebrow inline-flex items-center gap-2 text-ink/50 hover:text-ink transition-colors mb-8"
          >
            ← All vibes
          </Link>

          <div
            className="relative rounded-5xl border-2 border-ink overflow-hidden mb-16"
            style={{ background: vibe.gradient }}
          >
            <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />
            <div className="relative p-8 md:p-14">
              <span className="text-5xl md:text-6xl">{vibe.emoji}</span>
              <h1
                className={`mt-4 font-display font-black text-4xl md:text-6xl leading-[0.95] ${vibe.text}`}
              >
                {vibe.name}
              </h1>
              <p
                className={`mt-4 max-w-lg text-base md:text-lg ${vibe.text} opacity-85`}
              >
                {vibe.description}
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {groups.map((group) => (
              <div key={group.type}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-ink">
                    {TYPE_LABELS[group.type]}s
                  </h2>
                  <span className="h-px flex-1 bg-ink/15" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {group.items.map((item) => (
                    <ItemCard key={item.id} item={item} compact />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
