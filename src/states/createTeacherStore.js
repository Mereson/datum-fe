import { create } from "zustand";

export const useCreateTeacherForm = create((set) => ({
  teacher: {
    surName: "",
    firstName: "",
    otherName: "",
    gender: "",
    bloodGroup: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    address: "",
    stateOfOrigin: "",
    localGovernment: "",
    employmentRole: "",
    qualification: "",
    role: "",
    gradeLevel: "",
    step: "",
    file: null
  },
  setTeacher: (values) =>
    set((state) => ({
      teacher: {
        ...state.teacher,
        ...values,
      },
    })),
  resetTeachersForm: () => set({
    surName: "",
    firstName: "",
    otherName: "",
    gender: "",
    bloodGroup: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    address: "",
    stateOfOrigin: "",
    localGovernment: "",
    employmentRole: "",
    qualification: "",
    role: "",
    gradeLevel: "",
    step: "",
    file: null
  })
}))