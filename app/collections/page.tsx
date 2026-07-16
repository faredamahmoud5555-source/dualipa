import Link from "next/link";
import { COLLECTIONS } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = { title: "Curated Collections — PULP." };

export default function CollectionsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
            Curated collections
          </span>
          <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-2xl">
            Reading lists,
            <br />
            <span className="font-serif italic font-normal text-bubblegum">
              already made.
            </span>
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {COLLECTIONS.map((collection) => (
              <Link key={collection.slug} href={`/collections/${collection.slug}`}>
                <div
                  className="group relative rounded-4xl border-2 border-ink overflow-hidden p-8 md:p-10 min-h-[220px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
                  style={{ background: collection.gradient }}
                >
                  <div className="halftone absolute inset-0 opacity-10 mix-blend-overlay" />
                  <span className="eyebrow relative rounded-full bg-paper/85 border-2 border-ink px-3 py-1 text-ink w-fit">
                    {collection.itemIds.length} picks
                  </span>
                  <div className="relative">
                    <h2 className="font-display font-black text-2xl md:text-3xl text-paper leading-tight">
                      {collection.title}
                    </h2>
                    <p className="mt-2 text-paper/80 text-sm md:text-base">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
