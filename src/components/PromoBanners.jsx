const promoBanners = [
  {
    image: '/images/banner-diwali.jpg',
    alt: 'Exclusive Diwali Collection — shop the collection',
    href: '#diwali-collection',
  },
  {
    image: '/images/banner-flash.jpg',
    alt: 'Flash Sale — shop Flash Deals',
    href: '#flash-deals',
  },
];

export default function PromoBanners() {
  return (
    <section aria-label="Festive promotions" className="mx-auto max-w-[760px] px-4 pt-7 pb-2 [container-type:inline-size]">
      <div className="grid grid-cols-2 gap-3">
        {promoBanners.map((banner) => (
          <a
            key={banner.image}
            href={banner.href}
            className="block cursor-pointer overflow-hidden rounded-[16px] border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="block h-auto w-full aspect-square object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
