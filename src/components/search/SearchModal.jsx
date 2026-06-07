import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, History } from 'lucide-react';
import useFilterStore from '../../store/useFilterStore';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';
import ProductModal from '../product/ProductModal';

export default function SearchModal() {
  const { isSearchOpen, closeSearch, searchHistory, addToHistory } = useFilterStore();
  const [query, setQuery] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  const searchResults = query.trim().length > 1
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length > 1) {
      addToHistory(query.trim());
    }
  };

  const handleHistoryClick = (q) => {
    setQuery(q);
    inputRef.current?.focus();
  };

  return (
    <>
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[1100] flex flex-col items-center pt-20 px-4 pb-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-brand-white rounded-none border border-brand-grey shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10"
              role="dialog"
              aria-modal="true"
            >
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-brand-grey">
                <Search className="absolute left-6 w-5 h-5 text-brand-dark/50" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for pans, jars, tools..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-20 pl-16 pr-20 text-lg font-medium outline-none placeholder:text-brand-dark/40 bg-transparent font-body text-brand-dark"
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  className="absolute right-6 p-2 text-brand-dark/60 hover:text-brand-orange transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>

              {/* Inner area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-brand-white">
                {query.trim().length <= 1 ? (
                  <div className="max-w-md mx-auto">
                    {searchHistory.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-[10px] font-body font-medium uppercase tracking-widest text-brand-dark/40 mb-4">Recent Searches</h4>
                        <div className="flex flex-wrap gap-2">
                          {searchHistory.map((h, i) => (
                            <button
                              key={i}
                              onClick={() => handleHistoryClick(h)}
                              className="flex items-center gap-2 px-4 py-2 bg-brand-grey text-brand-dark text-xs font-body hover:bg-brand-orange hover:text-white transition-colors cursor-pointer border border-transparent"
                            >
                              <span>{h}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-[10px] font-body font-medium uppercase tracking-widest text-brand-dark/40 mb-4">Popular Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Cookware', 'Bakeware', 'Storage'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleHistoryClick(cat)}
                            className="px-4 py-2 bg-brand-grey text-brand-dark text-xs font-body hover:bg-brand-orange hover:text-white transition-colors cursor-pointer border border-transparent"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {searchResults.length > 0 ? (
                      <div>
                        <h4 className="text-xs font-body font-medium uppercase tracking-widest text-brand-dark/40 mb-6">
                          Results for "{query}"
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {searchResults.map((product, index) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              index={index}
                              onQuickView={setSelectedProductId}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <h3 className="text-lg font-display font-medium text-brand-dark mb-2">No results found for "{query}"</h3>
                        <p className="text-brand-dark/60 font-body text-sm">Try checking for spelling errors or use more general terms.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProductId && (
          <ProductModal productId={selectedProductId} onClose={() => setSelectedProductId(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
