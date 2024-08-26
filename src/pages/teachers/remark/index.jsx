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
          className="mb-[24px]"
          id="remarks"
          name="remarks"
          placeholder="Write your remark..."
          rows="8"
          cols="52"
        ></textarea>
      </form>
    </section>
  )
}
