import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const ChartView = ({ data }: any) => {
  return (
    <LineChart
      width={730}
      height={374}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke='#7551FF' strokeDasharray='3 3' />
      <XAxis stroke='#ffffff' dataKey='name' />
      <YAxis stroke='#ffffff' />
      <Tooltip
        contentStyle={{
          backgroundColor: '#1B254B',
          border: '1px solid #1B254B',
          color: '#ffffff',
        }}
      />
      <Legend />
      <Line
        type='monotone'
        dataKey='price'
        stroke='#51FFCC'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
