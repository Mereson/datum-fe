import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { createRemark } from "../../../api"
import { useStudentsList } from "../../../states/students"
import { Form, Formik } from "formik"
import Proptypes from "prop-types"

export const Remark = () => {
  const { studentsIdData } = useStudentsList()
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: ({ studentId, remark, Class, term, subject }) =>
      createRemark(studentId, remark, Class, term, subject),
  })

  const teachersRemark = {
    remark: "",
  }

  if (mutation.isSuccess) {
    // navigate("/teacher/students")
  }

  if (mutation.isError) {
    console.error("Mutation error:", mutation.error)
  }

  const currentTerm = "FirstTerm"
  const subject = "English"

  const onSubmit = (values) => {
    console.log("Hiting: ", studentsIdData.id)
    console.log("Hiting: ", values.remark)
    console.log("Hiting: ", studentsIdData.class)
    console.log("Hiting: ", currentTerm)
    console.log("Hiting: ", subject)

    mutation.mutate({
      studentId: studentsIdData.id,
      remark: values.remark,
      Class: studentsIdData.class,
      term: currentTerm,
      subject: subject,
    })

    // navigate("/teacher/students")
  }

  const onClick = () => {
    navigate("/teacher/students")
  }
  return (
    <section className="flex justify-center border-2 w-full pt-20">
      <Formik initialValues={teachersRemark} onSubmit={onSubmit}>
        {() => (
          <Form className="w-[45%]">
            <TextArea label={"Remarks"} name={"remark"} rows="5" cols="59" />

            <div className="flex gap-6">
              <button
                type="submit"
                className="bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClick}
                className="bg-[#D0D4E7] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}

import { useField } from "formik"

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="text-[#4f4f4f] text-[32px] font-semibold mb-[24px]"
        >
          {label}
        </label>
      )}
      <textarea
        className={`mb-[24px] border-[1.47px] border-[#4f4f4f] rounded-xl outline-none p-4`}
        {...field}
        {...props}
      />
    </div>
  )
}

TextArea.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
  name: Proptypes.string,
}
