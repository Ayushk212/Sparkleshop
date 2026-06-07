import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import PropTypes from 'prop-types';
import { PRODUCTS } from '../../data/products';

export default function ProductModal({ productId, onClose }) {
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

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative bg-brand-white w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 rounded-none border border-brand-grey flex flex-col md:flex-row shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-brand-white hover:bg-brand-orange hover:text-white transition-colors duration-200 cursor-pointer border border-brand-grey"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 bg-brand-grey aspect-square md:aspect-auto md:min-h-[500px] flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[400px] w-full object-contain select-none mix-blend-multiply"
          />
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-orange font-body font-normal block mb-2">
              {product.category}
            </span>
            <h2 className="text-3xl font-display font-semibold text-brand-dark leading-tight mb-4">
              {product.name}
            </h2>
            <p className="text-brand-dark/70 font-body text-base font-normal leading-relaxed mb-6">
              {product.description}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-brand-dark font-body font-medium mb-3">
                  Key Specifications
                </h4>
                <ul className="space-y-2 pl-0 list-none">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-brand-dark/70 text-sm font-body font-normal">
                      <span className="text-brand-orange font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Shop Visit Prompt (Bottom) */}
          <div className="border-t border-brand-grey pt-6 mt-6">
            <div className="bg-brand-blue/5 border-l-4 border-brand-orange p-4 flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-sm font-medium text-brand-blue uppercase tracking-[0.15em] mb-1">
                  How to Buy
                </p>
                <p className="text-sm text-brand-dark/80 leading-relaxed font-body font-normal">
                  This product is part of our in-store collection. Visit our showroom in Ghaziabad to view and purchase.
                </p>
                <p className="text-xs text-brand-orange font-medium mt-2 font-body tracking-wider uppercase">
                  📍 Shop No. 12, Main Market, Ghaziabad
                </p>
              </div>
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
