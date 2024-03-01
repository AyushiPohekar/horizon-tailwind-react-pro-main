


import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DonutChart = ({ currentPercentage, pastPercentage, title }) => {
  const data = [
    { name: 'Current', value: currentPercentage, color: '#422AFB' },
    { name: 'Past', value: pastPercentage, color: 'lightgrey' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ width: '100%', height: '200px' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {data.map((entry, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: entry.color, marginRight: '5px' ,borderRadius:"50%"}}></div>
            <span style={{ color: "black" }}>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

