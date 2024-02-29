// // import React from "react";
// import { Legend } from "chart.js";
// import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Cell, Label, LabelList } from "recharts";

// function DonutChart({ currentPercentage, pastPercentage }) {
//   const data = [
//     { name: "Current", value: currentPercentage, color: "#422AFB" },
//     { name: "Past", value: pastPercentage, color: "lightgrey" },
//   ];

//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius="60%"
//           outerRadius="80%"
//           fill="#8884d8"
//           paddingAngle={0}
//           dataKey="value"
//           labelLine={true}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//        <LabelList
//             dataKey="value"
//             position="outside"
//             fill="grey"
//             fontSize={14}
//             formatter={(value) => `${value}%`}
//             // Adjust the offset to move labels further from the pie chart
           
//           />
//         </Pie>
//         <Legend
//           verticalAlign="middle"
//           align="right"
//           iconType="square" // Set iconType to square
//           iconSize={10} // Set the size of the square
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// }

// export default DonutChart;
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({ currentPercentage, pastPercentage,title }) => {
  // Configuration for the chart
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: title,
    },
    plotOptions: {
      pie: {
        innerSize: '60%', // Make it a donut by setting innerSize
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f}%',
        },
        size: '40%', // Set a fixed size for the pie chart
      },
    },
    series: [
      {
        name: 'Comparison',
        data: [
          { name: 'Current', y: currentPercentage, color: '#422AFB' },
          { name: 'Past', y: pastPercentage, color: 'lightgrey' },
        ],
      },
    ],
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
    },
    credits: {
      enabled: false, // Hide Highcharts credits
    },
  };

  return (
    <div style={{ width: '25%', height: 'auto'}}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default DonutChart;


