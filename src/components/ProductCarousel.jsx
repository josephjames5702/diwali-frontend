import { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductCarousel({ id, title, products, onAddToCart }) {
  const trackRef = useRef(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollPrevious(track.scrollLeft > 1);
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    const frameId = window.requestAnimationFrame(updateControls);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [updateControls]);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild;
    if (!firstCard) return;

    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const controlClass = (enabled) =>
    `flex h-[34px] w-[34px] items-center justify-center rounded-full border transition-colors active:scale-95 ${
      enabled
        ? 'border-[#0B2240] bg-white text-[#0B2240] hover:bg-[#0B2240] hover:text-white cursor-pointer'
        : 'border-[#DDE1E7] bg-white text-[#B0B7C3] opacity-60 cursor-not-allowed pointer-events-none'
    }`;

  return (
    <section id={id} className="mx-auto max-w-[1120px] scroll-mt-4 px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-[28px] font-black tracking-tight text-[#121417] sm:text-[32px]">
          {title}
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label={`Scroll ${title} left`}
            className={controlClass(canScrollPrevious)}
            disabled={!canScrollPrevious}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label={`Scroll ${title} right`}
            className={controlClass(canScrollNext)}
            disabled={!canScrollNext}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateControls}
        className="scrollbar-none flex snap-x snap-mandatory scroll-smooth gap-[14px] overflow-x-auto pe-8 min-[760px]:gap-[18px] sm:pe-12"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="w-[68%] shrink-0 snap-start min-[760px]:w-[calc(23.5%-14px)]"
          >
            <ProductCard item={item} onAddToCart={onAddToCart} compact />
          </div>
        ))}
        <div className="w-[68%] shrink-0 snap-start min-[760px]:w-[calc(23.5%-14px)]">
          <div className="flex h-full flex-col justify-between">
            <a
              href="#products"
              className="flex flex-1 w-full flex-col items-center justify-center rounded-[14px] border-[1.5px] border-dashed border-[#8EA4C2] p-6 text-center"
            >
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2240] text-[#0B2240] transition-all hover:bg-[#0B2240] hover:text-white">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[14px] font-bold text-[#0B2240] underline">View all</span>
              <span className="mt-1 text-[12px] font-normal text-[#1F6FB2]">{title}</span>
            </a>
            <a
              href="#products"
              className="mt-3 flex w-full items-center justify-center rounded-full bg-[#FFC94A] py-2.5 text-[13px] font-bold text-[#0B2240] transition-colors hover:bg-[#FFE082]"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
