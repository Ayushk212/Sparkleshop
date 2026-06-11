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
    <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header — Left-aligned */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827]">
            Featured products
          </h2>
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

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/products')}
            className="btn-primary"
          >
            View all products
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
