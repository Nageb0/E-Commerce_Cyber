import toast from "react-hot-toast";
import { create } from "zustand";

export const domainApi = "https://reassuring-spirit-778276d690.strapiapp.com";

export const useActivePage = create((set) => ({
  value: 1,
  setActivePage: (newValue) => set({ value: newValue }),
}));

export const lodarModal = create((set) => ({
  value: true,
  openLodar: () => set({ value: true }),
  clousLodar: () => set({ value: false }),
}));

export const useWichListModal = create((set) => ({
  value: false,
  products: [],
  openModal: () => set({ value: true }),
  clousModal: () => set({ value: false }),
  addToWishList: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeFromWishList: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
}));

export const useAddtoCard = create((set, get) => ({
  items: [],
  addToCard: (newOpj) =>
    set((state) => {
      const foundIndex = state.items.findIndex((item) => item.id === newOpj.id);
      if (foundIndex !== -1) {
        const items = state.items.map((item) =>
          item.id === newOpj.id ? { ...item, qty: (item.qty ?? 1) + 1 } : item
        );
        toast.success('The quantity has been increased successfully')
        return { items };
      }
      toast.success('Product is added successfully')
      return { items: [...state.items, { ...newOpj, qty: newOpj.qty ?? 1 }] };
    }),
  removeFromShopCard: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

  inCreaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty ?? 1 }
          : item
      ),
    })),

  deCreaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  rest: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, qty: 1 } : item
      ),
    })),

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce(
      (total, el) => total + (el.price ?? 0) * (el.qty ?? 1),
      0
    );
  },
}));

export const useSideHeader = create((set) => ({
  index: false,
  openSideHeader: () => set({ index: true }),
  closeSideHeader: () => set({ index: false }),
}));

