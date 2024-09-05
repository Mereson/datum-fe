import { create } from "zustand"

// This is used in the admin section
export const useTeachersData = create((set) => ({
  teachersData: {},
  setTeachersData: (values) =>
    set((state) => ({
      teachersData: {
        ...state.teachersData,
        ...values,
      },
    })),
}))

// This is for the teacher login details
export const useTeacher = create((set) => ({
  teacher: {},
  setTeacher: (values) =>
    set((state) => ({
      teacher: {
        ...state.teacher,
        ...values,
      },
    })),
}))

export const useTeacherToken = create((set) => ({
  teacherToken: sessionStorage.getItem("authTeacherToken") || null,
  saveTeacherToken: (newToken) => {
    sessionStorage.setItem("authTeacherToken", newToken)
    set({ teacherToken: newToken })
  },
  clearTeacherToken: () => {
    sessionStorage.removeItem("authTeacherToken")
    set({ teacherToken: null })
  },
}))
