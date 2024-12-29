import { useState, useEffect } from 'react';
import Chart, { type Props as ChartProps } from 'react-apexcharts';
import { css } from '@emotion/react';

const wrapperStyle = () => css`
  width: 100%;
  height: 100%;

  foreignObject {
    height: 100%;
  }

  .apexcharts-datalabels-group {
    text {
      font-size: 16px;
    }
  }
  .apexcharts-tooltip.apexcharts-theme-dark {
    padding: 6px;
    font-size: 14px;
  }
`;

const DonutChart = (props: ChartProps): JSX.Element => {
  const [chartState] = useState(props.config);

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
