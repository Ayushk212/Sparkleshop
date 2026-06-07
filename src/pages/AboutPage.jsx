import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, MapPin, Phone, Clock } from 'lucide-react';

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
      className="bg-brand-white min-h-screen"
    >
      {/* Section 1: Full-Bleed Image with Text Overlay */}
      <section className="relative h-[60vh] w-full flex items-center justify-center bg-brand-dark overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
          alt="Kitchenware showcase"
          className="absolute inset-0 w-full h-full object-cover opacity-50 select-none"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base md:text-lg font-normal text-white/80 leading-relaxed"
          >
            Bringing premium quality kitchenware and culinary joy to Ghaziabad homes since 2001.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Dark Panel (Deep Blue Contrast Section) */}
      <section className="bg-brand-blue text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange block mb-3">
                Crafting Legacies
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Two Decades of Excellence
              </h2>
              <p className="font-body text-base text-white/80 leading-relaxed mb-6">
                Sparkles of Kitchen began with a simple dream: to provide Ghaziabad families with kitchenware that isn't just functional, but makes the kitchen the heart of the home. Over the last 25 years, we have handpicked our collection, choosing products that endure the test of Indian cooking.
              </p>
              <p className="font-body text-base text-white/80 leading-relaxed">
                Whether you are an aspiring home chef or feeding a large family, we guide you to the perfect cookware, bakeware, and appliances designed for durability and style.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="border-l-2 border-brand-orange pl-6 py-1">
                <h4 className="font-display text-lg font-medium text-white mb-1">
                  25+ Years in Ghaziabad
                </h4>
                <p className="font-body text-sm text-white/70">
                  Established in 2001, we are one of the most trusted family-owned showrooms.
                </p>
              </div>

              <div className="border-l-2 border-brand-orange pl-6 py-1">
                <h4 className="font-display text-lg font-medium text-white mb-1">
                  10,000+ Satisfied Families
                </h4>
                <p className="font-body text-sm text-white/70">
                  Providing culinary tools and advice to generations of local households.
                </p>
              </div>

              <div className="border-l-2 border-brand-orange pl-6 py-1">
                <h4 className="font-display text-lg font-medium text-white mb-1">
                  Handpicked Curation
                </h4>
                <p className="font-body text-sm text-white/70">
                  Every pan, pot, and appliance is vetted for safety, material quality, and design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: White Panel (Contact & Location Details) */}
      <section className="bg-brand-white text-brand-dark py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange block mb-2">
                  Visit Showroom
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark leading-tight">
                  Welcome to our Shop
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                      Our Address
                    </h4>
                    <p className="font-body text-base text-brand-dark/70 leading-relaxed">
                      Shop No. 12, Main Market Road,<br />
                      Opposite Clock Tower, Ghaziabad, UP - 201001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                      Call & WhatsApp
                    </h4>
                    <p className="font-body text-base text-brand-dark/70">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                      Opening Hours
                    </h4>
                    <p className="font-body text-base text-brand-dark/70">
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
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-[350px] bg-brand-grey border border-brand-grey overflow-hidden"
            >
              {/* Fake Google Maps Embed Iframe with standard style placeholder */}
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
