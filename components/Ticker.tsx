const ITEMS = [
  "The pop-girl renaissance",
  "Quiet luxury is over",
  "Everyone's obsessed with this podcast",
  "Y2K is back (again)",
  "The internet's new favourite director",
  "Charli energy all summer",
  "Who wore it worst, on purpose",
];

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section
      id="ticker"
      className="glass-dark relative w-full overflow-hidden border-y-2 border-ink py-4"
    >
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6">
            <span className="font-display font-bold text-sm md:text-base text-paper whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
          </div>
        ))}
      </div>
    </section>
  );
}
