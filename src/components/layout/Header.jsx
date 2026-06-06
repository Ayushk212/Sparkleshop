import { useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import useCartStore from '../../store/useCartStore';
import useWishlistStore from '../../store/useWishlistStore';
import useFilterStore from '../../store/useFilterStore';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop', href: '#shop-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact', href: '#contact-section' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 60], [80, 60]);
  const headerBg = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.98)']);
  const headerBlur = useTransform(scrollY, [0, 60], ['blur(0px)', 'blur(12px)']);
  const headerShadow = useTransform(scrollY, [0, 60], ['0 0 0 rgba(0,0,0,0)', '0 2px 8px rgba(0,0,0,0.07)']);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const cartCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.ids.length);
  const openWishlist = useWishlistStore((s) => s.openWishlist);
  const openSearch = useFilterStore((s) => s.openSearch);

  const toggleMobile = useCallback(() => setMobileOpen((p) => !p), []);

  return (
    <>
      <motion.header
        style={{ height: headerHeight, backgroundColor: headerBg, backdropFilter: headerBlur, boxShadow: headerShadow }}
        className="sticky top-0 z-[900] w-full flex justify-center items-center border-b border-border"
      >
        <div className="max-w-[1280px] px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1 text-text-primary text-xl">
            <span className="text-lg">✨</span>
            <span className="font-body font-normal">Sparkles of</span>
            <span className="font-display font-bold italic text-brand-accent">Kitchen</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 list-none">
              {NAV_LINKS.map((link) => (
                <motion.li key={link.label} whileHover={{ y: -1 }} className="relative">
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className="text-[15px] font-medium text-text-secondary hover:text-text-primary py-6 block"
                  >
                    {link.label}
                  </a>
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button onClick={openSearch} className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-off-white cursor-pointer" aria-label="Search products">
              <Search className="w-5 h-5 text-text-primary" />
            </button>
            <button onClick={openWishlist} className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-off-white cursor-pointer" aria-label="Open wishlist">
              <Heart className="w-5 h-5 text-text-primary" />
              <AnimatePresence>
                {wishlistCount > 0 && (
                  <motion.span
                    key={wishlistCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.4, 1] }}
                    className="absolute -top-0.5 -right-0.5 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button onClick={openCart} className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-brand-off-white cursor-pointer" aria-label="Open cart">
              <ShoppingBag className="w-5 h-5 text-text-primary" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.4, 1] }}
                    className="absolute -top-0.5 -right-0.5 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button onClick={toggleMobile} className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer" aria-label="Toggle menu" aria-expanded={mobileOpen}>
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={toggleMobile} />}
      </AnimatePresence>
    </>
  );
}
