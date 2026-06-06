import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import FeaturedRow from '../product/FeaturedRow';
import ProductModal from '../product/ProductModal';
import { fadeInUp } from '../../utils/animations';

export default function FeaturedSection() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Get some bestsellers
  const bestsellers = PRODUCTS.filter((p) => p.badge === 'Bestseller').slice(0, 8);
  
  // Get new arrivals
  const newArrivals = PRODUCTS.filter((p) => p.badge === 'New').slice(0, 8);

  return (
    <section className="bg-white py-24 border-b border-border">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mb-20"
      >
        <FeaturedRow
          title="Customer Favourites"
          subtitle="Our most loved products across Republik, Ghaziabad."
          products={bestsellers}
          onQuickView={setSelectedProductId}
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <FeaturedRow
          title="Just Arrived"
          subtitle="The latest premium additions to our catalogue."
          products={newArrivals}
          onQuickView={setSelectedProductId}
        />
      </motion.div>

      {selectedProductId && (
        <ProductModal productId={selectedProductId} onClose={() => setSelectedProductId(null)} />
      )}
    </section>
  );
}
