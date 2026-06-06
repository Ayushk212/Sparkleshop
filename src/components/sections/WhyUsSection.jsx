import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Gem } from 'lucide-react';
import { staggerChildren, fadeInUp } from '../../utils/animations';

const FEATURES = [
  {
    icon: <Gem className="w-8 h-8 text-brand-accent" />,
    title: 'Curated Quality',
    desc: 'Every item is hand-selected for durability, aesthetic, and functional perfection.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
    title: 'Brand Warranty',
    desc: '100% genuine products with full manufacturer warranties intact.',
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-accent" />,
    title: 'Local Delivery',
    desc: 'Free same-day delivery in Republik, Ghaziabad for orders above ₹999.',
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-accent" />,
    title: 'Lifetime Support',
    desc: 'In-store replacement and lifetime guidance on product maintenance.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-3 block">
            The Sparkles Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Why Shop With Us?
          </h2>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-row items-start gap-6 p-8 bg-white/5 rounded-[var(--radius-card)] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors text-left"
            >
              <div className="w-16 h-16 shrink-0 bg-brand-accent/20 rounded-full flex items-center justify-center">
                {feat.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
