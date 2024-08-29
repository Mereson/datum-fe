import { create } from "zustand"

export const useCreateStudentForm = create((set) => ({
  parentsFormData: {
    surName: "",
    firstName: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    relationship: "",
  },

  studentsFormData: [
    {
      surName: "",
      firstName: "",
      otherName: "",
      dateOfBirth: "",
      bloodGroup: "",
      gender: "",
      nationality: "",
      stateOfOrigin: "",
      localGovernment: "",
      address: "",
      class: "",
      term: "",
      picture: "",
      previousSchool: "",
    },
  ],

  setParentsFormData: (values) =>
    set((state) => ({
      parentsFormData: {
        ...state.parentsFormData,
        ...values,
      },
    })),

  setStudentsFormData: (students) =>
    set(() => ({
      studentsFormData: students,
    })),

  resetStudentForm: () =>
    set({
      parentsFormData: {
        surName: "",
        firstName: "",
        otherName: "",
        email: "",
        phoneNumber: "",
        relationship: "",
      },
      studentsFormData: [
        {
          surName: "",
          firstName: "",
          otherName: "",
          dateOfBirth: "",
          bloodGroup: "",
          gender: "",
          nationality: "",
          stateOfOrigin: "",
          localGovernment: "",
          address: "",
          class: "",
          term: "",
          picture: "",
          previousSchool: "",
        },
      ],
    }),
}))
