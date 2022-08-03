import React, { useEffect, useRef } from 'react';
import { Chart } from '../Chart/Chart';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function CryptoCoinPageView({ coin }: any) {
  const dataset = [65, 59, 80, 81, 56, 55, 40];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const chartRef = useRef<Chart | null>(null);

  // const canvasCallback = (canvas: HTMLCanvasElement | null) => {
  //   if (!canvas) return;
  //   const ctx = canvas.getContext('2d');
  //   if (ctx) {
  //     chartRef.current = new Chart(ctx, {
  //       type: 'line',
  //       data: {
  //         labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  //         datasets: [{ data: dataset }],
  //       },
  //       options: { responsive: true },
  //     });
  //   }
  // };

  // useEffect(() => {
  //   // must verify that the chart exists
  //   if (chartRef.current) {
  //     chartRef.current.data = data;
  //     chartRef.current.update();
  //   }

  //   // cleanup function - I had to remove this as it was causing errors
  //   // return () => {
  //   //   chartRef.current?.destroy();
  //   // };
  // }, [data]);

  return (
    <div>
      <h3>{coin.name}</h3>
      <div>
        <img src={coin.image} alt='' />
        <p>${coin.current_price}</p>
        <p>{coin.price_change_percentage_24h}</p>
      </div>
      <Chart />
    </div>
  );
}
