import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

export const Chart = () => {
  const [history, setHistory] = useState<[number[]]>();
  const data1: any[] | undefined = [];

  const date = new Date();
  const today =
    date.getFullYear() +
    '.' +
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    '.' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  const prevMonth =
    date.getFullYear() +
    '.' +
    (date.getMonth() < 10 ? '0' + (date.getMonth() - 2) : date.getMonth() - 2) +
    '.' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  const unixDate = Math.floor(new Date(today).getTime() / 1000);
  const prevUnixDate = Math.floor(new Date(prevMonth).getTime() / 1000);

  const HISTORY_URL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${prevUnixDate}&to=${unixDate}`;
  const fetchHistory = async () => {
    const response = await axios.get(HISTORY_URL);

    const data = response.data;
    setHistory(data.prices);
    // return data;
  };

  // console.log(history);
  const convertUnix = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return year + '.' + month + '.' + day;
  };

  if (history) {
    const labels = history
      .reduce((acc: any, curr) => (acc = [...acc, curr[0]]), [])
      .map((el) => convertUnix(el));
    console.log(labels);

    const prices = history.reduce(
      (acc: any, curr) => (acc = [...acc, +curr[1].toFixed()]),
      []
    );
    console.log(prices);

    for (let i = 0; i <= labels.length; i++) {
      const obj = {
        name: labels[i],
        price: prices[i],
      };
      data1.push(obj);
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <LineChart
      width={1000}
      height={600}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='price'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
