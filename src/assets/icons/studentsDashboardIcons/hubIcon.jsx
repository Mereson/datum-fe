import PropTypes from "prop-types"

const HubIcon = ({ color = "#F4F4F4" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2667 9H2.73334C1.73334 9 1.33334 9.42667 1.33334 10.4867V13.18C1.33334 14.24 1.73334 14.6667 2.73334 14.6667H13.2667C14.2667 14.6667 14.6667 14.24 14.6667 13.18V10.4867C14.6667 9.42667 14.2667 9 13.2667 9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60001 1.33301H2.73334C1.73334 1.33301 1.33334 1.75967 1.33334 2.81967V5.51301C1.33334 6.57301 1.73334 6.99967 2.73334 6.99967H8.60001C9.60001 6.99967 10 6.57301 10 5.51301V2.81967C10 1.75967 9.60001 1.33301 8.60001 1.33301Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

HubIcon.propTypes = {
  color: PropTypes.string,
}

export default HubIcon
