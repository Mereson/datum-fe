import { create } from "zustand"

export const useAcademicsStore = create((set) => ({
  subjectsData: [],
  setSubjectsData: (subjectData) =>
    set(() => ({
      subjectsData: subjectData,
    })),
}))
