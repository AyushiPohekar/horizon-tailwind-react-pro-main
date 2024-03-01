


import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DonutChart2 = ({ viewsPercentage, sessionsPercentage, usersPercentage }) => {
  
  const data = [
    { name: 'Views', value: viewsPercentage , color: '#4EACF4' },
    { name: 'Sessions', value:sessionsPercentage , color: '#6F21D1' },
    { name: 'Users', value:usersPercentage , color: '#EB55A5' },
  ];
console.log(data)
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

export default DonutChart2;

