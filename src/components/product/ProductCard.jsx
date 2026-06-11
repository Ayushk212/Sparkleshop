import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProductCard = memo(function ProductCard({ product, index, onQuickView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onQuickView(product.id)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image Container - Square Aspect Ratio */}
      <div className="aspect-square w-full overflow-hidden bg-[#F9FAFB] border border-[#E5E7EB] relative rounded-none">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#F97316] text-white text-[11px] font-semibold tracking-wider px-3 py-1 font-body z-10">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Info */}
      <div className="pt-3 flex flex-col">
        <p className="text-[13px] tracking-wide text-[#F97316] font-body font-semibold mb-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <h3 className="font-display text-base md:text-lg font-bold text-[#111827] leading-tight group-hover:text-[#F97316] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-xs font-semibold text-gray-500 mt-2 hover:text-[#F97316] transition-colors duration-200">
          View details →
        </p>
      </div>
    </motion.div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onQuickView: PropTypes.func.isRequired,
};

export default ProductCard;
