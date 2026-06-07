import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white/70 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl font-semibold text-brand-white">
              Sparkles of Kitchen
            </h3>
            <p className="font-body text-sm text-brand-white/60 leading-relaxed max-w-sm">
              Premium showcase of cooking, baking, storage, and home kitchen essentials in Ghaziabad. Curated for home kitchens that deserve the best.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-white"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-white"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 2.088.648 4.044 1.8 5.676L2 22l4.476-1.764c1.572.936 3.42 1.488 5.536 1.488 5.532 0 10.012-4.48 10.012-10.012S17.544 2 12.012 2zm6.39 13.884c-.264.744-1.5 1.362-2.076 1.428-.528.06-1.212.108-3.516-.852-2.94-1.224-4.836-4.224-4.98-4.416-.144-.192-1.164-1.548-1.164-2.952 0-1.404.732-2.088 1.008-2.376.228-.24.516-.3.684-.3h.492c.156 0 .372-.06.576.432.216.528.732 1.788.792 1.908.06.12.108.264.024.432-.084.18-.18.3-.3.444-.12.144-.252.324-.36.432-.12.12-.252.252-.108.492.144.24.636 1.044 1.368 1.7 1.008.9 1.848 1.176 2.112 1.308.264.12.42.108.576-.072.156-.18.684-.804.864-1.08.18-.276.36-.228.612-.132.252.096 1.608.756 1.884.888.276.132.456.204.528.324.072.12.072.696-.192 1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4 md:pl-12">
            <h4 className="font-body text-xs uppercase tracking-[0.15em] text-brand-white font-medium">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link
                  to="/"
                  className="font-body text-sm text-brand-white/60 hover:text-brand-orange transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="font-body text-sm text-brand-white/60 hover:text-brand-orange transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-body text-sm text-brand-white/60 hover:text-brand-orange transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="font-body text-sm text-brand-white/60 hover:text-brand-orange transition-colors duration-200"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-brand-white/60 hover:text-brand-orange transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact & Showroom */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs uppercase tracking-[0.15em] text-brand-white font-medium">
              Contact & Showroom
            </h4>
            <div className="font-body text-sm space-y-3">
              <p className="leading-relaxed font-normal">
                📍 Shop No. 12, Main Market Road,<br />
                Opposite Clock Tower, Ghaziabad, UP - 201001
              </p>
              <p className="font-normal">📞 Phone: +91 98765 43210</p>
              <p className="font-normal">✉️ Email: info@sparklesofkitchen.com</p>
              <p className="text-brand-orange font-body font-medium text-xs tracking-wider uppercase">
                ⏰ Daily: 10:00 AM – 8:30 PM (Closed Tuesdays)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-white/40 font-body">
          <p>© 2026 Sparkles of Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
