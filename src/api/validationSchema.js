import * as Yup from "yup"

export const ParentDetailsSchema = Yup.object().shape({
  surName: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  relationship: Yup.string().required("Relationship is required"),
})

export const studentDetailsSchema = Yup.object().shape({
  students: Yup.array().of(
    Yup.object().shape({
      surName: Yup.string().required("Surname is required"),
      firstName: Yup.string().required("First Name is required"),
      otherName: Yup.string().required("Other Name is required"),
      dateOfBirth: Yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Date format must be YYYY-MM-DD")
        .required("Date of Birth is required"),
      bloodGroup: Yup.string().required("Blood Group is required"),
      gender: Yup.string().required("gender is required"),
      nationality: Yup.string().required("Nationality is required"),
      stateOfOrigin: Yup.string().required("State of Origin is required"),
      localGovernment: Yup.string().required(
        "Local Government Area is required"
      ),
      address: Yup.string().required("Address is required"),
      class: Yup.string().required("Class is required"),
      term: Yup.string()
        .matches(
          /^(firstTerm|FirstTerm|secondTerm|SecondTerm|thirdTerm|ThirdTerm)$/,
          "The term must be either 'FirstTerm' 'SecondTerm' or 'ThirdTerm'"
        )
        .required("Term is required"),
      picture: Yup.string().optional(),
      previousSchool: Yup.string().optional(),
    })
  ),
})

export const checkForCorrectPhoneNumber = (value) =>
  /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value)

export const teacherDetailsSchema = Yup.object().shape({
  surName: Yup.string().required("Surname is required"),
  firstName: Yup.string().required("First Name is required"),
  otherName: Yup.string().required("Other Name is required"),
  gender: Yup.string().required("gender is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
  dateOfBirth: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date format must be YYYY-MM-DD")
    .required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  stateOfOrigin: Yup.string().required("State of Origin is required"),
  localGovernment: Yup.string().required("Local Government Area is required"),
  employmentRole: Yup.string().required("Subject is required"),
  qualification: Yup.string().required("Qualification is required"),
  role: Yup.string().required("Role is required"),
  gradeLevel: Yup.string().required("Grade Level is required"),
  step: Yup.string().required("Step is required"),
  file: Yup.string().required("File is required"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .test("text number", "invaild phone number", checkForCorrectPhoneNumber),
})

export const activitiesSchema = Yup.object().shape({
  title: Yup.string().required("Activity is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.string().required("Start Date is required"),
  endDate: Yup.string().required("End Date is required"),
})

export const addSubjectsSchema = Yup.object().shape({
  name: Yup.string().required("Subject is required"),
  classLevel: Yup.string().required("Class Level is required"),
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
})

export const uploadResultSchema = Yup.object().shape({
  file: Yup.mixed().required("A file is required"),
  // .test(
  //   "fileFormat",
  //   "Only CSV files are accepted",
  //   (value) => value && value.type === "text/csv"
  // ),
})
