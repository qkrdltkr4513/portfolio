import Body from '@components/common/Body';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import { COMMON_CARD_SIZE_TYPES } from '@core/common/constants';

const Home = () => {
  return (
    <GridBox>
      <GridCard columnSize={'1 / 3'} height={305}>
        테스트 1
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={305}>
        테스트 2
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={305}>
        테스트 3
      </GridCard>
      <GridCard columnSize={'1 / 2'} height={305}>
        테스트 4
      </GridCard>
      <GridCard columnSize={'2 / 3'} height={305}>
        테스트 5
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        테스트 6
      </GridCard>
    </GridBox>
  );
};

export default Home;
