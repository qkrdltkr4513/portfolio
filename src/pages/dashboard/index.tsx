import { useEffect, useState } from 'react';
import { themes } from '@styles/themes';
import dynamic from 'next/dynamic';
import { type Props as ChartProps } from 'react-apexcharts';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';

const DonutChart = dynamic(() => import('@components/common/DonutChart'), { ssr: false });
const PieChart = dynamic(() => import('@components/common/PieChart'), { ssr: false });

// 총 경력
const DONUT_CHART_CONFIG = {
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
        const result = `<div class='custom-tooltip'> ${labels[seriesIndex]}: ${series[seriesIndex]}개월</div>`;
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
            name: {
              offsetY: 5,
            },
            total: {
              show: true,
              showAlways: true,
              label: '8년 6개월',
              color: 'white',
            },
          },
        },
      },
    },
  },
};

// 프로젝트 주 사용 기술
const PIE_CHART_CONFIG = {
  width: '100%',
  height: '100%',
  series: [3, 8, 1, 11, 6],
  options: {
    title: {
      text: '프로젝트 주 사용 기술',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    colors: [
      themes.colors.Next,
      themes.colors.React,
      themes.colors.ReactNative,
      themes.colors.Vue,
      themes.colors.Typescript,
    ],
    labels: ['Next', 'React.js', 'React-Native', 'Vue.js (앱 포함)', 'Typescript'],
    legend: {
      position: 'bottom',
      labels: {
        colors: ['white', 'white', 'white', 'white', 'white'],
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
        const result = `<div class='custom-tooltip'> ${labels[seriesIndex]}: ${series[seriesIndex]}번</div>`;
        return result;
      },
    },
  },
};

const Dashboard = () => {
  // donut chart
  const [donutChartConfig, setDonutChartConfig] = useState<ChartProps>();

  // pie chart
  const [pidChartConfig, setPieChartConfig] = useState<ChartProps>();

  useEffect(() => {
    setDonutChartConfig(DONUT_CHART_CONFIG as ChartProps);
    setPieChartConfig(PIE_CHART_CONFIG as ChartProps);
  }, []);

  return (
    <GridBox>
      <GridCard columnSize={'1 / 3'} height={400}>
        프로젝트 누적 경험 횟수(라인 차트)
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={400}>
        MBTI를 근거로 주관적인 본인의 개발 성향 (레이더){' '}
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={400}>
        {/* 서비스별(웹, 모바일, 데스크탑) 경험 횟수 (파이 차트) */}
        {/* 플랫폼별 프로젝트 경험 횟수 (파이 차트) */}
        <PieChart
          width={pidChartConfig?.width}
          height={pidChartConfig?.height}
          series={pidChartConfig?.series}
          options={pidChartConfig?.options}
        />
      </GridCard>
      <GridCard columnSize={'1 / 4'} height={400}>
        {/* 프로젝트에 사용한 기술 경험 횟수 (바 차트) */}
        프로젝트 경험 요약 (테이블){' '}
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={400}>
        {/* 회사별 경력 및 총 경력 (도넛차트) */}
        <DonutChart
          width={donutChartConfig?.width}
          height={donutChartConfig?.height}
          series={donutChartConfig?.series}
          options={donutChartConfig?.options}
        />
      </GridCard>
    </GridBox>
  );
};

export default Dashboard;
