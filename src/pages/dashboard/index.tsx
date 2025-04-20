import { useEffect, useState } from 'react';
import { themes } from '@styles/themes';
import dynamic from 'next/dynamic';
import { type Props as ChartProps } from 'react-apexcharts';
import { TableProps } from 'antd';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Table from '@components/common/Table';

import * as styles from './index.styles';

import {
  DONUT_CHART_CONFIG,
  PIE_CHART_CONFIG,
  RANGE_BAR_CHART_CONFIG,
  TREEMAP_CHART_CONFIG,
  TABLE_CONFIG,
  LINE_CHART_CONFIG,
} from '@core/config';

const DonutChart = dynamic(() => import('@components/common/DonutChart'), { ssr: false });
const PieChart = dynamic(() => import('@components/common/PieChart'), { ssr: false });
const RangeBarChart = dynamic(() => import('@components/common/RangeBarChart'), { ssr: false });
const TreeMapChart = dynamic(() => import('@components/common/TreeMapChart'), { ssr: false });
const LineChart = dynamic(() => import('@components/common/LineChart'), { ssr: false });

const Dashboard = () => {
  // donut chart
  const [donutChartConfig, setDonutChartConfig] = useState<ChartProps>();

  // pie chart
  const [pieChartConfig, setPieChartConfig] = useState<ChartProps>();

  // 경험 기술
  const [treemapChartConfig, setTreemapChartConfig] = useState<ChartProps>();

  // range bar chart
  const [rangeBarChartConfig, setRangeBarChartConfig] = useState<ChartProps>();

  //
  const [lineChartConfig, setLineChartConfig] = useState<ChartProps>();

  // table
  const [tableConfig, setTableConfig] = useState<TableProps>();

  // 트리맵 차트의 레전드 클릭시 호출한다.
  const onClickTreemapLegend = (index: number | 'ALL') => {
    if (typeof index === 'number') {
      setTreemapChartConfig((prev) => {
        return { ...prev, series: [TREEMAP_CHART_CONFIG.series[index]] };
      });
    } else {
      setTreemapChartConfig((prev) => {
        return { ...prev, series: [...TREEMAP_CHART_CONFIG.series] };
      });
    }
  };

  useEffect(() => {
    setTreemapChartConfig(TREEMAP_CHART_CONFIG as ChartProps);
    // setRangeBarChartConfig(RANGE_BAR_CHART_CONFIG as unknown as ChartProps);
    setTimeout(() => {
      setRangeBarChartConfig(RANGE_BAR_CHART_CONFIG as unknown as ChartProps);
      setLineChartConfig(LINE_CHART_CONFIG as ChartProps);
    }, 300);
    setDonutChartConfig(DONUT_CHART_CONFIG as ChartProps);
    setPieChartConfig(PIE_CHART_CONFIG as ChartProps);
    setTableConfig(TABLE_CONFIG as unknown as TableProps);
  }, []);

  return (
    <GridBox css={styles.wrapperStyle()} className="wrapper-dashboard">
      <GridCard columnSize={'1 / 3'} height={400}>
        {/* 연도별 프로젝트 사용기술 기간 */}
        {rangeBarChartConfig && (
          <RangeBarChart
            width={rangeBarChartConfig?.width}
            height={rangeBarChartConfig?.height}
            series={rangeBarChartConfig.series}
            options={rangeBarChartConfig.options}
          />
        )}
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={400}>
        {/* 연도별 프로젝트 사용기술 기간 */}
        {lineChartConfig && (
          <LineChart
            width={lineChartConfig?.width}
            height={lineChartConfig?.height}
            series={lineChartConfig.series}
            options={lineChartConfig.options}
          />
        )}
      </GridCard>
      <GridCard columnSize={'1 / 3'} height={400}>
        {treemapChartConfig && (
          <div css={styles.treemapChartBoxStyle()}>
            <TreeMapChart
              width={treemapChartConfig.width}
              height={treemapChartConfig.height}
              series={treemapChartConfig.series}
              options={treemapChartConfig.options}
            />
            <div css={styles.treemapLegendBoxStyle()}>
              <div key={`legend-item-all`} onClick={() => onClickTreemapLegend('ALL')}>
                <span css={styles.legendCircleStyle(themes.colors.ChartPupple)} />
                <span css={styles.treemapLegendTextStyle()}>전체</span>
              </div>
              {treemapChartConfig.customLegends.map(
                (legend: { color: string; name: string }, index: number) => {
                  const { color, name } = legend;
                  return (
                    <div key={`legend-item-${color}`} onClick={() => onClickTreemapLegend(index)}>
                      <span css={styles.legendCircleStyle(color)} />
                      <span css={styles.treemapLegendTextStyle()}>{name}</span>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        )}
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={400}>
        {/* 서비스별(웹, 모바일, 데스크탑) 경험 횟수 (파이 차트) */}
        {pieChartConfig && (
          <div css={styles.customTooltipBoxStyle()}>
            <PieChart
              width={pieChartConfig?.width}
              height={pieChartConfig?.height}
              series={pieChartConfig?.series}
              options={pieChartConfig?.options}
            />
          </div>
        )}
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={400}>
        {/* 회사별 경력 및 총 경력 (도넛차트) */}
        {donutChartConfig && (
          <DonutChart
            width={donutChartConfig?.width}
            height={donutChartConfig?.height}
            series={donutChartConfig?.series}
            options={donutChartConfig?.options}
          />
        )}
      </GridCard>
      <GridCard columnSize={'1 / 5'} height={400}>
        {/* 프로젝트 경험 요약 (테이블){' '} */}
        {tableConfig && (
          <Table
            title={tableConfig.title}
            columns={tableConfig.columns}
            dataSource={tableConfig.dataSource}
            pagination={tableConfig.pagination as false}
            scroll={tableConfig.scroll}
          />
        )}
      </GridCard>
    </GridBox>
  );
};

export default Dashboard;
