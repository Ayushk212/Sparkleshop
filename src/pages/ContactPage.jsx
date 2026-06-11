import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
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
      className="bg-white min-h-screen pt-24 pb-20"
    >
      {/* Page Header */}
      <div className="max-w-[1280px] mx-auto px-8 pt-10 pb-6 text-left">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
          Contact our showroom
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column: Contact Details */}
          <div className="flex flex-col justify-between py-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#111827] mb-6 leading-tight">
                We'd love to meet you
              </h2>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                Whether you have a question about our collections, need advice on materials, or want to check stock availability in Ghaziabad, feel free to visit or contact us.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                    Location
                  </h4>
                  <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                    Shop No. 12, Main Market Road,<br />
                    Opposite Clock Tower, Ghaziabad, UP - 201001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                    Shop hours
                  </h4>
                  <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                    Monday – Sunday: 10:00 AM – 8:30 PM<br />
                    <span className="text-[#F97316] font-semibold">(Closed Tuesdays)</span>
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
                <Mail className="w-5 h-5 text-[#F97316] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-bold text-[#111827] mb-1">
                    Email
                  </h4>
                  <p className="font-body text-[15px] text-gray-600">
                    info@sparklesofkitchen.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Widget */}
          <div className="w-full min-h-[400px] lg:min-h-full bg-gray-100 border border-gray-200 overflow-hidden shadow-sm flex">
            <iframe
              title="Sparkles of Kitchen Showroom Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6728362483863!2d77.42270921508344!3d28.669539382404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bbf0000001%3A0x280e2270bb3f06e6!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1623058800000!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0 select-none grayscale contrast-125 flex-grow"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
