export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' },
  hover: { y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.13)', transition: { duration: 0.3, ease: 'easeOut' } },
};

export const drawerSlideRight = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', damping: 28, stiffness: 300 } },
  exit: { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
};

export const drawerSlideLeft = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { type: 'spring', damping: 28, stiffness: 300 } },
  exit: { x: '-100%', transition: { duration: 0.25, ease: 'easeIn' } },
};

export const modalScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.2 } },
};

export const toastSlide = {
  hidden: { x: 120, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 30 } },
  exit: { x: 120, opacity: 0, transition: { duration: 0.2 } },
};

export const imageReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
};

export const cardItem = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};
