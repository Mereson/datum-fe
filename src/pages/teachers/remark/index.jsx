import { useNavigate } from "react-router-dom"
import { FormButton } from "../../../components"

export const Remark = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/teacher/students")
  }
  return (
    <section className="flex justify-center border-2 w-full pt-20">
      <form className="flex flex-col " action="/submit-remark" method="post">
        <label
          className="text-[#4f4f4f] text-[32px] font-semibold mb-[24px]"
          htmlFor="remarks"
        >
          Remarks
        </label>
        <textarea
          className="mb-[24px] border-[1.47px] border-[#4f4f4f] rounded-xl outline-none p-4"
          id="remarks"
          name="remarks"
          placeholder="Write your remark..."
          rows="8"
          cols="59"
        ></textarea>
        <div className="flex gap-6">
          <FormButton
            type="submit"
            content="Save"
            className={
              "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
          <button
            onClick={onClick}
            className={
              "bg-[#D0D4E7] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
