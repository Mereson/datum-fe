import PropTypes from "prop-types"

export const CircularProgressBar = ({ score, total, styling }) => {
  const percentage = Math.floor((score / total) * 100)
  const radius = 15.9155 // Radius of the circle
  const circumference = 2 * Math.PI * radius // Circumference of the circle

  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className={`flex flex-col ${styling}`}>
      <svg className="size-[106px]" viewBox="0 0 36 36">
        {/* Background circle */}
        <path
          className="text-gray-300 stroke-current"
          strokeWidth="3.8"
          fill="none"
          d="
              M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831
            "
        />
        {/* Progress circle */}
        <path
          className="text-[#132985] stroke-current transition-all duration-500 ease-in-out"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="square"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          d="
              M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831
            "
        />
        {/* Percentage text */}
        <text
          x="19"
          y="20.35"
          fill="#132985"
          className="text-center text-[9px] font-bold inter"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  )
}

CircularProgressBar.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
  styling: PropTypes.string,
}
