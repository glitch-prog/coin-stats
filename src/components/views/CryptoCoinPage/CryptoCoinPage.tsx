import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function CryptoCoinPageView({ coin }: any) {
  const dataset = [65, 59, 80, 81, 56, 55, 40];
  const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    datasets: [{ data: dataset }],
  };

  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          datasets: [{ data: dataset }],
        },
        options: { responsive: true },
      });
    }
  };

  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      chartRef.current.data = data;
      chartRef.current.update();
    }

    // cleanup function - I had to remove this as it was causing errors
    // return () => {
    //   chartRef.current?.destroy();
    // };
  }, [data]);

  return (
    <div>
      <h3>{coin.name}</h3>
      <div>
        <img src={coin.image} alt='' />
        <p>${coin.current_price}</p>
        <p>{coin.price_change_percentage_24h}</p>
      </div>
      <canvas ref={canvasCallback}></canvas>
    </div>
  );
}
