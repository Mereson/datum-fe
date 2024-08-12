import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const Button = ({ text, style, link }) => {
  return (
    <Link to={link}>
      <button className={`rounded-lg ${style} bg-[#f4901f]`}>{text}</button>
    </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  link: PropTypes.string,
}
