export default function FloatingCartBar({ cartItems = [], freeShippingThreshold = 499 }) {
  const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const remaining = Math.max(0, freeShippingThreshold - totalAmount);
  const progressPercent = Math.min(100, (totalAmount / freeShippingThreshold) * 100);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white border border-gray-300 rounded-full px-5 py-3 shadow-2xl flex items-center justify-between gap-6 max-w-[520px] w-full">
        {/* Left: Free delivery progress */}
        <div className="flex-1">
          <p className="text-[11px] font-semibold tracking-wide">
            {remaining > 0 ? (
              <>Add <span className="font-bold">₹{remaining}</span> to unlock <span className="font-bold">FREE DELIVERY</span></>
            ) : (
              <span className="font-bold">FREE DELIVERY UNLOCKED</span>
            )}
          </p>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div
              className="bg-black h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right: Cart Counter & Arrow */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <span className="block text-[9px] font-bold uppercase tracking-wider">Cart</span>
            <span className="text-xs font-bold">{cartItems.length} ITEMS</span>
          </div>
          <button className="bg-white border border-black font-bold w-9 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer text-base">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}