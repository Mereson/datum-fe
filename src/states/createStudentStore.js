import { create } from "zustand";

export const useCreateStudentForm = create((set) => ({
  parent: {
    surName: "",
    firstName: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    relationship: "",
  },

  students: [
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
      enrollmentDate: "",
      class: "",
      term: "",
      picture: "",
      previousSchool: "",
    },
  ],
  setParentsData: (field, value) =>
    set((state) => ({
      parent: {
        ...state.parent,
        [field]: value,
      },
    })),
  setStudentData: (index, field, value) =>
    set((state) => ({
      students: state.students.map((student, i) =>
        i === index ? { ...student, [field]: value } : student
      ),
    })),
  addStudent: () =>
    set((state) => ({
      students: [
        ...state.students,
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
          enrollmentDate: "",
          class: "",
          term: "",
          picture: "",
          previousSchool: "",
        },
      ],
    })),
  removeStudent: (index) =>
    set((state) => ({
      students: state.students.filter((_, i) => i !== index),
    })),
  resetStudentForm: () =>
    set({
      parent: {
        surname: "",
        firstName: "",
        otherName: "",
        email: "",
        phoneNumber: "",
        relationship: "",
      },
      students: [
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
          enrollmentDate: "",
          class: "",
          term: "",
          picture: "",
          previousSchool: "",
        },
      ],
    }),
}));
