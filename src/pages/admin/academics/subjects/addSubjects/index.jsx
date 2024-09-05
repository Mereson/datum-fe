import { Form, Formik } from "formik"
import {
  CustomInput,
  FormButton,
  FormDropdown,
} from "../../../../../components"
import { Button } from "../../../../../components/button"
import { createSubject } from "../../../../../api"
import { useNavigate } from "react-router-dom"
import { addSubjectsSchema } from "../../../../../api/validationSchema"

export const AdminAddSubjects = () => {
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const data = await createSubject(values.name, values.classLevel)
    console.log(data)
    navigate("/admin/academics/subjects")
  }

  return (
    <section className="w-full h-full flex px-6 sm:px-[6.5rem] bg-[#f4f4f4] pt-20 pb-14 overflow-auto">
      <main className="w-full">
        <h2 className="font-semibold text-3xl text-[#4F4F4F]">Add Subject</h2>

        <Formik
          initialValues={{ name: "", classLevel: "" }}
          validationSchema={addSubjectsSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="pt-10 flex flex-col sm:grid sm:grid-cols-2 gap-x-12 gap-y-6">
              <CustomInput
                label={"Subject Name"}
                name={`name`}
                type="text"
                required={true}
              />
              <FormDropdown
                label={"Class Level"}
                name={`classLevel`}
                options={["JuniorSecondarySchool", "SeniorSecondarySchool"]}
                required={true}
              />

              <div className="col-span-2 flex gap-6 pt-7">
                <FormButton
                  type={"submit"}
                  content={"Add"}
                  className={
                    "bg-[#132985] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
                  }
                />
                <Button
                  link={"/admin/academics/subjects"}
                  content={"Cancel"}
                  className={
                    "bg-[#D0D4E7] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  )
}
