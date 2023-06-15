import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './stockcharts.module.css'

const StockChart = (prop) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    Chart.register(...registerables);

    if (Array.isArray(prop.values) && prop.labels.length > 0) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }

      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: prop.labels,
          datasets: [
            {
              label: 'Stock Price',
              data: prop.values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      // Clean up and destroy chart instance when the component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [prop.data]);

  return <div className={styles.container}><canvas ref={chartRef} className={styles.frame} /></div>;
};

export default StockChart;
