import PropTypes from "prop-types"
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts"

// Function to determine bar color based on grade

const CustomBar = (props) => {
  const { x, y, width, height, fill, value } = props

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={9} // Border radius for rounded corners
        ry={1} // Border radius for rounded corners
      />

      <text
        x={x + width / 2}
        y={y - 5}
        textAnchor="middle"
        fill="#333"
        fontSize="12px"
      >
        {value}
      </text>
    </g>
  )
}

CustomBar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export const GradesBarChart = ({ subjects }) => {
  const getBarColor = (grade) => {
    if (grade >= 70) return "#132985"
    if (grade >= 60) return "#6270ae"
    if (grade >= 40) return "#8994c2"
    return "#d0d4e7"
  }
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        className="cursor-pointer w-[100%] h-[100%]"
        data={subjects}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="subject"
          axisLine={false} // Hide the axis line
          tickLine={false} // Hide the tick lines
        />
        <Tooltip />
        <Bar
          dataKey="grade"
          barSize={40} // Adjust bar width here
          shape={(props) => (
            <CustomBar {...props} fill={getBarColor(props.value)} />
          )}
          label={<LabelList dataKey="grade" position="top" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

GradesBarChart.propTypes = {
    subjects: PropTypes.string
}