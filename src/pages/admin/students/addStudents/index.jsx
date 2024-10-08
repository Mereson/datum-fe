import { FieldArray, Form, Formik, useField } from "formik"
import { createStudent } from "../../../../api"
import {
  BackIcon,
  CustomInput,
  FormButton,
  FormDropdown,
} from "../../../../components"
import { Button } from "../../../../components/button"
import { useCreateStudentForm } from "../../../../states/createStudentStore"
import { Link, useNavigate } from "react-router-dom"
import { studentDetailsSchema } from "../../../../api/validationSchema"
import { useEffect } from "react"
import { IoCheckmark } from "react-icons/io5"
import { useMutation } from "@tanstack/react-query"

export const AddStudents = () => {
  const {
    parentsFormData,
    studentsFormData,
    setStudentsFormData,
    resetStudentForm,
  } = useCreateStudentForm()

  const navigate = useNavigate()

  useEffect(() => {
    const form = {
      parentsFormData,
      studentsFormData,
    }
    console.log(form)
  }, [studentsFormData])

  const mutation = useMutation({
    mutationFn: ({ parents, students }) => createStudent(parents, students),
  })

  if (mutation.isSuccess) {
    resetStudentForm()
    navigate("/admin/studentsList")
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error)
  }

  const onSubmit = async (values) => {
    console.log("About to console")

    const updatedStudentsData = values.students.map((student, index) => {
      return {
        ...studentsFormData[index],
        ...student,
      }
    })

    setStudentsFormData(updatedStudentsData)

    mutation.mutate({
      parents: parentsFormData,
      students: updatedStudentsData,
    })

    console.log("Submitted Values:", values)
  }

  return (
    <section className="sm:px-[6.25rem] px-5 sm:py-20 h-full pb-36 w-full sm:pt-6 pt-5 bg-[#f4f4f4] overflow-auto ">
      <BackIcon link={"/admin/studentsList/addParents"} />
      <div className="pt-5">
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>

        <div className="pt-[4.875rem] grid place-items-center">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute  left-[26%] top-3" />
            <Link
              to={"/admin/studentsList/addParents"}
              className="grid place-items-center  gap-3"
            >
              <p className=" border-[#8a8a8a] border-[1.47px] text-[13.26px] text-[#132985] size-[29.46px] rounded-full grid place-items-center">
                <IoCheckmark />
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </Link>
            <div className="grid place-items-center  gap-3 ">
              <p className="bg-[#132985] text-[13.26px] size-[29.46px]  text-[#fff] rounded-full grid place-items-center  ">
                2
              </p>
              <p className="text-[#444] font-semibold text-[9px] sm:text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          students: studentsFormData,
        }}
        validationSchema={studentDetailsSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="students">
              {({ remove, push }) => (
                <>
                  {values.students.map((student, index) => (
                    <div key={index}>
                      <h1 className="text-[#696969] pt-[4.875rem] text-center font-bold text-3xl">
                        {`Student's`} Details
                      </h1>
                      <div className="pt-10 text-[#696969]">
                        <h4 className="font-extrabold text-xl text-[#696969]">
                          Personal Information
                        </h4>
                        <div className="pt-4 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                          <CustomInput
                            label={"Surname"}
                            name={`students[${index}].surName`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"First Name"}
                            name={`students[${index}].firstName`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Other Name"}
                            name={`students[${index}].otherName`}
                            type="text"
                            optionalMessage="Optional"
                          />
                          <CustomInput
                            label={"Date of Birth"}
                            name={`students[${index}].dateOfBirth`}
                            type="date"
                            required={true}
                          />
                          <FormDropdown
                            label={"Blood Group"}
                            name={`students[${index}].bloodGroup`}
                            options={["O+", "O-", "B+", "A+", "A-"]}
                            required={true}
                          />
                          <FormDropdown
                            label={"Gender"}
                            name={`students[${index}].gender`}
                            options={["Male", "Female"]}
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="pt-10 text-[#696969]">
                        <h4 className="font-extrabold text-xl text-[#696969]">
                          Contact Information
                        </h4>
                        <div className="pt-4 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                          <CustomInput
                            label={"Nationality"}
                            name={`students[${index}].nationality`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"State of Origin"}
                            name={`students[${index}].stateOfOrigin`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Local Government of Origin"}
                            name={`students[${index}].localGovernment`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Address"}
                            name={`students[${index}].address`}
                            type="text"
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="pt-10 text-[#696969]">
                        <h4 className="font-extrabold text-xl text-[#696969]">
                          School Information
                        </h4>
                        <div className="pt-4 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                          <FormDropdown
                            label={"Class"}
                            name={`students[${index}].class`}
                            options={[
                              "Jss1",
                              "Jss2",
                              "Jss3",
                              "Sss1",
                              "Sss2",
                              "Sss3",
                            ]}
                            required={true}
                          />
                          <FormDropdown
                            label={"Term"}
                            name={`students[${index}].term`}
                            options={["FirstTerm", "SecondTerm", "ThirdTerm"]}
                            required={true}
                          />
                          <CustomInput
                            label={"Previous School"}
                            name={`students[${index}].previousSchool`}
                            type="text"
                            optionalMessage="Optional"
                          />
                          <CustomInput
                            label={"Picture"}
                            name={`students[${index}].picture`}
                            type="text"
                            optionalMessage="Optional"
                          />
                        </div>
                      </div>
                      {values.students.length > 1 && index > 0 && (
                        <div className="flex justify-end">
                          <Button
                            onClick={() => remove(index)}
                            content="Remove Form"
                            className="bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() =>
                        push({
                          surName: "",
                          firstName: "",
                          otherName: "",
                          dateOfBirth: "",
                          bloodGroup: "",
                          nationality: "",
                          stateofOrigin: "",
                          localGovernment: "",
                          address: "",
                          class: "",
                          term: "",
                          previousSchool: "",
                          picture: "",
                        })
                      }
                      content="Add Form"
                      className="bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                    />
                    <FormButton
                      type="submit"
                      content="Submit"
                      className="bg-[#132985] w-[30%] sm:w-[12%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                    />
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      {/* {mutation.isError && (
        <h2 className=" text-[red] pb-4">{mutation.error}</h2>
      )} */}
    </section>
  )
}

const FileInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const isFilled = Boolean(field.value)

  const handleChange = (event) => {
    const file = event.target.files[0] || null
    helpers.setValue(file)
  }

  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type="file"
        className={`h-11 rounded-lg border-[0.5px] px-2 bg-[#f4f4f4]
            ${isFilled ? "border-green-500" : "border-[#a7a7a7]"} 
            ${meta.touched && meta.error ? "border-red-500" : ""}`}
        onChange={handleChange}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  )
}
