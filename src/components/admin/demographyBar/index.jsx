import PropTypes from "prop-types"

export const ComparisonChart = ({ boysCount, girlsCount }) => {
  const total = boysCount + girlsCount
  const boysPercentage = Math.floor((boysCount / total) * 100)
  const girlsPercentage = 100 - boysPercentage
  const radius = 15.9155
  const circumference = 2 * Math.PI * radius

  const getTextColor = () => {
    if (boysPercentage > girlsPercentage) return "#d0d4e7"
    if (girlsPercentage > boysPercentage) return "#132985"
    return "#000"
  }

  //   const boysOffset = circumference - (boysPercentage / 100) * circumference
  const girlsOffset = circumference - (girlsPercentage / 100) * circumference

  return (
    <svg width="120" height="120" viewBox="0 0 36 36" className="mt-4">
      {/* Background circle */}
      <path
        d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
        fill="none"
        // stroke="#ececec"
        stroke="#d0d4e7"
        strokeWidth="3.8"
      />
      {/* Boys' portion */}
      <path
        className="transition-all duration-500 ease-in-out"
        d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
        fill="none"
        stroke="#132985"
        strokeWidth="3.8"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={girlsOffset}
      />
      {/* Girls' portion */}
      <path
        className="transition-all duration-500 ease-in-out"
        d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
        fill="none"
        stroke="#f4901f"
        strokeWidth="2.8"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference}
        transform="rotate(-90 18 18)"
        // strokeLinecap="round"
      />
      {/* Center text */}
      <text
        x="18"
        y="20.35"
        fill={getTextColor()}
        className="text-center text-[9px] font-bold"
        textAnchor="middle"
      >
        {total}
      </text>
    </svg>
  )
}

ComparisonChart.propTypes = {
  boysCount: PropTypes.number.isRequired,
  girlsCount: PropTypes.number.isRequired,
}
