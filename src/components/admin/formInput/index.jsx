import Proptypes from "prop-types"

export const FormInput = ({ title = "Name" }) => {
  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor="First Name">
        {title}
      </label>
      <input
        className="h-11 rounded-lg border-[0.5px] border-[#a7a7a7] px-1 bg-[#f4f4f4]"
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
  )
}

FormInput.propTypes = {
  title: Proptypes.string,
}