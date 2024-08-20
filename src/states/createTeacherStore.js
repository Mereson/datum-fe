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
    File: ""
  },
  setTeacherData: (field, value) => set((state) => ({
    teacher: {
      ...state.teacher,
      [field]: value
    }
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
    File: ""
  })
}))