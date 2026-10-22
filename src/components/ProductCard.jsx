export default function ProductCard({ item, onAddToCart, compact = false, variant = 'figtree' }) {
  const isAssistant = variant === 'assistant';

  return (
    <div className={`bg-white rounded-xl flex flex-col justify-between ${compact ? 'p-0 shadow-none border-0' : 'p-3 shadow-xs border border-gray-100 hover:shadow-md'} transition-shadow`}>
      <div>
        <div className={`${item.bg} relative flex aspect-square items-center justify-center overflow-hidden rounded-[14px]`}>
          {item.discount && (
            <span className="absolute left-2.5 top-2.5 rounded-[4px] bg-[#C8102E] px-2 py-0.5 font-['Figtree',sans-serif] text-[11px] font-black leading-tight text-white">
              {item.discount}
            </span>
          )}
          {item.tag && (
            <span className={`absolute bottom-2.5 left-2.5 rounded-[4px] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
              item.tag === 'DIWALI EXCLUSIVE' || item.tag === 'DIWALI COLLECTION'
                ? 'bg-[#0B2240] text-[#FFC94A]'
                : 'bg-white text-black border border-black'
            }`}>
              {item.tag}
            </span>
          )}
          <span className={`font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-6xl font-extrabold sm:text-7xl ${item.textColor}`}>
            {item.letter}
          </span>
        </div>

        <h4 className={`mt-2.5 min-h-[38px] line-clamp-2 text-[14px] font-normal leading-[1.3] ${
          isAssistant
            ? "font-['Assistant'] text-[#0F1111]"
            : "font-['Figtree',system-ui,sans-serif] text-[#121417]"
        }`}>
          {item.title}
        </h4>

        <div className="mt-1 flex items-center gap-1">
          <span className="text-[13px] font-bold text-[#121417]">{item.rating}</span>
          <span className="text-[12px] text-[#F5A11A]" aria-label="5 stars">★★★★★</span>
          <span className="text-[13px] font-normal text-[#1F6FB2]">({item.reviews})</span>
        </div>

        <div className="mt-2 flex items-baseline">
          <span className={isAssistant
            ? "font-['Assistant'] text-[16px] font-bold text-[#0F1111]"
            : 'text-[15px] font-bold text-[#121417]'
          }>
            Rs. {item.price}.00
          </span>
          <span className={isAssistant
            ? "ml-2.5 font-['Assistant'] text-[13px] text-[#565959] line-through"
            : 'ml-2.5 text-[13px] font-normal text-[#788292] line-through'
          }>
            Rs. {item.mrp}.00
          </span>
        </div>
        <p className={isAssistant
          ? "mt-0.5 font-['Assistant'] text-[12px] font-semibold text-[#C8102E]"
          : 'mt-0.5 text-[12px] font-semibold text-[#C8102E]'
        }>
          Save Rs. {item.savings}.00
        </p>
      </div>

      <button
        onClick={() => onAddToCart(item)}
        className="mt-3 w-full rounded-full bg-[#FFC94A] py-2.5 font-['Figtree',sans-serif] text-[13px] font-bold text-[#0B2240] hover:bg-[#FFE082] active:scale-[0.98] cursor-pointer transition-all"
      >
        Add to Cart
      </button>
    </div>
  );
}