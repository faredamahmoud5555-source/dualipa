import { VIBES } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VibeGrid from "@/components/VibeGrid";

export const metadata = {
  title: "Discover the Vibe — PULP.",
};

export default function VibeIndexPage() {
  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
            Discover the vibe
          </span>
          <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-2xl">
            Forget categories.
            <br />
            <span className="font-serif italic font-normal text-electric">
              Pick a feeling.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-ink/60 text-base md:text-lg">
            Every aesthetic gets its own complete guide: books, films, music,
            fashion, places and quotes, all curated to match the mood.
          </p>

          <div className="mt-16">
            <VibeGrid vibes={VIBES} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
