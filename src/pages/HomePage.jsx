import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import FeaturedCategories from '../components/sections/FeaturedCategories';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProducts from '../components/sections/FeaturedProducts';

export default function HomePage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full"
    >
      <HeroSection />
      <FeaturedCategories />
      <WhyChooseUs />
      <FeaturedProducts />
    </motion.div>
  );
}
