import PropTypes from "prop-types";

export const Button = ({ content, className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {content}
    </div>
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
