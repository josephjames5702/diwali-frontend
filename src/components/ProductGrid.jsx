import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section id="products" className="max-w-[1120px] mx-auto px-4 py-8 scroll-mt-4">
      <div className="grid grid-cols-2 gap-[14px] min-[760px]:grid-cols-4 min-[760px]:gap-[18px]">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} variant="assistant" />
        ))}
      </div>

      {products.length > 4 && (
        <div className="flex justify-center mt-8 mb-4">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="w-[240px] h-[40px] shrink-0 border-[1.5px] border-[#0B2240] bg-white text-[#0B2240] font-bold text-[14px] rounded-xl flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-all cursor-pointer"
          >
            {showAll ? 'Show less' : 'See more'}
            <svg aria-hidden="true" viewBox="0 0 20 20" className="w-4 h-4" fill="none">
              <path
                d={showAll ? 'm4 13 6-6 6 6' : 'm4 7 6 6 6-6'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}