import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProductCard = memo(function ProductCard({ product, index, onQuickView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onQuickView(product.id)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image Container - Square Aspect Ratio */}
      <div className="aspect-square w-full overflow-hidden bg-brand-grey border border-brand-grey relative">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-orange text-white text-[10px] uppercase tracking-widest px-3 py-1 font-body font-normal z-10">
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
        <p className="text-xs uppercase tracking-widest text-brand-orange font-body font-normal mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-base md:text-lg font-medium text-brand-dark leading-tight group-hover:text-brand-orange transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-xs font-medium text-brand-dark/60 mt-2 underline underline-offset-4 hover:text-brand-orange transition-colors">
          View Details →
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
