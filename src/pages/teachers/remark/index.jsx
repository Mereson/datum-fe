export const Remark = () => {
  return (
    <section>
      <form action="/submit-remark" method="post">
        <label htmlFor="remarks"> Remarks </label>
        <textarea
          id="remarks"
          name="remarks"
          placeholder="Write your remark..."
          rows="4"
          cols="50"
        ></textarea>
      </form>
    </section>
  )
}
