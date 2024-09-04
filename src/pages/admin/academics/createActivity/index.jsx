import { Form, Formik } from "formik"
import { CustomInput, FormButton } from "../../../../components"
import { Button } from "../../../../components/button"
import { activitiesSchema } from "../../../../api/validationSchema"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { createActivity } from "../../../../api"

export const AdminCreateActivity = () => {
  const navigate = useNavigate()


  const mutation = useMutation({
    mutationFn: (activity) => createActivity(activity),
  })

  if (mutation.isSuccess) {
    console.log(mutation.data)
    navigate("/admin/academics/events")
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error)
  }

  const onSubmit = async (values) => {
    console.log(values)
    mutation.mutate(values)
  }

  return (
    <section className="w-full flex px-[6.5rem] bg-[#f4f4f4] pt-20 pb-14 overflow-auto">
      <main className="w-full">
        <h2 className="font-semibold text-3xl text-[#4F4F4F]">
          Create Activity 
        </h2>
        <Formik
          initialValues={{
            title: "",
            description: "",
            startDate: "",
            endDate: "",
          }}
          validationSchema={activitiesSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="pt-10 grid grid-cols-2 gap-x-12 gap-y-6">
              <CustomInput
                label={"Activity"}
                name="title"
                type="text"
                required={true}
              />
              <CustomInput
                label={"Description"}
                name="description"
                type="text"
                required={true}
                capitalize={false}
              />
              <CustomInput
                label={"Start Date"}
                name="startDate"
                type="date"
                required={true}
              />
              <CustomInput
                label={"End Date"}
                name="endDate"
                type="date"
                required={true}
              />
              <div className="col-span-2 flex gap-6">
                <FormButton
                  type="submit"
                  content="Create"
                  className={
                    "bg-[#132985] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
                  }
                />
                <Button
                  link={"/admin/academics/events"}
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
