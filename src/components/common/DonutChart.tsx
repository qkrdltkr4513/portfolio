import { useState, useEffect } from 'react';
import Chart, { type Props as ChartProps } from 'react-apexcharts';
import { css } from '@emotion/react';

const wrapperStyle = () => css`
  width: 100%;
  height: 100%;

  foreignObject {
    height: 100%;
  }
`;

const DonutChart = (): JSX.Element => {
  const [chartState, setState] = useState({
    width: '100%',
    height: '100%',
    series: [24, 21, 18, 29],
    options: {
      title: {
        text: '총 경력',
        align: 'left',
        style: {
          color: 'white',
          fontWeight: 500,
        },
      },
      labels: ['atos', 'Build it', 'StageFive', 'NC ITS'],
      legend: {
        position: 'bottom',
        labels: {
          colors: ['white', 'white', 'white', 'white'],
        },
        onItemClick: {
          toggleDataSeries: false,
        },
      },
      tooltip: {
        custom: (opt: any) => {
          const { seriesIndex, w } = opt;
          const series = w.config.series;
          const labels = w.config.labels;

          // TODO: 아래 툴팁 스타일 커스텀 필요
          const result = `${labels[seriesIndex]}: ${series[seriesIndex]}개월`;

          return result;
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                show: false,
              },
              total: {
                show: true,
                showAlways: true,
                label: '총 경력 8년 6개월',
                color: 'white',
              },
            },
          },
        },
      },
    },
  });

  return (
    <div css={wrapperStyle()}>
      <Chart
        width={chartState.width}
        height={chartState.height}
        options={chartState.options as ChartProps['options']}
        series={chartState.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
