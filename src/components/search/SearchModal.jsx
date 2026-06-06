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
        p.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[var(--radius-card)] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              role="dialog"
              aria-modal="true"
            >
              <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-border">
                <Search className="absolute left-6 w-6 h-6 text-text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for pans, jars, tools..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-20 pl-16 pr-20 text-xl font-medium outline-none placeholder:text-text-muted bg-transparent"
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  className="absolute right-6 p-2 rounded-full hover:bg-brand-off-white text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </form>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-brand-off-white/50">
                {query.trim().length <= 1 ? (
                  <div className="max-w-md mx-auto">
                    {searchHistory.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Recent Searches</h4>
                        <div className="flex flex-wrap gap-2">
                          {searchHistory.map((h, i) => (
                            <button
                              key={i}
                              onClick={() => handleHistoryClick(h)}
                              className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-[var(--radius-pill)] text-sm hover:border-text-primary hover:shadow-sm transition-all cursor-pointer"
                            >
                              <History className="w-3 h-3 text-text-muted" />
                              {h}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Popular Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Cookware', 'Bakeware', 'Storage'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleHistoryClick(cat)}
                            className="px-4 py-2 bg-white border border-border rounded-[var(--radius-pill)] text-sm hover:border-text-primary hover:shadow-sm transition-all cursor-pointer"
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
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-6">
                          Results for "{query}"
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {searchResults.map((product) => (
                            <div key={product.id} className="scale-95 transform origin-top-left">
                              <ProductCard product={product} onQuickView={setSelectedProductId} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <h3 className="text-xl font-bold text-text-primary mb-2">No results found for "{query}"</h3>
                        <p className="text-text-secondary">Try checking for spelling errors or use more general terms.</p>
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
