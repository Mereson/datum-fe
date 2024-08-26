import { create } from "zustand";

export const useStudentsList = create((set) => ({
  studentsData: { data: [] },
  setStudentsData: (studentData) =>
    set(() => ({
      studentsData: {
        data: studentData,
      },
    })),
  studentsList: [],
  setStudentsList: (studentList) =>
    set(() => ({
      studentsList: studentList,
    })),
}));