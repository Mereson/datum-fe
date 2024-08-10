import PropTypes from "prop-types"

const SbAttendance = ({ color = "#8A8A8A" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 4C2.16421 4 2.5 3.66421 2.5 3.25C2.5 2.83579 2.16421 2.5 1.75 2.5C1.33579 2.5 1 2.83579 1 3.25C1 3.66421 1.33579 4 1.75 4ZM14.25 4C14.6642 4 15 3.66421 15 3.25C15 2.83579 14.6642 2.5 14.25 2.5H4.75004C4.33582 2.5 4.00004 2.83578 4.00004 3.25C4.00004 3.66421 4.33582 4 4.75004 4L14.25 4ZM14.25 8.75061C14.6642 8.75061 15 8.41482 15 8.00061C15 7.58639 14.6642 7.25061 14.25 7.25061L4.75 7.25061C4.33579 7.25061 4 7.58639 4 8.00061C4 8.41482 4.33579 8.75061 4.75 8.75061L14.25 8.75061ZM15 12.7512C15 13.1654 14.6642 13.5012 14.25 13.5012L4.75 13.5012C4.33579 13.5012 4 13.1654 4 12.7512C4 12.337 4.33579 12.0012 4.75 12.0012L14.25 12.0012C14.6642 12.0012 15 12.337 15 12.7512ZM2.5 8.25C2.5 8.66421 2.16421 9 1.75 9C1.33579 9 1 8.66421 1 8.25C1 7.83579 1.33579 7.5 1.75 7.5C2.16421 7.5 2.5 7.83579 2.5 8.25ZM1.75 13.5C2.16421 13.5 2.5 13.1642 2.5 12.75C2.5 12.3358 2.16421 12 1.75 12C1.33579 12 1 12.3358 1 12.75C1 13.1642 1.33579 13.5 1.75 13.5Z"
      fill={color}
    />
  </svg>
)

SbAttendance.propTypes = {
  color: PropTypes.string,
}

export default SbAttendance