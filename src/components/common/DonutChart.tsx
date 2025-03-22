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
  .custom-tooltip {
    padding: 6px;
    font-size: 14px;
  }
`;

const DonutChart = ({ width, height, series, options, ...restProps }: ChartProps): JSX.Element => {
  return (
    <div css={wrapperStyle()}>
      <Chart
        type="donut"
        width={width}
        height={height}
        options={options as ChartProps['options']}
        series={series}
        {...restProps}
      />
    </div>
  );
};

export default DonutChart;
