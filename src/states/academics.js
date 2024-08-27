import { create } from "zustand"

export const useAcademicsStore = create((set) => ({
  activities: {
    activity: "",
    description: "",
    startDate: "",
    endDate: "",
  },
  setActivities: (values) =>
    set((state) => ({
      activities: {
        ...state.activities,
        ...values,
      },
    })),
  resetActivities: () =>
    set({
      activities: {
        activity: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    }),
}))
