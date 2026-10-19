import { useState } from 'react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((current) => {
      return current.includes(id)
        ? current.filter((openId) => openId !== id)
        : [...current, id];
    });
  };

  return (
    <section className="mx-auto max-w-[1120px] px-4 py-12">
      <h3 className="mb-6 font-display text-2xl font-black tracking-tight text-[#0B2240] sm:text-[28px]">
        Before you order
      </h3>

      <div>
        {FAQS.map((faq) => {
          const isOpen = openItems.includes(faq.id);
          const answerId = `faq-answer-${faq.id}`;
          return (
            <div key={faq.id} className="border-b border-[#DDE1E7]">
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="flex w-full cursor-pointer select-none items-center gap-2 py-3 text-left font-['Figtree',sans-serif] text-[15px] font-bold text-[#0B2240] sm:text-[16px]"
              >
                <span aria-hidden="true" className="w-3 shrink-0 text-[10px]">
                  {isOpen ? '▼' : '▶'}
                </span>
                <span>{faq.question}</span>
              </button>
              {isOpen && (
                <p id={answerId} className="max-w-[800px] pb-4 pl-4 font-['Figtree',sans-serif] text-[14px] font-normal leading-relaxed text-[#5E6673] sm:text-[15px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 font-['Figtree',sans-serif] text-[12px] text-[#8A94A6]">
        Products, prices, ratings and stock levels shown here are sample data for the preview.
      </p>
    </section>
  );
}