import { create } from 'zustand';

const useWishlistStore = create((set, get) => ({
  ids: [],
  isOpen: false,

  toggle: (id) => {
    set((state) => {
      if (state.ids.includes(id)) {
        return { ids: state.ids.filter((x) => x !== id) };
      }
      return { ids: [...state.ids, id] };
    });
  },

  isLiked: (id) => get().ids.includes(id),
  openWishlist: () => set({ isOpen: true }),
  closeWishlist: () => set({ isOpen: false }),
}));

export default useWishlistStore;
