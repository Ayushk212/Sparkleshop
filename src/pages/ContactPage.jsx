import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { useToastStore } from '../components/ui/Toast';

export default function ContactPage() {
  const addToast = useToastStore((s) => s.addToast);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please fill out all fields.', 'error');
      return;
    }
    addToast('Message received! We will get back to you shortly.', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-brand-white min-h-screen pt-24 pb-20"
    >
      {/* Page Hero */}
      <div className="max-w-[1280px] mx-auto px-6 pt-10 text-center">
        <p className="text-xs uppercase tracking-widest font-body font-normal text-brand-orange mb-2">
          Get in Touch
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
          Contact Our Showroom
        </h1>
        <div className="flex justify-center mb-16">
          <div className="w-[40px] h-[2px] bg-brand-orange" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info & Map */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark mb-4">
                We'd love to meet you
              </h2>
              <p className="font-body text-base text-brand-dark/70 leading-relaxed">
                Whether you have a question about our collections, need advice on materials, or want to check stock availability in Ghaziabad, feel free to visit or drop us a line.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                    Location
                  </h4>
                  <p className="font-body text-sm text-brand-dark/70 leading-relaxed">
                    Shop No. 12, Main Market Road,<br />
                    Opposite Clock Tower, Ghaziabad, UP - 201001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                    Shop Hours
                  </h4>
                  <p className="font-body text-sm text-brand-dark/70 leading-relaxed">
                    Monday – Sunday: 10 AM – 8:30 PM<br />
                    <span className="text-brand-orange font-semibold">(Closed Tuesdays)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                    Call & WhatsApp
                  </h4>
                  <p className="font-body text-sm text-brand-dark/70">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base font-medium text-brand-dark mb-1">
                    Email
                  </h4>
                  <p className="font-body text-sm text-brand-dark/70">
                    info@sparklesofkitchen.com
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[250px] bg-brand-grey border border-brand-grey overflow-hidden select-none">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6728362483863!2d77.42270921508344!3d28.669539382404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bbf0000001%3A0x280e2270bb3f06e6!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1623058800000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale contrast-125"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-brand-grey border border-brand-grey/50 p-8 md:p-12">
            <h3 className="font-display text-2xl font-medium text-brand-dark mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-body font-normal text-brand-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-white border border-brand-dark/10 p-3 text-sm focus:border-brand-orange outline-none font-body text-brand-dark"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-body font-normal text-brand-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-white border border-brand-dark/10 p-3 text-sm focus:border-brand-orange outline-none font-body text-brand-dark"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-body font-normal text-brand-dark mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-white border border-brand-dark/10 p-3 text-sm focus:border-brand-orange outline-none font-body text-brand-dark resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-body uppercase tracking-[0.15em] text-sm font-medium transition-all duration-200 cursor-pointer rounded-none flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
