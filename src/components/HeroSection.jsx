import { useEffect, useState } from 'react';

export default function HeroSection() {
  const bulbCount = 26;
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#14335C_0%,#0B2240_60%)] px-4 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-10">
        <svg
          className="absolute inset-0 h-7 w-full"
          viewBox="0 0 1000 28"
          preserveAspectRatio="none"
        >
          <path d="M0 1 Q500 27 1000 1" fill="none" stroke="rgba(253, 230, 138, 0.25)" />
        </svg>
        {Array.from({ length: bulbCount }, (_, index) => {
          const position = (index + 0.5) / bulbCount;
          const wireY = 1 + 26 * (1 - (2 * position - 1) ** 2);

          return (
            <span
              key={index}
              className="absolute flex -translate-x-1/2 flex-col items-center"
              style={{ left: `${position * 100}%`, top: `${wireY}px` }}
            >
              <span className="h-1.5 w-[1px] bg-amber-100/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD23F] shadow-[0_0_8px_#FFC94A]" />
            </span>
          );
        })}
      </div>
      <div className="relative z-10 mx-auto max-w-[900px] pt-[56px] pb-[34px] text-center">
        <h3 className="mb-2 font-['Yatra_One',cursive] text-xl tracking-wide text-[#FFC94A] sm:text-[24px]">
          Shubh Deepavali
        </h3>
        <h2 className="select-none whitespace-nowrap font-['Bricolage_Grotesque','Arial_Black',system-ui,sans-serif] text-[clamp(46px,11vw,104px)] font-extrabold leading-[0.92] tracking-[-0.04em] mt-[6px] mb-[12px]">
          <span className="text-[#FFFFFF]">Diwali</span>{" "}
          <span className="text-[#F7941D]">Sale</span>
        </h2>

        <div aria-hidden="true" className="my-6 flex items-center justify-center gap-5 sm:gap-7">
          {Array.from({ length: 5 }, (_, index) => {
            const gradientId = `diya-clay-${index}`;
            const flameId = `diya-flame-${index}`;
            const glowId = `diya-glow-${index}`;

            return (
              <svg key={index} width="52" height="38" viewBox="0 0 52 38" className="shrink-0">
                <defs>
                  <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C6531A" />
                    <stop offset="100%" stopColor="#913304" />
                  </linearGradient>
                  <linearGradient id={flameId} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="55%" stopColor="#FFF8C5" />
                    <stop offset="100%" stopColor="#FFD23F" />
                  </linearGradient>
                  <radialGradient id={glowId}>
                    <stop offset="0%" stopColor="#FFF2A6" stopOpacity="0.9" />
                    <stop offset="55%" stopColor="#FF8C00" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                  </radialGradient>
                  <filter id={`diya-flame-filter-${index}`} x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4.5" />
                  </filter>
                </defs>
                <ellipse cx="26" cy="12" rx="13" ry="12" fill={`url(#${glowId})`} />
                <ellipse
                  cx="26"
                  cy="10"
                  rx="4"
                  ry="7"
                  fill="#FF8C00"
                  filter={`url(#diya-flame-filter-${index})`}
                />
                <path
                  d="M26 3C21 9 22 13 26 17c4-4 5-8 0-14Z"
                  fill={`url(#${flameId})`}
                  stroke="#FFC94A"
                  strokeWidth="0.6"
                />
                <path d="M7 24Q26 16 45 24L40 33Q26 39 12 33Z" fill={`url(#${gradientId})`} />
                <ellipse cx="26" cy="24" rx="19" ry="4" fill="#D96B2C" />
                <path d="M11 25Q26 31 41 25" fill="none" stroke="#F08A4B" strokeWidth="1" opacity="0.7" />
              </svg>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#1E4375] bg-[#0E284D]/90 px-4 py-2 text-xs shadow-inner sm:px-5 sm:text-sm">
          <span className="mr-1 font-['Figtree',sans-serif] font-medium text-slate-300">Diwali is in</span>
          <span className="rounded-[4px] bg-[#FFC94A] px-2.5 py-0.5 font-black text-[#0B2240]">{timeRemaining.days}d</span>
          <span className="rounded-[4px] bg-[#FFC94A] px-2.5 py-0.5 font-black text-[#0B2240]">{timeRemaining.hours}h</span>
          <span className="rounded-[4px] bg-[#FFC94A] px-2.5 py-0.5 font-black text-[#0B2240]">{timeRemaining.minutes}m</span>
        </div>
      </div>
    </section>
  );
}

function getTimeRemaining() {
  const targetTime = new Date('2026-11-08T00:00:00+05:30').getTime();
  const totalSeconds = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
  };
}