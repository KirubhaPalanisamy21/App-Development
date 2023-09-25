import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './Chart.css'; // Import the CSS file

const Dashboard = () => {
  const data = [
    { day: 'Day 1', usagePercentage: 85 },
    { day: 'Day 2', usagePercentage: 92 },
    { day: 'Day 3', usagePercentage: 78 },
    { day: 'Day 4', usagePercentage: 88 },
    { day: 'Day 5', usagePercentage: 70 },
    { day: 'Day 6', usagePercentage: 95 },
  ];

  return (
    <div>
    <div className="department-pass-percentage">
      <h1 className="charttitle">Day Usage</h1>
      <div className="chart-container">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usagePercentage" fill="#8884d8" />
        </BarChart>
      </div>
    
    </div></div>
  );
};

export default Dashboard;