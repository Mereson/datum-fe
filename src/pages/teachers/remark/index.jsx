import { FormButton } from "../../../components"

export const Remark = () => {
  return (
    <section className="flex justify-center border-2 w-full">
      <form className="flex flex-col " action="/submit-remark" method="post">
        <label
          className="text-[#4f4f4f] text-[32px] font-semibold mb-[24px]"
          htmlFor="remarks"
        >
          Remarks
        </label>
        <textarea
          className="mb-[24px] pl-4"
          id="remarks"
          name="remarks"
          placeholder="Write your remark..."
          rows="8"
          cols="59"
        ></textarea>

        <FormButton
          type="submit"
          content="Save"
          className={
            "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
          }
        />
      </form>
    </section>
  )
}
