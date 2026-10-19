const DiyaSymbol = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 60 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
    aria-hidden="true"
  >
    <defs>
      {/* Outer ambient glow */}
      <filter id="diyaGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      {/* Flame gradient */}
      <radialGradient id="flameInner" cx="50%" cy="80%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#FFE066" />
        <stop offset="70%" stopColor="#FF7A00" />
        <stop offset="100%" stopColor="#E53E00" />
      </radialGradient>
      {/* Ambient flame halo */}
      <radialGradient id="flameHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFAE00" stopOpacity="0.75" />
        <stop offset="60%" stopColor="#FF6A00" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
      </radialGradient>
      {/* Clay bowl gradient */}
      <linearGradient id="clayBase" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B34B16" />
        <stop offset="100%" stopColor="#702905" />
      </linearGradient>
    </defs>

    {/* Radiant background halo behind flame */}
    <circle cx="30" cy="17" r="16" fill="url(#flameHalo)" />

    {/* Teardrop flame */}
    <path
      d="M30 4 C31.5 10, 36 15, 36 21 C36 25 33.3 27 30 27 C26.7 27, 24 25, 24 21 C24 15, 28.5 10, 30 4 Z"
      fill="url(#flameInner)"
      filter="url(#diyaGlow)"
    />

    {/* Terracotta Diya body */}
    <path
      d="M8 26 C13 39, 47 39, 52 26 C53 23.5, 49 23, 46 23 C36 23, 24 23, 14 23 C11 23, 7 23.5, 8 26 Z"
      fill="url(#clayBase)"
    />
    {/* Diya top rim rim highlight */}
    <ellipse cx="30" cy="24.5" rx="20" ry="2" fill="#D36224" />
  </svg>
);

const GiftBox = ({ color }) => (
  <svg
    width="34"
    height="38"
    viewBox="0 0 34 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0" y="7" width="34" height="31" rx="4" fill={color} />
    <rect x="14" y="7" width="6" height="31" fill="#FFC94A" />
    <rect x="0" y="18" width="34" height="6" fill="#FFC94A" />
    <path
      d="M14 8 C9 7, 7 2, 11 2 C14 2, 16 5, 17 8 Z"
      fill="#FFC94A"
    />
    <path
      d="M20 8 C25 7, 27 2, 23 2 C20 2, 18 5, 17 8 Z"
      fill="#FFC94A"
    />
    <circle cx="17" cy="8" r="2.5" fill="#FFE082" />
  </svg>
);

export default function DiwaliBanners() {
  return (
    <section aria-label="Festive Promotions" className="w-full py-6">
      <div className="max-w-[760px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-3 sm:gap-[14px]">
          {/* Card 1: Exclusive Diwali Collection */}
          <a
            href="#diwali-collection"
            aria-label="Shop the Diwali collection"
            className="block rounded-[24px] sm:rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC94A]"
          >
          <article className="aspect-square rounded-[24px] sm:rounded-[28px] p-4 sm:p-7 relative overflow-hidden flex flex-col justify-between bg-[#0B2240] shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
            {/* Dot Matrix Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #8EA4C2 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />

            {/* Top Right Floating Diyas */}
            <div className="flex justify-end items-center gap-2 relative z-10">
              <DiyaSymbol />
              <DiyaSymbol />
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4">
              <div>
                <span className="font-yatra text-[#FFC94A] text-sm sm:text-base tracking-wide block">
                  New for Deepavali
                </span>
                <h2 className="font-display text-white text-[28px] sm:text-[32px] font-extrabold leading-tight mt-1 tracking-tight">
                  Exclusive Diwali<br />Collection
                </h2>
              </div>

              <span
                className="bg-[#FFC94A] hover:bg-[#ffd56b] active:scale-95 text-[#0B2240] font-bold text-xs sm:text-sm px-5 py-2 rounded-full tracking-tight cursor-pointer shadow-sm transition-all"
              >
                Shop the collection
              </span>
            </div>
          </article>
          </a>

          {/* Card 2: Flash Sale Gift Box */}
          <a
            href="#flash-deals"
            aria-label="Shop Flash Deals"
            className="block rounded-[24px] sm:rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2240]"
          >
          <article
            className="aspect-square rounded-[24px] sm:rounded-[28px] p-4 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background:
                'radial-gradient(circle at 82% 20%, #FFA834 0%, #FA911E 45%, #E66500 100%)',
            }}
          >
            {/* Top Right Gift Boxes with + symbol */}
            <div className="flex justify-end items-center gap-2 relative z-10 pt-1">
              <GiftBox color="#0B2240" />
              <span className="text-[#0B2240] font-black text-2xl sm:text-2xl leading-none select-none">
                +
              </span>
              <GiftBox color="#C8102E" />
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4">
              <div>
                <span className="font-yatra text-[#0B2240] text-sm sm:text-base tracking-wide block">
                  Flash Sale
                </span>
                <h2 className="font-display text-[#0B2240] text-[28px] sm:text-[32px] font-extrabold leading-tight mt-1 tracking-tight">
                  Shop ₹999,<br />get a free gift
                </h2>
              </div>

              <span
                className="bg-[#0B2240] hover:bg-[#14335C] active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full tracking-tight cursor-pointer shadow-sm transition-all"
              >
                Shop Flash Deals
              </span>
            </div>
          </article>
          </a>
        </div>
      </div>
    </section>
  );
}