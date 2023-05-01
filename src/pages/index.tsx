import type { NextPage } from 'next';
import Home from '@src/pages/home';
import Contents from '@components/common/Contents';

const Main: NextPage = () => {
  return (
    <Contents>
      <Home />
    </Contents>
  );
};

export default Main;
