import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import PropTypes from 'prop-types';
import Badge from '../ui/Badge';
import StarRating from '../ui/StarRating';
import Button from '../ui/Button';
import { formatPrice } from '../../utils/formatPrice';
import { cardHover, imageReveal, cardItem } from '../../utils/animations';
import useCartStore from '../../store/useCartStore';
import useWishlistStore from '../../store/useWishlistStore';
import { useToastStore } from '../ui/Toast';

const ProductCard = memo(function ProductCard({ product, onQuickView }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggle = useWishlistStore((s) => s.toggle);
  const isLiked = useWishlistStore((s) => s.ids.includes(product.id));
  const addToast = useToastStore((s) => s.addToast);

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    addToast(`Added ${product.name} to cart!`, 'success');
  }, [product, addItem, addToast]);

  const handleToggleWishlist = useCallback((e) => {
    e.stopPropagation();
    toggle(product.id);
    addToast(isLiked ? `Removed from wishlist` : `Added to wishlist!`, isLiked ? 'info' : 'success');
  }, [product.id, toggle, isLiked, addToast]);

  const handleQuickView = useCallback((e) => {
    e.stopPropagation();
    onQuickView(product.id);
  }, [product.id, onQuickView]);

  return (
    <motion.div
      variants={cardItem}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className={`group bg-white border border-border rounded-[var(--radius-card)] overflow-hidden flex flex-col relative ${!product.inStock ? 'opacity-60' : ''}`}
    >
      <motion.div variants={cardHover} initial="rest" whileHover="hover" className="flex flex-col h-full">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <Badge label={product.badge} />
          {!product.inStock && <Badge label="Out of Stock" />}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-card hover:scale-110 transition-transform cursor-pointer"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-text-muted'}`} />
        </button>

        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-brand-off-white cursor-pointer" onClick={handleQuickView}>
          <motion.img
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={480}
            height={480}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1 gap-1.5">
          <span className="text-[11px] uppercase font-bold tracking-wider text-text-muted">{product.category}</span>
          <h3 className="text-[15px] font-medium text-text-primary line-clamp-2 min-h-[2.5rem] cursor-pointer" onClick={handleQuickView}>
            {product.name}
          </h3>
          <StarRating rating={product.rating} count={product.reviewCount} />
          <div className="flex items-center gap-2 mt-auto pt-2">
            <span className="text-lg font-bold text-brand-accent">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm line-through text-text-muted">{formatPrice(product.originalPrice)}</span>
            )}
            {product.discount > 0 && (
              <span className="text-xs font-bold text-red-700">{product.discount}% off</span>
            )}
          </div>

          {/* Actions - visible on mobile, slide up on desktop hover */}
          <div className="mt-3 flex gap-2 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            <Button onClick={handleAddToCart} variant="primary" size="sm" className="flex-1" disabled={!product.inStock}>
              Add to Cart
            </Button>
            <Button onClick={handleQuickView} variant="outline" size="sm" ariaLabel="Quick view">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onQuickView: PropTypes.func.isRequired,
};

export default ProductCard;
