import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
        alt="Beautiful modern kitchen with premium cookware"
        className="absolute inset-0 w-full h-full object-cover select-none"
      />

      {/* Fix 4: Directional overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(10,8,5,0.82) 0%, rgba(10,8,5,0.55) 45%, rgba(10,8,5,0.05) 100%)'
        }}
      />

      {/* Fix 5: Content Container anchored to bottom-left */}
      <div className="absolute bottom-14 left-12 max-w-lg z-10 text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="font-body text-xs font-normal tracking-widest uppercase text-brand-orange mb-3"
        >
          Trusted by Ghaziabad families since 2001
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
        >
          Kitchenware that<br /> feels like home.
        </motion.h1>

        {/* Fix 6: Subtitle text with EB Garamond Normal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="font-body text-base font-normal text-white/75 leading-relaxed mb-6 max-w-sm"
        >
          Explore our handpicked collection of premium cookware, bakeware, and essentials curated for local kitchens.
        </motion.p>

        {/* Fix 6: CTA Buttons with sharp corners and clean hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <Link
            to="/products"
            className="inline-block bg-brand-orange text-white font-body text-sm font-medium tracking-[0.15em] uppercase px-6 py-3 rounded-none transition-colors duration-200 hover:bg-brand-orange-dark"
          >
            Explore Products
          </Link>
          <Link
            to="/about"
            className="inline-block bg-transparent text-white border border-white/55 font-body text-sm font-medium tracking-[0.15em] uppercase px-6 py-3 rounded-none transition-colors duration-200 hover:bg-white/10"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50"
          >
            <span className="text-[10px] uppercase tracking-widest font-body font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
