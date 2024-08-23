import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({ content, className, link, onClick, type = "" }) => {
  return (

    <Link to={link}>
      <button type={type} onClick={onClick} className={className}>
        {content}
      </button>
    </Link>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  type: PropTypes.string
};