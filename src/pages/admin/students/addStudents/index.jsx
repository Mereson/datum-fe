import { Form, Formik } from "formik"
import { createStudent } from "../../../../api"
import { CustomInput, Dropdown, FormButton, FormDropdown, FormInput } from "../../../../components"
import { Button } from "../../../../components/button"
import { useCreateStudentForm } from "../../../../states/createStudentStore"
import { Link, useNavigate } from "react-router-dom"
import { studentDetailsSchema } from "../../../../api/validationSchema"
import { useEffect } from "react"

export const AddStudents = () => {

  const { parentsFormData, studentsFormData, setStudentsFormData, addStudentForm, removeStudentForm, resetStudentForm } = useCreateStudentForm()

  const navigate = useNavigate()

  useEffect(() => {
    console.log("Updated parentsFormData:", studentsFormData);
  }, [studentsFormData])

  const onSubmit = (values) => {
    setStudentsFormData(values)
    // navigate("/admin/studentsList")
  }


  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>

        <div className="pt-[4.875rem] grid place-items-center">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute  left-[26%] top-3" />
            <Link to={"/admin/studentsList/addParents"} className="grid place-items-center  gap-3">
              <p className=" border-[#8a8a8a] border-[1.47px] text-[13.26px]  text-[#8a8a8a] size-[29.46px] rounded-full grid place-items-center">
                1
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </Link>
            <div className="grid place-items-center  gap-3 ">
              <p className="bg-[#132985] text-[13.26px] size-[29.46px]  text-[#fff] rounded-full grid place-items-center  ">
                2
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>

        </div>


        <Formik
          initialValues={
            {
              students: [studentsFormData]
            }
          }
          validationSchema={studentDetailsSchema}
          onSubmit={onSubmit}
        >


          {/* Div for the Personal information */}
          <Form>
            {students.map((student, index) => (
              <div key={index}>
                <h1 className="text-[#696969] pt-[4.875rem] text-center  font-bold text-3xl">
                  {`Student's`} Details
                </h1>
                <div className="pt-10 text-[#696969] ">
                  <h4 className="font-extrabold text-xl text-[#696969]">
                    Personal Information
                  </h4>

                  <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                    <CustomInput
                      label={"Surname"}
                      name="SurName"
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
                      required={true}
                    />
                    <CustomInput
                      label={"Date of Birth"}
                      name="dateOfBirth"
                      type="text"
                      required={true}
                    />
                    <FormDropdown
                      label={"Blood Group"}
                      name={"bloodGroup"}
                      options={["O+", "O-", "B+", "A+", "A-"]}
                      required={true}
                    />
                  </div>
                </div>

                < div className="pt-10 text-[#696969] " >
                  <h4 className="font-extrabold text-xl text-[#696969]">
                    Contact Information
                  </h4>
                  <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                    <CustomInput
                      label={"Nationality"}
                      name="nationality"
                      type="text"
                      required={true}
                    />
                    <CustomInput
                      label={"State of Origin"}
                      name="stateofOrigin"
                      type="text"
                      required={true}
                    />
                    <CustomInput
                      label={"Local Government of Origin"}
                      name="localGovernment"
                      type="text"
                      required={true}
                    />
                    <CustomInput
                      label={"Address"}
                      name="address"
                      type="text"
                      required={true}
                    />
                  </div>
                </div>

                <div className="pt-10 text-[#696969] ">
                  <h4 className="font-extrabold text-xl text-[#696969]">
                    School Information
                  </h4>
                  <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                    <CustomInput
                      label={"Class"}
                      name="class"
                      type="text"
                      required={true}
                    />
                    <CustomInput
                      label={"Term"}
                      name="term"
                      type="text"
                      required={true}
                    />
                    <CustomInput
                      label={"Previous School"}
                      name="previousSchool"
                      type="text"
                    />
                    <CustomInput
                      label={"Picture"}
                      name="picture"
                      type="text"
                    />
                  </div>
                </div>
                {studentsFormData.length >= 2 && index > 0 ? (
                  <div className="flex justify-end">
                    <Button
                      onClick={() => removeStudentForm(index)}
                      content="Remove Form"
                      className={
                        "bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                      }
                    />
                  </div>
                ) : ("")}
              </div>
            ))}

            <div className="flex items-center justify-between">

              <Button
                onClick={addStudentForm}
                content="Add Form"
                className={
                  "bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                }
              />

              <FormButton
                type="submit"
                content="Submit"
                className={
                  "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                }
              />
            </div>
          </Form>
        </Formik >

      </div >
    </section >
  )
}

function checkEmptyFields(obj) {
  let hasEmptyFields = false;

  const isEmpty = (value) => {
    if (value === null || value === "") {
      return true;
    }

    if (typeof value === "object" && value instanceof File && value.type.startsWith("image/")) {
      return false;
    }

    return false;
  };

  const traverse = (currentObj, path = "") => {
    for (const key in currentObj) {
      const fullPath = path ? `${path}.${key}` : key;

      if (typeof currentObj[key] === "object" && currentObj[key] !== null && !(currentObj[key] instanceof File)) {
        traverse(currentObj[key], fullPath);
      } else if (isEmpty(currentObj[key])) {
        console.log(`No value in the field: ${fullPath}`);
        hasEmptyFields = true;
      }
    }
  };

  traverse(obj);
  return hasEmptyFields;
}
