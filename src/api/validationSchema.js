import * as Yup from "yup";

export const ParentDetailsSchema = Yup.object().shape({
  surName: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  relationship: Yup.string().required("Relationship is required"),
});

export const studentDetailsSchema = Yup.object().shape({
  surName: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("First Name is required"),
  otherName: Yup.string().notRequired("Other Name is required"),
  dateOfBirth: Yup.string().ensure("Date format: 2006-07-22").required("Date of Birth is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
  gender: Yup.string().required("gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  stateOfOrigin: Yup.string().required("State of Origin is required"),
  localGovernment: Yup.string().required("Local Government Area is required"),
  address: Yup.string().required("Address is required"),
  class: Yup.string().required("Class is required"),
  term: Yup.string().required("Term is required"),
  picture: Yup.string().notRequired("Picture not required"),
  previousSchool: Yup.string().notRequired("Previous School not required"),
});

const studentDetailsSchema = Yup.object().shape({
  students: Yup.array().of(
    Yup.object().shape({
      surName: Yup.string().required("Surname is required"),
      firstName: Yup.string().required("First Name is required"),
      otherName: Yup.string().notRequired("Other Name is required"),
      dateOfBirth: Yup.string().ensure("Date format: 2006-07-22").required("Date of Birth is required"),
      bloodGroup: Yup.string().required("Blood Group is required"),
      gender: Yup.string().required("gender is required"),
      nationality: Yup.string().required("Nationality is required"),
      stateOfOrigin: Yup.string().required("State of Origin is required"),
      localGovernment: Yup.string().required("Local Government Area is required"),
      address: Yup.string().required("Address is required"),
      class: Yup.string().required("Class is required"),
      term: Yup.string().required("Term is required"),
      picture: Yup.string().notRequired("Picture not required"),
      previousSchool: Yup.string().notRequired("Previous School not required"),
    })
  ),
});
