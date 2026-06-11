import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function AboutPage() {
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
      className="bg-white min-h-screen"
    >
      {/* Section 1: Hero Banner (50vh) */}
      <section className="relative h-[50vh] w-full flex items-center justify-center bg-[#111827] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
          alt="Kitchenware showcase"
          className="absolute inset-0 w-full h-full object-cover opacity-60 select-none"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base md:text-lg font-normal text-white/90 leading-relaxed"
          >
            Bringing premium quality kitchenware and culinary joy to Ghaziabad homes since 2001.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Story Content & Stats (Pure White Background) */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* Left Column: Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827] mb-6 leading-tight">
                Two decades of excellence
              </h2>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed mb-6">
                Sparkles of Kitchen began with a simple dream: to provide Ghaziabad families with kitchenware that isn't just functional, but makes the kitchen the heart of the home. Over the last 25 years, we have handpicked our collection, choosing products that endure the test of Indian cooking.
              </p>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                Whether you are an aspiring home chef or feeding a large family, we guide you to the perfect cookware, bakeware, and appliances designed for durability and style.
              </p>
            </motion.div>

            {/* Right Column: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-10"
            >
              <h3 className="font-display text-2xl font-bold text-[#111827] mb-4">
                Our mission
              </h3>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                We believe that every meal is an opportunity to connect. That's why we source our items from only the most trusted manufacturers, ensuring everything we sell is safe, long-lasting, and beautiful to display.
              </p>
            </motion.div>
          </div>

          {/* 3-Column Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-100 py-12">
            <div className="text-center">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#F97316] block mb-2">25+</span>
              <span className="font-body text-[15px] font-semibold text-gray-500 tracking-wide">Years in Ghaziabad</span>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#2563EB] block mb-2">10,000+</span>
              <span className="font-body text-[15px] font-semibold text-gray-500 tracking-wide">Happy families</span>
            </div>
            <div className="text-center">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#F97316] block mb-2">100%</span>
              <span className="font-body text-[15px] font-semibold text-gray-500 tracking-wide">Handpicked curation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Visit Us (Contact & Maps) */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-[36px] font-bold text-[#111827] leading-tight">
                  Visit our showroom
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                      Our address
                    </h4>
                    <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                      Shop No. 12, Main Market Road,<br />
                      Opposite Clock Tower, Ghaziabad, UP - 201001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                      Call & WhatsApp
                    </h4>
                    <p className="font-body text-[15px] text-gray-600">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                      Opening hours
                    </h4>
                    <p className="font-body text-[15px] text-gray-600">
                      Monday – Sunday: 10:00 AM – 8:30 PM (Closed Tuesdays)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Map Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-[350px] bg-gray-100 border border-gray-200 overflow-hidden"
            >
              <iframe
                title="Sparkles of Kitchen Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6728362483863!2d77.42270921508344!3d28.669539382404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bbf0000001%3A0x280e2270bb3f06e6!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1623058800000!5m2!1sen!2sin"
                className="w-full h-full border-0 select-none grayscale contrast-125"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
