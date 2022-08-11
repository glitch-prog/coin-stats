import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { ChartView } from '../../views/Chart/Chart';
import { IChartObj } from './Chart.interface';

export const ChartContainer = () => {
  const coin = useAppSelector((state) => state.chosenCoin.coin);
  const [history, setHistory] = useState<[number[]]>();
  const data: IChartObj[] | undefined = [];

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

  const HISTORY_URL = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart/range?vs_currency=usd&from=${prevUnixDate}&to=${unixDate}`;
  const fetchHistory = async () => {
    const response = await axios.get(HISTORY_URL);

    const data = response.data;
    setHistory(data.prices);
    // return data;
  };

  const convertUnix = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return year + '.' + month + '.' + day;
  };

  if (history) {
    const labels = history
      .reduce((acc: number[], curr) => (acc = [...acc, curr[0]]), [])
      .map((el) => convertUnix(el))
      .slice(-30);
    console.log(labels);

    const prices: [] | number[] = history
      .reduce((acc: number[], curr) => (acc = [...acc, +curr[1].toFixed()]), [])
      .slice(-30);
    console.log(prices);

    for (let i = 0; i <= labels.length; i++) {
      data.push({
        name: labels[i],
        price: prices[i],
      });
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return <ChartView data={data} />;
};
