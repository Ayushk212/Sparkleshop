import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import useFilterStore from '../../store/useFilterStore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const openSearch = useFilterStore((s) => s.openSearch);

  // Scroll handler to detect scroll position > 50px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  // Helper to determine if link is active
  const isActive = (path) => location.pathname === path;

  // Determine if header should display solid white background (not transparent)
  const isHomePage = location.pathname === '/';
  const showSolid = !isHomePage || isScrolled;

  // Header classes depending on solid state
  const headerClass = showSolid
    ? 'bg-white text-brand-dark shadow-sm py-4 border-b border-brand-grey/50'
    : 'bg-transparent text-white py-6';

  const logoColor = showSolid ? 'text-brand-dark' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
        <div className="w-full px-6 flex items-center justify-between">
          
          {/* ZONE 1 — Logo, left-anchored */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link to="/" className={`font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${logoColor}`}>
              Sparkles <span className="text-brand-orange">of Kitchen</span>
            </Link>
          </div>

          {/* ZONE 2 — Nav links, spread out across the space */}
          <div className="hidden md:flex flex-1 items-center justify-between max-w-xl lg:max-w-2xl mx-12">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 font-body text-xs font-medium tracking-widest uppercase transition-colors duration-200
                  ${showSolid
                    ? isActive ? 'text-brand-dark' : 'text-brand-dark/60 hover:text-brand-dark'
                    : isActive ? 'text-white' : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Active indicator is an orange bottom border line, NOT a background box */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px]" style={{ backgroundColor: '#D4622A' }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ZONE 3 — Actions/Search icon, right-anchored */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <button
              onClick={openSearch}
              className={`p-2 transition-colors duration-200 cursor-pointer ${showSolid ? 'text-brand-dark hover:text-brand-orange' : 'text-white/70 hover:text-white'}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors duration-200 cursor-pointer ${showSolid ? 'text-brand-dark hover:text-brand-orange' : 'text-white/70 hover:text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Slide-in from Right */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-brand-dark/70 z-[100]"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-brand-blue z-[101] p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display text-white text-xl font-bold">Menu</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-brand-orange p-1 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`text-2xl font-display text-white hover:text-brand-orange transition-colors py-2 block ${
                        isActive(link.path) ? 'text-brand-orange font-bold' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/60 text-xs tracking-wider uppercase mb-2">Ghaziabad, India</p>
                <p className="text-white/80 text-sm">info@sparklesofkitchen.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
