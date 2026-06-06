import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Plus, Check } from 'lucide-react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import StarRating from '../ui/StarRating';
import { formatPrice } from '../../utils/formatPrice';
import { modalScale } from '../../utils/animations';
import { PRODUCTS } from '../../data/products';
import useCartStore from '../../store/useCartStore';
import { useToastStore } from '../ui/Toast';

export default function ProductModal({ productId, onClose }) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const addToast = useToastStore((s) => s.addToast);
  const product = PRODUCTS.find((p) => p.id === productId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleAddToCart = useCallback(() => {
    if (!product || !product.inStock) return;
    addItem(product, qty);
    addToast(`Added ${qty}x ${product.name} to cart!`, 'success');
    onClose();
  }, [product, qty, addItem, addToast, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        variants={modalScale}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative bg-white rounded-[var(--radius-card)] shadow-drawer w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-text-primary hover:bg-brand-off-white transition-colors cursor-pointer shadow-card"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-brand-off-white aspect-square md:aspect-auto md:min-h-full p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col">
            <span className="text-xs uppercase font-bold tracking-wider text-text-muted mb-2">
              {product.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
              {product.name}
            </h2>
            <StarRating rating={product.rating} count={product.reviewCount} />
            <div className="flex items-center gap-3 my-6">
              <span className="text-3xl font-bold text-brand-accent">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg line-through text-text-muted">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-text-primary font-bold mb-4">
                Key Features
              </h4>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-2 text-text-secondary text-sm"
                  >
                    <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-border">
              <div className="flex items-center border border-border rounded-[var(--radius-card)] h-12 w-32 shrink-0">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex-1 h-full flex items-center justify-center text-text-primary hover:bg-brand-off-white cursor-pointer rounded-l-[var(--radius-card)]"
                  aria-label="Decrease quantity"
                  disabled={!product.inStock}
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                <span className="flex-1 text-center font-medium select-none">
                  {qty}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty((q) => q + 1)}
                  className="flex-1 h-full flex items-center justify-center text-text-primary hover:bg-brand-off-white cursor-pointer rounded-r-[var(--radius-card)]"
                  aria-label="Increase quantity"
                  disabled={!product.inStock}
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>
              <Button
                onClick={handleAddToCart}
                variant="primary"
                className="flex-1 h-12"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

ProductModal.propTypes = {
  productId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
