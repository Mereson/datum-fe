import PropTypes from "prop-types"
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  YAxis,
} from "recharts"

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const assessmentScore = payload.find((p) => p.name === "absent")?.value
    const examScore = payload.find((p) => p.name === "present")?.value

    return (
      <div className="bg-[#f4f4f4] font-semibold p-4">
        <p className="label">{`${label}`}</p>
        <p className="text-[#132985]">{`Present: ${examScore}`}</p>
        <p className="text-[#8884d8]">{`Absent: ${assessmentScore}`}</p>
      </div>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
  label: PropTypes.string,
}

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props

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
    </g>
  )
}

CustomBar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
}

export const AttendanceBarChart = ({ data, bool = false }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        className="cursor-pointer w-[100%] h-[100%]"
        data={data}
        margin={{
          top: 35,
          bottom: 20,
        }}
      >
        <YAxis axisLine={false} tickLine={false} />
        <CartesianGrid vertical={false} horizontal={bool} />
        <XAxis
          dataKey="subject"
          axisLine={false} // Hide the axis line
          tickLine={false} // Hide the tick lines
        />
        <Tooltip content={<CustomTooltip />} />
        {/* Assessment Bar */}
        <Bar dataKey="absent" stackId="a" fill="#8884d8" barSize={40} />
        {/* Exam Bar */}
        <Bar dataKey="present" stackId="a" fill="#132985" barSize={40}>
          <LabelList dataKey="total" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

AttendanceBarChart.propTypes = {
  data: PropTypes.any,
  bool: PropTypes.bool,
}
