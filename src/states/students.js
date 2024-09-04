import { create } from "zustand"

export const useStudentsList = create((set) => ({
  studentsData: {
    message: "",
    parent: {},
  },
  setStudentsData: (studentData) =>
    set(() => ({
      studentsData: {
        message: studentData.message,
        parent: studentData.parent,
      },
    })),
  studentsList: [],
  setStudentsList: (studentList) =>
    set(() => ({
      studentsList: studentList,
    })),
  studentsIdData: { data: [] },
  setStudentsIdData: (studentIdData) =>
    set(() => ({
      studentsIdData: studentIdData,
    })),
}))

export const useToken = create((set) => ({
  token: sessionStorage.getItem("authToken") || null, // Initialize token from session storage
  saveToken: (newToken) => {
    sessionStorage.setItem("authToken", newToken)
    set({ token: newToken })
  },
  clearToken: () => {
    sessionStorage.removeItem("authToken")
    set({ token: null })
  },
}))
