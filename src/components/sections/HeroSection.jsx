import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-off-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-off-white via-brand-off-white/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-2xl pt-12 md:pt-0"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block py-1.5 px-4 bg-brand-accent/10 text-brand-accent font-bold uppercase tracking-widest text-xs rounded-full">
              New Collection 2026
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-[1.1] mb-6">
            Elevate Your <span className="text-brand-accent italic font-normal">Kitchen</span> Everyday.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-secondary mb-10 max-w-lg leading-relaxed">
            Discover premium cookware, smart storage, and aesthetic dining essentials curated for the modern Indian home.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('shop-section').scrollIntoView()}>
              Shop Catalogue
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('about-section').scrollIntoView()}>
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
