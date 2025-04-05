import Chart, { type Props as ChartProps } from 'react-apexcharts';
import { css } from '@emotion/react';
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const wrapperStyle = () => css`
  width: 100%;
  height: 100%;
`;

const ColumnChart = ({ width, height, series, options, ...restProps }: ChartProps): JSX.Element => {
  return (
    <div css={wrapperStyle()}>
      <Chart
        type="line"
        width={width}
        height={height}
        series={series}
        options={(options as ChartProps['options']) || {}}
        stacked={true}
        stackType={'100%'}
        {...restProps}
      />
    </div>
  );
};

export default ColumnChart;
