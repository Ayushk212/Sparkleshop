export default function PromoStrip() {
  return (
    <div className="bg-brand-accent-light border-y border-brand-accent/20 py-10 overflow-hidden">
      <div className="flex w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="text-xl font-display font-bold italic text-brand-accent whitespace-nowrap">
              GRAND OPENING SALE
            </span>
            <span className="text-2xl">✨</span>
            <span className="text-xl font-display font-bold italic text-brand-accent whitespace-nowrap">
              UP TO 25% OFF STOREWIDE
            </span>
            <span className="text-2xl">✨</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
