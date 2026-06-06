import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { create } from 'zustand';
import { toastSlide } from '../../utils/animations';

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (message, type = 'success') => {
    const id = Date.now();
    set((s) => ({ toasts: [...s.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, 2500);
  },
  removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

const ICONS = { success: '✅', error: '❌', info: 'ℹ️' };
const BORDER_COLORS = { success: 'border-l-emerald-600', error: 'border-l-red-700', info: 'border-l-brand-accent' };

function ToastItem({ toast }) {
  const removeToast = useToastStore((s) => s.removeToast);
  const handleRemove = useCallback(() => removeToast(toast.id), [toast.id, removeToast]);

  return (
    <motion.div
      layout
      variants={toastSlide}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex items-center gap-3 bg-brand-dark text-white px-6 py-4 rounded-[var(--radius-card)] shadow-drawer border-l-4 ${BORDER_COLORS[toast.type]} min-w-[300px] max-w-[420px]`}
      role="status"
      aria-live="polite"
    >
      <span className="text-lg">{ICONS[toast.type]}</span>
      <p className="flex-1 text-sm">{toast.message}</p>
      <button onClick={handleRemove} className="text-text-muted hover:text-white cursor-pointer" aria-label="Dismiss notification">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="fixed bottom-6 right-6 z-[2000] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
