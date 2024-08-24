import { CustomInput, FormButton, FormDropdown } from "../../../../components"
import { Form, Formik } from "formik"
import { useCreateTeacherForm } from "../../../../states/createTeacherStore"
import { teacherDetailsSchema } from "../../../../api/validationSchema"

export const AddTeacher = () => {

  const { teacher, setTeacher } = useCreateTeacherForm()

  const onSubmit = (values) => {
    setTeacher(values)
    console.log(values)
  }

  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        {/* This div is for Add teacher and import csv */}
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Teacher</h2>
          <div className="flex gap-12 pt-5 font-bold">
            <p className="text-[#0d1b59] underline underline-offset-8 ">
              Manually
            </p>
            <p className="text-[#8A8A8A]">Import CSV </p>
          </div>
        </div>

        <div className="pt-[55px] grid place-items-center">
          <h1 className="text-[#696969] font-bold text-3xl">
            {`Teacher's`} Details
          </h1>
        </div>

        <Formik
          initialValues={teacher}
          validationSchema={teacherDetailsSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="pt-10 grid gap-x-12 gap-y-6" >

              <div className="w-[10%]">
                <CustomInput
                  label={"Teachers Photo"}
                  name="File"
                  type="file"
                  required={true}
                />

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

                <div className="pt-4 w-[50%] gap-x-12 gap-y-6">
                  <CustomInput
                    label={"Subject"}
                    name={`employmentRole`}
                    type="text"
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
                content="Next"
                className={
                  "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                }
              />

            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}