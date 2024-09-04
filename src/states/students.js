import { create } from "zustand"

export const useStudentsList = create((set) => ({
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


export const useStudentsData = create((set) => ({
  studentsData: JSON.parse(sessionStorage.getItem("studentsData")) || {
    message: "",
    parent: {},
  },
  setStudentsData: (newStudentsData) => {
    sessionStorage.setItem("studentsData", JSON.stringify(newStudentsData))
    set({
      studentsData: {
        message: newStudentsData.message,
        parent: newStudentsData.parent,
      },
    })
  },
  clearStudentsData: () => {
    sessionStorage.removeItem("studentsData")
    set({ studentsData: { message: "", parent: {} } })
  },
}))

export const useToken = create((set) => ({
  token: sessionStorage.getItem("authToken") || null,
  saveToken: (newToken) => {
    sessionStorage.setItem("authToken", newToken)
    set({ token: newToken })
  },
  clearToken: () => {
    sessionStorage.removeItem("authToken")
    set({ token: null })
  },
}))
