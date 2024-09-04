import { FormButton } from "../../../components"

export const Remark = () => {
  return (
    <section className="flex justify-center  w-full pt-20">
      <form
        className="flex flex-col overflow-x-auto sm:overflow-x-hidden px-5 "
        action="/submit-remark"
        method="post "
      >
        <label
          className="text-[#4f4f4f] text-2xl pl-4 sm:text-3xl font-semibold sm:mb-6"
          htmlFor="remarks"
        >
          Remarks
        </label>

        <div className="w-full">
          <textarea
            className="mb-6 pl-4 "
            id="remarks"
            name="remarks"
            placeholder="Write your remark..."
            rows="8"
            cols="59"
          ></textarea>
        </div>

        <div className="pl-5 flex gap-6">
          <FormButton
            type="submit"
            content="Save"
            className={
              "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />

          <FormButton
            type="submit"
            content="Cancel"
            className={
              "bg-[#D0D4E7] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
            }
          />
        </div>
      </form>
    </section>
  )
}
