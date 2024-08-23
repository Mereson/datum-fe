import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MyChart() {
    const data = {
        datasets: [{
            label: 'Poll',
            data: [50, 50],
            backgroundColor: ['#132985', '#D0D4E7'],
            borderColor: ['#132985', '#D0D4E7'],
        }],
        labels: ['Yes', 'No']
    };

    const options = {
        plugins: {
            // Optionally you can configure other options here
        }
    };

    const textCenterPlugin = {
        id: 'textCenter',
        beforeDraw(chart, args, options) {
            const { ctx, width, height } = chart;
            ctx.save();
            ctx.font = 'bolder 20px sans-serif';
            ctx.fillStyle = '#132985';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Draw text in the center
            ctx.fillText(`${data.datasets[0].data[0]}%`, width / 2, height / 2);
            ctx.restore();
        }
    };

    return (
        <div>
            <Doughnut 
                data={data} 
                options={options}
                plugins={[textCenterPlugin]}
            />
        </div>
    );
};








// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 400 },
  
// ];
// const COLORS = ['#D0D4E7', '#132985'];

// export default class DashPieChart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

//   render() {
//     return (
//       <PieChart width={320} height={200} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={100}
//           startAngle={90}
//           endAngle={470}
//           innerRadius={60}
//           outerRadius={80}
//           paddingAngle={0}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   }
// }
