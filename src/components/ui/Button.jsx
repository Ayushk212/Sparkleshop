import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-brand-accent text-white hover:bg-brand-accent-hover',
  outline: 'bg-transparent border border-border text-text-primary hover:border-text-primary hover:bg-brand-off-white',
  ghost: 'bg-transparent text-text-primary hover:bg-brand-off-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm tracking-[0.15em] uppercase',
  md: 'px-6 py-3 text-sm tracking-[0.15em] uppercase',
  lg: 'px-8 py-4 text-base tracking-[0.15em] uppercase',
};

export default function Button({ children, variant = 'primary', size = 'md', className = '', disabled = false, onClick, ariaLabel, type = 'button' }) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`inline-flex items-center justify-center gap-2 font-body font-medium rounded-[var(--radius-card)] cursor-pointer transition-colors ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
};
