import PropTypes from "prop-types"

export const SubjectsIcon = ({ color = "#F4F4F4" }) => {
  const changeColor = () => {
    if (color == "#F4F4F4") {
      return "#132985"
    }
    if (color == "#132985") {
      return "#F4F4F4"
    }
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#F4F4F4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33334 11.9997V4.66634C2.33334 1.99967 3.00001 1.33301 5.66668 1.33301H10.3333C13 1.33301 13.6667 1.99967 13.6667 4.66634V11.333C13.6667 11.4263 13.6667 11.5197 13.66 11.613"
        stroke={color}
        fill={changeColor()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.23334 10H13.6667V12.3333C13.6667 13.62 12.62 14.6667 11.3333 14.6667H4.66668C3.38001 14.6667 2.33334 13.62 2.33334 12.3333V11.9C2.33334 10.8533 3.18668 10 4.23334 10Z"
        fill={changeColor()}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33334 4.66699H10.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33334 7H8.66668"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

SubjectsIcon.propTypes = {
  color: PropTypes.string,
}

export default SubjectsIcon
