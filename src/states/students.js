import { create } from "zustand";

export const useStudentsList = create((set) => ({
  studentsList: { data: [] },
  setStudentsList: (studentsData) =>
    set(() => ({
      studentsList: {
        data: studentsData,  
      },
    })),
}));