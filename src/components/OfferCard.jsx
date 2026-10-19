export default function OfferCard() {
  return (
    <section
      className="board"
      style={{
        background: 'linear-gradient(#0B2240 50%, #FFFFFF 50%)',
        paddingInline: '16px',
        paddingBlock: 0,
      }}
    >
      <div className="max-w-[1120px] mx-auto flex justify-center">
        <div className="w-full max-w-[540px]">
          <div className="bg-[linear-gradient(160deg,#FFB547,#F7941D_55%,#E9790B)] rounded-[16px] px-6 py-5 shadow-[0_0_0_3px_rgba(255,201,74,0.35)] flex flex-col items-center justify-center text-center gap-2.5">
            <h3 className="font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[36px] font-extrabold tracking-[-0.03em] text-[#0B2240] leading-[1.1]">
              Buy 10 @ ₹999
            </h3>
            <div className="flex flex-col items-start gap-1 font-['Figtree',sans-serif] text-[15px] sm:text-[16px] font-semibold text-[#0B2240]">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B2240] text-white">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path d="m3 8 3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Finds worth ₹1,500 @ ₹999</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B2240] text-white">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path d="m3 8 3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Free Shagun gift with the order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}