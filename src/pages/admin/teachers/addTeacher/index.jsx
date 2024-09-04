import {
  AdminIcon,
  BackIcon,
  CustomInput,
  FormButton,
  FormDropdown,
} from "../../../../components"
import { Form, Formik, useField } from "formik"
import { useCreateTeacherForm } from "../../../../states/createTeacherStore"
import { teacherDetailsSchema } from "../../../../api/validationSchema"
import { createTeacher } from "../../../../api"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

export const AddTeacher = () => {
  const { teacher, setTeacher, resetTeachersForm } = useCreateTeacherForm()

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (teacher) => createTeacher(teacher),
  })

  if (mutation.isSuccess) {
    resetTeachersForm()
    navigate("/admin/teachers")
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error)
  }

  const onSubmit = async (values) => {
    console.log(values)
    setTeacher(values)
    mutation.mutate(values)
  }

  return (
    <section className="px-[6.25rem] pt-7 pb-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div className="flex flex-col">
        <div className="flex justify-between pb-16">
          <div className="flex items-end">
            <BackIcon link={"/admin/teachers"} />
          </div>
          <AdminIcon />
        </div>
      </div>
      <div>
        {/* This div is for Add teacher and import csv */}
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-3xl text-[#1e1e1e]">Add Teacher</h2>
          <div className="flex gap-12 pt-5 font-bold">
            <p className="text-[#0d1b59] underline underline-offset-8 ">
              Manually
            </p>
            <p className="text-[#8A8A8A]">Import CSV </p>
          </div>
        </div>

        <div className="pt-[5rem] grid place-items-center">
          <h1 className="text-[#1e1e1e] font-semibold text-3xl">
            {`Teacher's`} Details
          </h1>
        </div>

        <Formik
          initialValues={teacher}
          validationSchema={teacherDetailsSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="pt-10 grid gap-x-12 gap-y-6">
              <div className="w-[50%]">
                <FileInput label={"Teachers Photo"} name="file" type="file" />
              </div>

              <div className="pt- text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Personal Information
                </h4>
                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <CustomInput
                    label={"Surname"}
                    name="surName"
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"First Name"}
                    name="firstName"
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"Other Name"}
                    name={`otherName`}
                    type="text"
                    optionalMessage="Optional"
                  />
                  <CustomInput
                    label={"Date of Birth"}
                    name={`dateOfBirth`}
                    type="text"
                    required={true}
                  />
                  <FormDropdown
                    label={"Blood Group"}
                    name={`bloodGroup`}
                    options={["O+", "O-", "B+", "A+", "A-"]}
                    required={true}
                  />
                  <FormDropdown
                    label={"Gender"}
                    name={`gender`}
                    options={["Male", "Female"]}
                    required={true}
                  />
                </div>
              </div>

              {/* This is the div for Educational Background */}
              <div className="pt-10 text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Education Background
                </h4>
                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <FormDropdown
                    label={"Qualification"}
                    name={`qualification`}
                    options={[
                      "SSCE/NECO",
                      "HND/Bachelor's Degree",
                      "Master's Degree",
                      "PHD",
                    ]}
                    required={true}
                  />
                  <FormDropdown
                    label={"Grade Level"}
                    name={`gradeLevel`}
                    options={[
                      "04",
                      "05",
                      "06",
                      "07",
                      "08",
                      "09",
                      "10",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                    ]}
                    required={true}
                  />

                  <FormDropdown
                    label={"Step"}
                    name={`step`}
                    options={["01", "02", "03", "04", "05", "06"]}
                    required={true}
                  />
                </div>
              </div>

              <div className="pt-10 text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Teaching details
                </h4>

                <div className="pt-4 grid grid-cols-2 w-[100%] gap-x-12 gap-y-6">
                  <CustomInput
                    label={"Subject"}
                    name={`employmentRole`}
                    type="text"
                    required={true}
                  />
                  <FormDropdown
                    label={"Role"}
                    name={`role`}
                    options={["Teacher"]}
                    required={true}
                  />
                </div>
              </div>

              {/* div for the contact information*/}
              <div className="pt-10 text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Contact Information
                </h4>
                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <CustomInput
                    label={"Phone Number"}
                    name={`phoneNumber`}
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"Email"}
                    name={`email`}
                    type="text"
                    required={true}
                    capitalize={false}
                  />
                  <CustomInput
                    label={"Nationality"}
                    name={`nationality`}
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"State Of Origin"}
                    name={`stateOfOrigin`}
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"Local Government Of Origin"}
                    name={`localGovernment`}
                    type="text"
                    required={true}
                  />
                  <CustomInput
                    label={"Address"}
                    name={`address`}
                    type="text"
                    required={true}
                  />
                </div>
              </div>

              <FormButton
                type="submit"
                content="Submit"
                className={
                  "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                }
                isPending={mutation.isPending}
              />
            </Form>
          )}
        </Formik>
        {mutation.isError && (
          <h2 className=" text-[red] pb-4">
            {mutation?.error?.response?.data?.message}
          </h2>
        )}
      </div>
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

FileInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
}
