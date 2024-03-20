import React from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import sourceData from '../../data/sourceData.json';

ChartJS.register(ChartDataLabels);

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'center';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';
defaults.plugins.datalabels.color = 'white';

defaults.plugins.legend.display = false;

const Chart = () => {
  //Kryvobock O.S. tracking=======================
  const date = new Date();
  const startDay = new Date(2021, 0, 21, 9);
  const daysOfWork = Math.floor((date - startDay) / (24 * 60 * 60 * 1000));
  sourceData[4].value = daysOfWork;
  //==============================================

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
          datalabels: {
            anchor: 'center', // Position of the labels (start, end, center, etc.)
            align: 'center', // Alignment of the labels (start, end, center, etc.)
            font: {
              weight: 'bold',
            },
            formatter: function (value, context) {
              return value; // Display the actual data value
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;

//https://www.youtube.com/watch?v=6q5d3Z1-5kQ
// [ChartDataLabels],
