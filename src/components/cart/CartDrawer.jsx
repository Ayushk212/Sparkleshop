import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import useCartStore from '../../store/useCartStore';
import { formatPrice } from '../../utils/formatPrice';
import { drawerSlideRight } from '../../utils/animations';
import Button from '../ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, getTotal } = useCartStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  const total = getTotal();
  const deliveryCharge = total >= 999 || total === 0 ? 0 : 99;
  const grandTotal = total + deliveryCharge;
  const progressPercent = Math.min((total / 999) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            variants={drawerSlideRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 right-0 bottom-0 w-full max-w-[420px] bg-white shadow-drawer flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-display font-bold text-text-primary">Your Cart</h2>
              <button
                onClick={closeCart}
                className="w-10 h-10 rounded-full flex items-center justify-center text-text-primary hover:bg-brand-off-white transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-20 h-20 bg-brand-off-white rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-text-muted" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Your cart is empty</h3>
                    <p className="text-sm text-text-secondary">Start adding items to populate your bag.</p>
                  </div>
                  <Button onClick={closeCart} variant="primary" className="mt-4">
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={item.product.id}
                        className="flex gap-4 border-b border-border pb-6 last:border-0 last:pb-0"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-[var(--radius-card)] bg-brand-off-white"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                            <h4 className="text-sm font-medium text-text-primary line-clamp-2">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-text-muted hover:text-red-600 transition-colors cursor-pointer"
                              aria-label="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-border rounded-[var(--radius-card)] h-8 w-24">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQty(item.product.id, -1)}
                                className="flex-1 h-full flex items-center justify-center text-text-primary hover:bg-brand-off-white cursor-pointer rounded-l-[var(--radius-card)]"
                              >
                                <Minus className="w-3 h-3" />
                              </motion.button>
                              <span className="flex-1 text-center text-sm font-medium select-none">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQty(item.product.id, 1)}
                                className="flex-1 h-full flex items-center justify-center text-text-primary hover:bg-brand-off-white cursor-pointer rounded-r-[var(--radius-card)]"
                                disabled={!item.product.inStock}
                              >
                                <Plus className="w-3 h-3" />
                              </motion.button>
                            </div>
                            <span className="font-bold text-brand-accent">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-brand-off-white border-t border-border">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-text-secondary mb-2">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-secondary mb-4">
                    <span>Local Delivery</span>
                    <span>{deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-text-primary pt-4 border-t border-border/50">
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <div className="bg-white rounded-[var(--radius-card)] p-4 mb-6 shadow-sm border border-border">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="text-text-secondary">Free Delivery Goal</span>
                    <span className="text-brand-accent">{progressPercent >= 100 ? 'Unlocked!' : `${formatPrice(999 - total)} away`}</span>
                  </div>
                  <div className="h-2 bg-brand-off-white rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${progressPercent >= 100 ? 'bg-emerald-500' : 'bg-brand-accent'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <Button variant="primary" className="w-full h-14 text-lg">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
