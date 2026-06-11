import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFilterStore from '../store/useFilterStore';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from '../components/product/ProductCard';
import ProductModal from '../components/product/ProductModal';

export default function ProductsPage() {
  const { activeCategory, setCategory, searchQuery, resetFilters } = useFilterStore();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
      className="bg-white min-h-screen pt-24 pb-20"
    >
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-8 pt-10 pb-6 text-left">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
          Browse Our Kitchenware
        </h1>
      </div>

      {/* Two-column Layout Container */}
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row gap-10 items-start">
        
        {/* DESKTOP SIDEBAR — Filter */}
        <aside className="w-56 flex-shrink-0 sticky top-28 hidden md:block">
          <div className="border-b border-gray-200 pb-3 mb-4">
            <h3 className="font-display font-bold text-base text-[#111827]">Categories</h3>
          </div>
          <ul className="space-y-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <li key={cat.id}>
                  <button
                    onClick={() => setCategory(cat.id)}
                    className={`
                      w-full text-left px-3 py-2.5 text-sm font-body rounded-none
                      transition-colors duration-150 cursor-pointer
                      flex items-center justify-between
                      ${isActive
                        ? 'bg-[#2563EB] text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#111827]'
                      }
                    `}
                    aria-pressed={isActive}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                      {PRODUCTS.filter(p => cat.id === 'all' || p.category === cat.id).length}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* MAIN CONTENT Area (grid and mobile filter trigger) */}
        <main className="flex-1 w-full">
          {/* Mobile Filter Button */}
          <div className="block md:hidden mb-6">
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-[#111827]/20 text-[#111827] text-sm font-medium font-body bg-white hover:border-[#F97316] transition-colors cursor-pointer"
            >
              Filter products ({CATEGORIES.find(c => c.id === activeCategory)?.label || 'All'})
            </button>
          </div>

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
              <p className="text-gray-500 text-lg mb-4">No products found in this category.</p>
              <button
                onClick={resetFilters}
                className="btn-primary"
              >
                Reset filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer for Category Filters */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-[#111827]/70 z-[100]"
            />
            {/* Slide-up bottom drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-white z-[101] rounded-t-2xl p-6 shadow-2xl pb-10"
            >
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                <h3 className="font-display font-semibold text-lg text-[#111827]">Filter by category</h3>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="text-gray-400 hover:text-[#111827] text-xl font-semibold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <ul className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setCategory(cat.id);
                          setMobileDrawerOpen(false);
                        }}
                        className={`
                          w-full text-left px-3 py-3 text-sm font-body rounded-none
                          transition-colors duration-150 cursor-pointer
                          flex items-center justify-between
                          ${isActive
                            ? 'bg-[#2563EB] text-white font-semibold'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#111827]'
                          }
                        `}
                        aria-pressed={isActive}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                          {PRODUCTS.filter(p => cat.id === 'all' || p.category === cat.id).length}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
