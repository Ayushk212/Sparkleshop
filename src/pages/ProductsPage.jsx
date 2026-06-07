import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFilterStore from '../store/useFilterStore';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from '../components/product/ProductCard';
import ProductModal from '../components/product/ProductModal';

const EMOJIS = {
  all: '✨',
  cookware: '🍳',
  storage: '📦',
  bakeware: '🥘',
  dining: '🍽️',
  tools: '🛠️',
  appliances: '🔌',
  cleaning: '🧽',
};

export default function ProductsPage() {
  const { activeCategory, setCategory, searchQuery, resetFilters } = useFilterStore();
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search query filter (if search modal is used)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-brand-white min-h-screen pt-24 pb-20"
    >
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-6 pt-10 text-center">
        <p className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-2">
          Our Collection
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
          Browse our Kitchenware
        </h1>
        {/* Animated Horizontal Rule */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[2px] bg-brand-orange"
          />
        </div>
      </div>

      {/* Horizontal Category Filter Pills Container */}
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <div className="flex justify-start md:justify-center overflow-x-auto gap-3 py-2 scrollbar-none hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const emoji = EMOJIS[cat.id] || '🍳';
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-[0.15em] font-body font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-blue text-brand-white border border-transparent'
                    : 'bg-brand-white text-brand-dark border border-brand-dark/20 hover:border-brand-orange'
                }`}
                aria-pressed={isActive}
              >
                <span>{emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-[1280px] mx-auto px-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={setSelectedProductId}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-brand-dark/60 text-lg mb-4">No products found in this category.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-body uppercase tracking-[0.15em] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProductId && (
          <ProductModal
            productId={selectedProductId}
            onClose={() => setSelectedProductId(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
