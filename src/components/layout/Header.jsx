import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide navbar when scrolling DOWN past 80px
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true);
      }
      // Show navbar when scrolling UP
      else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Determine if header should display solid white background (not transparent)
  const isHomePage = location.pathname === '/';
  const showSolid = !isHomePage || isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 transition-all duration-300
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
        ${showSolid ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
      `}>
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2">
          {/* Falling back to text-logo since no logo.png exists */}
          <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-200
            ${showSolid ? 'text-[#111827]' : 'text-white'}`}
          >
            Sparkles <span className="text-[#F97316]">of Kitchen</span>
          </span>
        </Link>

        {/* Nav links — right side, evenly spaced */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `font-body text-[15px] font-medium transition-colors duration-200
                ${showSolid
                  ? isActive ? 'text-[#F97316]' : 'text-gray-700 hover:text-gray-900'
                  : isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button 
          className={`md:hidden p-2 transition-colors duration-200 cursor-pointer ${showSolid ? 'text-gray-900' : 'text-white'}`} 
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

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
              className="fixed inset-0 bg-[#111827]/70 z-[100]"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-[#2563EB] z-[101] p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display text-white text-xl font-bold">Menu</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-[#F97316] p-1 cursor-pointer"
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
                      className="text-2xl font-display text-white hover:text-[#F97316] transition-colors py-2 block"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/60 text-[13px] tracking-wide mb-2">Ghaziabad, India</p>
                <p className="text-white/80 text-sm">info@sparklesofkitchen.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
