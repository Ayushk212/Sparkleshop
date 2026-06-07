import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Award } from 'lucide-react';

const TRUST_POINTS = [
  {
    id: 1,
    title: 'Quality Products',
    desc: 'Every item in our showroom is handpicked and tested for durability under intense everyday Indian cooking conditions.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Local Ghaziabad Shop',
    desc: 'Proudly serving Ghaziabad households since 2001. Visit us for real face-to-face support and custom recommendations.',
    icon: MapPin,
  },
  {
    id: 3,
    title: 'Trusted for Years',
    desc: 'Loved by over 10,000+ local families. Our reputation is built on selling authentic brands and providing honest advice.',
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-blue text-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            The Sparkles Promise
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-[40px] h-[2px] bg-brand-orange" />
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-orange">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Text content */}
                <h3 className="font-display text-xl md:text-2xl font-medium text-white mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-base text-brand-white/70 leading-relaxed max-w-sm">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
