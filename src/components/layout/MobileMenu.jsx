import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop', href: '#shop-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact', href: '#contact-section' },
];

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-card-hover z-[850] overflow-hidden"
    >
      <nav className="px-6 py-6 flex flex-col gap-4">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={onClose}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.05 }}
            className="text-lg font-medium text-text-primary hover:text-brand-accent"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
