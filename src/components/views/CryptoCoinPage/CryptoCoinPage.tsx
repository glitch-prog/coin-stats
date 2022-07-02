import React from 'react';

import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

export default function CryptoCoinPageView({ coin }: any) {
  const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];
  return (
    <div>
      {coin.name}
      {/* <Paper>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField='value' argumentField='argument' />
        </Chart>
      </Paper> */}
    </div>
  );
}
