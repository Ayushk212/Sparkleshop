import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product, qty = 1) => {
    set((state) => {
      const existing = state.items.find((i) => i.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + qty }
              : i
          ),
        };
      }
      return { items: [...state.items, { product, quantity: qty }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== id),
    }));
  },

  updateQty: (id, delta) => {
    set((state) => {
      const item = state.items.find((i) => i.product.id === id);
      if (!item) return state;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        return { items: state.items.filter((i) => i.product.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === id ? { ...i, quantity: newQty } : i
        ),
      };
    });
  },

  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  getTotal: () => {
    return get().items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  },

  getItemCount: () => {
    return get().items.reduce((s, i) => s + i.quantity, 0);
  },
}));

export default useCartStore;
