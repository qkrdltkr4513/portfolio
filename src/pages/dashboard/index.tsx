import dynamic from 'next/dynamic';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';

const DonutChart = dynamic(() => import('@components/common/DonutChart'), { ssr: false });

const Dashboard = () => {
  return (
    <GridBox>
      <GridCard columnSize={'1 / 3'} height={400}>
        프로젝트 누적 경험 횟수(라인 차트)
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={400}>
        프로젝트 경험 요약 (테이블){' '}
      </GridCard>
      <GridCard columnSize={'1 / 3'} height={400}>
        프로젝트에 사용한 기술 경험 횟수 (바 차트)
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={400}>
        서비스별(웹, 모바일, 데스크탑) 경험 횟수 (파이 차트)
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={400}>
        {/* 회사별 경력 및 총 경력 (도넛차트) */}
        <DonutChart />
      </GridCard>
    </GridBox>
  );
};

export default Dashboard;
