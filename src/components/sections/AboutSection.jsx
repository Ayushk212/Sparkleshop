import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp, imageReveal } from '../../utils/animations';

export default function AboutSection() {
  return (
    <section id="about-section" className="bg-brand-off-white py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop"
              alt="Sparkles of Kitchen Storefront"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 -right-8 lg:right-[-20%] bg-white p-6 rounded-[var(--radius-card)] shadow-xl max-w-[260px]"
            >
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-bold text-lg mb-1">Local Favourites</h4>
              <p className="text-sm text-text-secondary">Voted #1 kitchenware store in Ghaziabad 2026.</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
              Bringing <span className="italic text-brand-accent">Sparkle</span> to Every Indian Kitchen.
            </h2>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed mb-8">
              <p>
                Founded in the heart of Republik, Ghaziabad, <strong>Sparkles of Kitchen</strong> was born from a simple belief: that the heart of every Indian home deserves the very best tools.
              </p>
              <p>
                We bridge the gap between traditional Indian cooking needs and modern, aesthetic design. Whether you're looking for a heritage cast-iron tawa that lasts generations, or the latest sleek non-stick cookware, we handpick every item in our catalogue.
              </p>
              <p>
                We aren't just a store; we are your local culinary partners. 
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-8 border-y border-border py-8">
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-1">500+</div>
                <div className="text-sm font-bold text-text-secondary uppercase tracking-wide">Products</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-1">10k+</div>
                <div className="text-sm font-bold text-text-secondary uppercase tracking-wide">Happy Homes</div>
              </div>
            </div>

            <Button onClick={() => document.getElementById('contact-section').scrollIntoView()}>
              Visit Our Store
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
