import { create } from "zustand";

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

  setStudentsFormData: (index, field, value) =>
    set((state) => ({
      studentsFormData: state.studentsFormData.map((student, i) =>
        i === index ? { ...student, [field]: value } : student
      ),
    })),

  addStudentForm: () =>
    set((state) => ({
      studentsFormData: [
        ...state.studentsFormData,
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
    })),

  removeStudentForm: (index) =>
    set((state) => ({
      studentsFormData: state.studentsFormData.filter((_, i) => i !== index),
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
}));
