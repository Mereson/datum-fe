import { create } from "zustand"

export const useSelectStore = create((set) => ({
  openSelectIndex: null,
  setOpenSelectIndex: (index) =>
    set((state) => ({
      openSelectIndex: state.openSelectIndex === index ? null : index,
    })),
  closeSelect: () => set({ openSelectIndex: null }),
}))


