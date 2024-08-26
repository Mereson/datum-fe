import PropTypes from "prop-types"

export const FormButton = ({ type, content, className }) => {
  return (
    <button type={type} className={className}>
      {content}
    </button>
  )
}

FormButton.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
}