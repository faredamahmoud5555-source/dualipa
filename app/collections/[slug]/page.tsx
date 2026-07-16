import { notFound } from "next/navigation";
import Link from "next/link";
import { COLLECTIONS, getItem } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) notFound();

  const items = collection.itemIds
    .map((id) => getItem(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof getItem>>[];

  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/collections"
            className="eyebrow inline-flex items-center gap-2 text-ink/50 hover:text-ink transition-colors mb-8"
          >
            ← All collections
          </Link>

          <div
            className="relative rounded-5xl border-2 border-ink overflow-hidden mb-16 p-8 md:p-14"
            style={{ background: collection.gradient }}
          >
            <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />
            <h1 className="relative font-display font-black text-4xl md:text-6xl leading-[0.95] text-paper max-w-2xl">
              {collection.title}
            </h1>
            <p className="relative mt-4 max-w-lg text-paper/85 text-base md:text-lg">
              {collection.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
