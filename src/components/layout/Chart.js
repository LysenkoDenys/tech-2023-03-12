import React from 'react';
import { Chart as ChartJS, defaults, plugins } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import sourceData from '../../data/sourceData.json';

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'center';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

defaults.plugins.legend.display = false;

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
                'rgba(43,63,229,0.4)',
                'rgba(43,63,229,0.4)',
                'rgba(43,63,229,0.4)',
                'rgba(43,63,229,0.4)',
                'rgba(253,135,135,0.8)',
              ],
              hoverBackgroundColor: [
                'rgba(43,63,229,0.6)',
                'rgba(43,63,229,0.6)',
                'rgba(43,63,229,0.6)',
                'rgba(43,63,229,0.6)',
                'rgba(253,135,135,1)',
              ],
              borderRadius: 5,
              // barThickness: 'flex',
              // barPercentage: 0.9,
              // categoryPercentage: 0.9,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: 'Working period of staff, days.',
            },
          },
          indexAxis: 'y',
          // layout: {
          //   padding: {
          //     left: 0,
          //     right: 0,
          //   },
          // },
        }}
      />
    </div>
  );
};

export default Chart;

//https://www.youtube.com/watch?v=6q5d3Z1-5kQ
