import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ListFilter } from 'lucide-react';
import useFilterStore from '../../store/useFilterStore';
import { PRODUCTS } from '../../data/products';
import ProductGrid from '../product/ProductGrid';
import CategoryFilterBar from './CategoryFilterBar';
import { fadeInUp } from '../../utils/animations';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopSection() {
  const { activeCategory, sortBy, setSortBy } = useFilterStore();

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <section id="shop-section" className="relative z-10 bg-white min-h-screen pb-24">
      <CategoryFilterBar />
      
      <div className="max-w-[1280px] mx-auto px-6 pt-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10"
        >
          <div>
            <h2 className="text-3xl font-display font-bold text-text-primary">
              {activeCategory === 'all'
                ? 'All Kitchenware'
                : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h2>
            <p className="text-text-secondary mt-1">
              Showing {filteredAndSortedProducts.length} items
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-brand-off-white border border-border px-4 py-2 rounded-[var(--radius-card)]">
            <ListFilter className="w-4 h-4 text-text-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-medium text-text-primary outline-none cursor-pointer"
              aria-label="Sort products"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <ProductGrid products={filteredAndSortedProducts} />
      </div>
    </section>
  );
}
