import PropTypes from "prop-types"

const SbNotification = ({ color = "#7C7B7B" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2501 12.8996C10.2501 13.4566 10.0131 13.9907 9.59112 14.3845C9.16917 14.7784 8.59689 14.9996 8.00016 14.9996C7.40343 14.9996 6.83115 14.7784 6.4092 14.3845C5.98725 13.9907 5.7502 13.4566 5.7502 12.8996M8.5409 3.10172L7.44142 3.09962C4.93346 3.09402 2.75625 4.99592 2.739 7.29962V9.95262C2.739 10.5056 2.664 11.0453 2.34076 11.5052L2.12551 11.8118C1.79777 12.2766 2.15026 12.8996 2.739 12.8996H13.2613C13.8501 12.8996 14.2018 12.2766 13.8748 11.8118L13.6596 11.5052C13.3371 11.0453 13.2613 10.5049 13.2613 9.95192V7.30032C13.2313 4.99592 11.0489 3.10732 8.5409 3.10172V3.10172Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99997 1C8.39779 1 8.77932 1.1475 9.06062 1.41005C9.34191 1.6726 9.49995 2.0287 9.49995 2.4V3.1H6.5V2.4C6.5 2.0287 6.65803 1.6726 6.93933 1.41005C7.22063 1.1475 7.60216 1 7.99997 1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

SbNotification.propTypes = {
  color: PropTypes.string,
}

export default SbNotification
