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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header — Left-aligned */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827]">
            Why Ghaziabad trusts us
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start text-left"
              >
                {/* Icon (orange icon) */}
                <div className="mb-5 text-[#F97316]">
                  <Icon className="w-10 h-10" />
                </div>

                {/* Text content */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#111827] mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-[15px] text-gray-600 leading-relaxed">
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
