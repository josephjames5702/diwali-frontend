import { useState } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OfferCard from './components/OfferCard';
import ProductGrid from './components/ProductGrid';
import PromoBanners from './components/PromoBanners';
import ProductCarousel from './components/ProductCarousel';
import FaqSection from './components/FaqSection';
import { INITIAL_PRODUCTS, DIWALI_COLLECTION, FLASH_DEALS } from './data/storeData';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <TopTicker />
      <Navbar cartCount={cart.length} />
      <main className="w-full">
        <HeroSection />
        <OfferCard />
        <ProductGrid products={INITIAL_PRODUCTS} onAddToCart={handleAddToCart} />
        <PromoBanners />
        <ProductCarousel id="diwali-collection" title="Diwali Collection" products={DIWALI_COLLECTION} onAddToCart={handleAddToCart} />
        <ProductCarousel id="flash-deals" title="Flash Deals" products={FLASH_DEALS} onAddToCart={handleAddToCart} />
        <FaqSection />
      </main>
    </div>
  );
}