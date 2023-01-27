import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    cutout: '85%',
    radius: '70%',
  };

  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        label: '# of Books',
        data: [59, 41],
        backgroundColor: [
          '#307bbe',
          'rgba(239, 239, 240, 0.2)',
        ],
        borderColor: [
          '#307bbe',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <div className="chart" style={{ width: '10em', height: '10em' }}>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
