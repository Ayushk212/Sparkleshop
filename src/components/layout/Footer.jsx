import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { CATEGORIES } from '../../data/categories';

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop Catalogue', href: '#shop-section' },
  { label: 'About Store', href: '#about-section' },
  { label: 'Contact Us', href: '#contact-section' },
];

export default function Footer() {
  return (
    <footer id="contact-section" className="bg-brand-dark text-white pt-20 pb-6">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <div className="text-xl mb-4">
              <span className="text-lg">✨</span>{' '}
              <span className="font-body">Sparkles of</span>{' '}
              <span className="font-display italic text-brand-accent">Kitchen</span>
            </div>
            <p className="text-text-muted text-sm mb-5 leading-relaxed">
              Premium retail storefront for all cooking, baking, storage, and home kitchen necessities in Republik, Ghaziabad.
            </p>
            <div className="flex gap-3">
              {['💬', '📸', '📘'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-base hover:bg-brand-accent hover:-translate-y-0.5 transition-all" aria-label="Social link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-brand-accent mb-6 font-bold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-muted text-sm hover:text-white hover:pl-1 transition-all">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-brand-accent mb-6 font-bold">Categories</h4>
            <ul className="flex flex-col gap-3">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <a href="#shop-section" className="text-text-muted text-sm hover:text-white hover:pl-1 transition-all">{cat.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-brand-accent mb-6 font-bold">Contact Shop</h4>
            <div className="flex flex-col gap-3 text-text-muted text-sm">
              <div>📍 Main Market, Republik, Ghaziabad, 201016</div>
              <div>📞 Phone: +91 98765 43210</div>
              <div>✉️ Email: info@sparkleskitchen.com</div>
              <div>⏰ Daily: 10:00 AM – 8:00 PM</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-xs">
          <div>© 2026 Sparkles of Kitchen, Republik, Ghaziabad. All rights reserved.</div>
          <div>Made with ❤️ in India</div>
        </div>
      </div>
    </footer>
  );
}
