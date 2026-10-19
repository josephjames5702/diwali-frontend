import { TICKER_ITEMS } from '../data/storeData';

export default function TopTicker() {
  return (
    <div
      aria-label="Store offers"
      className="overflow-hidden whitespace-nowrap border-b border-[#E07E0B] bg-[#F58A1F] px-4 py-2 font-['Figtree',sans-serif] text-xs font-bold text-[#0B2240]"
    >
      <div className="ticker-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? 'true' : undefined}
            className="flex shrink-0 items-center"
          >
            {TICKER_ITEMS.map((item, index) => (
              <span key={`${copy}-${index}`} className="inline-flex items-center">
                <span>{item.replace(/^✦\s*/, '')}</span>
                <span aria-hidden="true" className="mx-3 text-xs font-bold text-[#0B2240]">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}