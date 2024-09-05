import { useNavigate } from "react-router-dom"
import { CustomInput, FormButton, FormDropdown } from "../../../../components"
import { useCreateStudentForm } from "../../../../states/createStudentStore"
import { Form, Formik } from "formik"
import { ParentDetailsSchema } from "../../../../api/validationSchema"

export const AddParents = () => {
  const { parentsFormData, setParentsFormData } = useCreateStudentForm()
  const navigate = useNavigate()

  const onSubmit = (values) => {
    setParentsFormData(values)
    navigate("/admin/studentsList/addStudents")
  }

  return (
    <section className="sm:px-[6.25rem] px-4 pt-7 pb-40 sm:py-20 w-full h-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>
        {/* <div className="flex gap-12 pt-5 font-bold">
          <p className="text-[#0d1b59] underline underline-offset-8 ">
            Manually
          </p>
          <p className="text-[#8A8A8A]">Import CSV </p>
        </div> */}

        <div className="pt-10 grid place-items-center gap-12">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute  left-[26%] top-3" />
            <div className="grid place-items-center  gap-3">
              <p className="bg-[#132985] text-[13.26px] text-[#fff] size-[29.46px] rounded-full grid place-items-center">
                1
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </div>
            <div
              to={"/admin/studentsList/addStudents"}
              className="grid place-items-center  gap-3 "
            >
              <p className="text-[13.26px] text-[#8a8a8a] size-[29.46px] rounded-full grid place-items-center border-[#8a8a8a] border-[1.47px]">
                2
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>
          <h1 className="text-[#696969] font-bold text-3xl">Parent Details</h1>

          <div className="flex gap-12 font-bold">
            {/* <p className="text-[#8A8A8A]">Existing Parent</p>
            <p className="text-[#0d1b59] hover: [#f4901f] hover:text-underline">
              New Parent
            </p> */}
          </div>
        </div>

        <Formik
          initialValues={parentsFormData}
          validationSchema={ParentDetailsSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="pt-10 grid sm:grid-cols-2 gap-x-12 gap-y-6">
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
                name="otherName"
                type="text"
                optionalMessage="Optional"
              />
              <CustomInput
                label={"Email"}
                name="email"
                type="email"
                required={true}
                capitalize={false}
              />
              <CustomInput
                label={"Phone Number"}
                name="phoneNumber"
                type="text"
                required={true}
              />
              <FormDropdown
                label={"Relationship"}
                name="relationship"
                options={["Father", "Mother", "Guardian"]}
                required={true}
              />

              <FormButton
                type="submit"
                content="Next"
                className={
                  "bg-[#132985] w-[30%] pl-30% py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                }
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}
