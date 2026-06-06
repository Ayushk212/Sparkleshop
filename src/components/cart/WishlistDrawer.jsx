import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import useWishlistStore from '../../store/useWishlistStore';
import { drawerSlideRight } from '../../utils/animations';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';
import ProductModal from '../product/ProductModal';
import Button from '../ui/Button';

export default function WishlistDrawer() {
  const { ids, isOpen, closeWishlist } = useWishlistStore();
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeWishlist();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeWishlist]);

  const wishlistProducts = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWishlist}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              variants={drawerSlideRight}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 right-0 bottom-0 w-full max-w-[420px] bg-white shadow-drawer flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-display font-bold text-text-primary">Your Wishlist</h2>
                <button
                  onClick={closeWishlist}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text-primary hover:bg-brand-off-white transition-colors cursor-pointer"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {wishlistProducts.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-20 h-20 bg-brand-off-white rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-text-muted" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-2">No liked items</h3>
                      <p className="text-sm text-text-secondary">Tap the heart on products you love.</p>
                    </div>
                    <Button onClick={closeWishlist} variant="outline" className="mt-4">
                      Keep Browsing
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    <AnimatePresence mode="popLayout">
                      {wishlistProducts.map((product) => (
                        <div key={product.id} className="relative">
                          <ProductCard product={product} onQuickView={setSelectedProductId} />
                        </div>
                      ))}
                    </AnimatePresence>
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
