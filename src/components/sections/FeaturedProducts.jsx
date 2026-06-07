import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';
import ProductModal from '../product/ProductModal';

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Take first 6 products as featured
  const featured = PRODUCTS.slice(0, 6);

  return (
    <section className="bg-brand-white py-20 md:py-28 border-t border-brand-grey">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-2">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark">
            Featured Products
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-[40px] h-[2px] bg-brand-orange" />
          </div>
        </div>

        {/* 6-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onQuickView={setSelectedProductId}
            />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/products')}
            className="px-10 py-4 bg-brand-blue hover:bg-brand-blue-light text-white font-body uppercase tracking-[0.15em] text-sm font-medium transition-all duration-200 cursor-pointer rounded-none"
          >
            See All Products
          </button>
        </div>
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
    </section>
  );
}
