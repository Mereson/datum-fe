import PropTypes from "prop-types"

export const FormButton = ({ type, content, className, isPending }) => {
  return (
    <button type={type} className={className} disabled={isPending}>
      {!isPending ? content : "Loading..."}
    </button>
  )
}

FormButton.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  isPending: PropTypes.bool,
}
