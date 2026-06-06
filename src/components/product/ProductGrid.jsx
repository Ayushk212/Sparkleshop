import { memo, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX } from 'lucide-react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Button from '../ui/Button';
import useFilterStore from '../../store/useFilterStore';
import { staggerChildren, fadeInUp } from '../../utils/animations';

const ProductGrid = memo(function ProductGrid({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const resetFilters = useFilterStore((s) => s.resetFilters);

  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onQuickView={setSelectedProductId}
      />
    ));
  }, [products]);

  return (
    <>
      <AnimatePresence mode="wait">
        {products.length > 0 ? (
          <motion.div
            key="grid"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {renderedProducts}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-brand-off-white rounded-full flex items-center justify-center mb-6">
              <SearchX className="w-10 h-10 text-text-muted" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-2">No products found</h3>
            <p className="text-text-secondary mb-8 max-w-md">
              We couldn't find any items matching your current filters. Try adjusting your search or category selection.
            </p>
            <Button onClick={resetFilters} variant="primary">
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProductId && (
          <ProductModal
            productId={selectedProductId}
            onClose={() => setSelectedProductId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductGrid;
