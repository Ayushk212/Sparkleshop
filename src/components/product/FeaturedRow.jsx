import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default function FeaturedRow({ title, subtitle, products, onQuickView }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 px-6 max-w-[1280px] mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">
            {title}
          </h2>
          {subtitle && <p className="text-text-secondary">{subtitle}</p>}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors ${
              canScrollLeft
                ? 'text-text-primary hover:bg-brand-off-white hover:border-text-primary cursor-pointer'
                : 'text-text-muted opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors ${
              canScrollRight
                ? 'text-text-primary hover:bg-brand-off-white hover:border-text-primary cursor-pointer'
                : 'text-text-muted opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-6 max-w-[1280px] mx-auto"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] shrink-0 snap-start"
            >
              <ProductCard product={product} onQuickView={onQuickView} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FeaturedRow.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  products: PropTypes.array.isRequired,
  onQuickView: PropTypes.func.isRequired,
};
