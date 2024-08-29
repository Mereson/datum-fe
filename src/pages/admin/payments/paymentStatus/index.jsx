import PropTypes from "prop-types"

export const StatusCell = ({ getValue }) => {
  const value = getValue()

  const color = () => {
    if (value == "Paid") {
      return "text-[#3AC922]"
    } else {
      return "text-[#F93232]"
    }
  }

  return <p className={color()}>{value}</p>
}

StatusCell.propTypes = {
  getValue: PropTypes.func,
}
