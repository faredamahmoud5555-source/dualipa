import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorldMap from "@/components/WorldMap";

export const metadata = { title: "Explore by City — PULP." };

export default function MapPage() {
  return (
    <>
      <Navigation />
      <main className="bg-paper min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow rounded-full bg-lavender px-4 py-1.5 border-2 border-ink">
            Explore by city
          </span>
          <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] text-ink max-w-2xl">
            Culture has
            <br />
            <span className="font-serif italic font-normal text-electric">
              a postcode.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-ink/60 text-base md:text-lg">
            Tap a city to pull up its bookstores, coffee shops and the
            stories that were written there.
          </p>

          <div className="mt-16">
            <WorldMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
