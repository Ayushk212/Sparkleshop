import { create } from 'zustand';

const useFilterStore = create((set) => ({
  activeCategory: 'all',
  sortBy: 'featured',
  searchQuery: '',
  searchHistory: [],
  isSearchOpen: false,

  setCategory: (cat) => set({ activeCategory: cat }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setSearch: (query) => set({ searchQuery: query }),
  addToHistory: (q) =>
    set((s) => ({
      searchHistory: [q, ...s.searchHistory.filter((x) => x !== q)].slice(0, 6),
    })),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  resetFilters: () => set({ activeCategory: 'all', sortBy: 'featured', searchQuery: '' }),
}));

export default useFilterStore;
