import Chart, { type Props as ChartProps } from 'react-apexcharts';
import { css } from '@emotion/react';
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const wrapperStyle = (width: string, height: string) => css`
  width: ${width};
  height: ${height};

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

const PieChart = ({
  width = '100%',
  height = '100%',
  series,
  options,
  ...restProps
}: ChartProps): JSX.Element => {
  return (
    <div css={wrapperStyle(width as string, height as string)}>
      <Chart
        type="pie"
        width="100%"
        height="100%"
        options={options as ChartProps['options']}
        series={series}
        {...restProps}
      />
    </div>
  );
};

export default PieChart;
