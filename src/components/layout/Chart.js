import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import sourceData from '../../data/sourceData.json';

const Chart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              axis: 'y',
              label: 'Count',
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                'rgba(43,63,229,0.9)',
                'rgba(43,63,229,0.9)',
                'rgba(43,63,229,0.9)',
                'rgba(43,63,229,0.9)',
                'rgba(253,135,135,0.9)',
              ],
              borderRadius: 5,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
