import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#111827]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
        alt="Beautiful modern kitchen with premium cookware"
        className="absolute inset-0 w-full h-full object-cover select-none"
      />

      {/* Right-aligned dark gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(17,24,39,0.1) 0%, rgba(17,24,39,0.4) 40%, rgba(17,24,39,0.85) 100%)'
        }}
      />

      {/* Container for content centered in the right half */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 flex items-center justify-end">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center pr-4 md:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[14px] font-semibold tracking-wide text-[#F97316] mb-3"
          >
            Trusted by Ghaziabad families since 2001
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: '42px' }}
          >
            Kitchenware that feels like home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[15px] font-normal text-white/80 leading-relaxed mb-8 max-w-[280px]"
          >
            Explore our handpicked collection of premium cookware, bakeware, and essentials curated for local kitchens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-row items-center gap-4"
          >
            <Link
              to="/products"
              className="btn-primary"
            >
              Explore products
            </Link>
            <Link
              to="/about"
              className="btn-secondary"
            >
              Our story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
