import PropTypes from "prop-types"
import { useField } from "formik"

export const CustomInput = ({
  label,
  required = false,
  capitalize = true,
  optionalMessage = "",
  ...props
}) => {
  const [field, meta, helpers] = useField(props)
  const isFilled = field.value && field.value.trim() !== ""

  const capitalizeFirstLetter = (text) => {
    if (text && text.includes("@")) {
      // Return the text as-is if it's an email
      return text
    }
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const handleChange = (event) => {
    const value =
      props.name === "email"
        ? event.target.value
        : capitalize
        ? capitalizeFirstLetter(event.target.value)
        : event.target.value
        // : event.target?.files?.[0]
    helpers.setValue(value)
  }

  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`h-11 rounded-lg border-[0.5px] px-2 bg-[#f4f4f4] 
        ${isFilled ? "border-green-500" : "border-[#a7a7a7]"} 
        ${required && meta.touched && meta.error ? "border-red-500" : ""} 
        ${capitalize ? "capitalize" : ""}`}
        {...field}
        {...props}
        style={{ textTransform: capitalize ? "capitalize" : "none" }}
        onChange={handleChange}
      />
      {required && meta.touched && meta.error ? (
        <div className="text-[13px] text-red-900">{meta.error}</div>
      ) : (
        !required &&
        optionalMessage &&
        meta.touched &&
        !isFilled && (
          <div className="text-[13px] text-orange-500">{optionalMessage}</div>
        )
      )}
    </div>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  capitalize: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  optionalMessage: PropTypes.string,
}
