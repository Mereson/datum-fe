import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Term: 'First Term',
    English: 88,
    Maths: 85,
  },
  {
    Term: 'Second Term',
    English: 60,
    Maths: 89,
  },
  {
    Term: 'Third Term',
    English: 100,
    Maths: 89,
  },
];

export const PerformanceAreaChart = () => {
  return (
    <div className="w-full h-64">
      <h4 className="text-lg font-bold pb-4">Student Performance Comparison</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Term" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="English"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="Maths"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
