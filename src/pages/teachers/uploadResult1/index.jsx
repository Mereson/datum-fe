import PropTypes from "prop-types"
import { Form, Formik, useField } from "formik"
import { BackIcon, FormButton } from "../../../components"
import { uploadResultSchema } from "../../../api/validationSchema"
import { useMutation } from "@tanstack/react-query"
import { createResult } from "../../../api"
import { SchoolTeacher } from "../../../assets"

export const UploadResult1 = () => {
  const email = "e.nwankwo@genesystechhub.com"
  const mutation = useMutation({
    mutationFn: ({ email, file }) => createResult({ email, file }),
  })

  if (mutation.isSuccess) {
    console.log(mutation.data)
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error)
  }

  const onSubmit = async (values) => {
    console.log("hitting: ", email, values.file)
    mutation.mutate({ email: email, file: values.file })
  }
  return (
    <section className="w-full pt-6 sm:px-[6rem] overflow-auto bg-[#f4f4f4]">
      <div className="flex justify-between pb-14 px-3">
        <BackIcon link={"/teacher/uploadresult"} />

        <div className="flex gap-5 items-center justify-end">
          <div
            onClick={onclick}
            className="flex gap-2 cursor-pointer items-center"
          >
            <figure className="size-[50px] rounded-full">
              <img
                className="rounded-full"
                src={SchoolTeacher}
                alt="student image"
              />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold">Okafor Chinyere</p>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full grid place-items-center">
        <section className=" w-[85%] h-[576px]">
          <h2 className=" text-center sm:text-left text-2xl sm:text-[32px] font-semibold text-[#696969] pt-5 pb-8">
            Upload Result
          </h2>

          <Formik
            initialValues={{ file: null }}
            validationSchema={uploadResultSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <div className="w-[100%] h-36 my-10 bg-[#ECECEC] rounded-lg items-center justify-center flex flex-col relative cursor-pointer">
                  <MyFileInput name="file" />
                </div>
                <div className="pl-[40%]">
                  <FormButton
                    type="submit"
                    content="Submit"
                    className={
                      "bg-[#132985] w-[30%] py-[8px] text-center rounded-[8px] font-bold text-white cursor-pointer"
                    }
                    isPending={mutation.isPending}
                  />
                  {mutation.isError && (
                    <h2 className=" text-[red] pt-4">
                      {mutation?.error?.response?.data ||
                        mutation?.error.response.data.message}
                    </h2>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </section>
  )
}

const MyFileInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props)

  const handleChange = (event) => {
    const file = event.target.files[0] || null
    helpers.setValue(file)
    console.log(file)
  }

  return (
    <div className="relative">
      <input
        id={props.id || props.name}
        type="file"
        className="hidden"
        {...props}
        onChange={handleChange}
      />

      <span id="file-name" className="mr-2 text-gray-500">
        {field.value ? field.value.name : "Drag your CSV file here or"}
      </span>

      <label
        htmlFor={props.id || props.name}
        className="inline-block py-2 cursor-pointer text-blue-600 rounded-md"
      >
        Upload from here
      </label>
    </div>
  )
}

MyFileInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}
