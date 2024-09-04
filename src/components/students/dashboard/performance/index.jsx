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
    const assessmentScore = payload.find((p) => p.name === "assessment")?.value
    const examScore = payload.find((p) => p.name === "exam")?.value
    const totalScore = assessmentScore + examScore

    return (
      <div className="bg-[#f4f4f4] font-semibold p-4">
        <p className="label">{`${label}`}</p>
        <p className="text-[#8884d8]">{`Assessment: ${assessmentScore}`}</p>
        <p className="text-[#132985]">{`Exam: ${examScore}`}</p>
        <p className="intro">{`Total: ${totalScore}`}</p>
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

export const GradesBarChart = ({ subjects, bool = false }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        className="cursor-pointer w-[100%] h-[100%]"
        data={subjects}
        margin={{
          top: 30,
          bottom: 20,
        }}
      >
        <YAxis tickCount={10} hide={true} />
        <CartesianGrid vertical={false} horizontal={bool} />
        <XAxis
          dataKey="subject"
          axisLine={false} // Hide the axis line
          tickLine={false} // Hide the tick lines
        />
        <Tooltip content={<CustomTooltip />} />
        {/* Assessment Bar */}
        <Bar dataKey="assessment" stackId="a" fill="#8884d8" barSize={40} />
        {/* Exam Bar */}
        <Bar dataKey="exam" stackId="a" fill="#132985" barSize={40}>
          <LabelList dataKey="total" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

GradesBarChart.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      "s/n": PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
      assessment: PropTypes.number.isRequired,
      exam: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      grade: PropTypes.string.isRequired,
    })
  ).isRequired,
  bool: PropTypes.bool,
}
