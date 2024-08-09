import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({ content, className, link }) => {
  return (
    
    <Link to={link}>
      <div className={className}>
        {content}
      </div>
    </Link>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};
