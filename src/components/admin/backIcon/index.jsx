import PropTypes from "prop-types"
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"

export const BackIcon = ({ link }) => {
    return (
      <Link to={link} className="flex gap-3 text-[#132985] items-center">
        <BsArrowLeft className="text-[20px]" />
        <p className="font-bold">Back</p>
      </Link>
    )
  }
  
  BackIcon.propTypes = {
    link: PropTypes.string,
  }
  