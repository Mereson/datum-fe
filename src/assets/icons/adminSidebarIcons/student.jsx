import PropTypes from "prop-types"
const StudentIcon = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.70001 1.6862L2.68668 4.3062C1.40001 5.1462 1.40001 7.0262 2.68668 7.8662L6.70001 10.4862C7.42001 10.9595 8.60668 10.9595 9.32668 10.4862L13.32 7.8662C14.6 7.0262 14.6 5.15287 13.32 4.31287L9.32668 1.69287C8.60668 1.21287 7.42001 1.21287 6.70001 1.6862Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75337 8.71973L3.7467 11.8464C3.7467 12.6931 4.40004 13.5997 5.20004 13.8664L7.3267 14.5731C7.69337 14.6931 8.30004 14.6931 8.67337 14.5731L10.8 13.8664C11.6 13.5997 12.2534 12.6931 12.2534 11.8464V8.75306"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2667 10V6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

StudentIcon.propTypes = {
  color: PropTypes.string,
}

export default StudentIcon
