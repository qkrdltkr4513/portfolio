import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { CommonBodyProps } from '@core/types';
import { hamburgerState } from '@src/recoil/headerState';

const wrapperStyle = (isOpenHamburger: boolean) => css`
  // width: 100%;
  padding: 60px 0 0;
  margin: 0 auto;
  opacity: ${isOpenHamburger ? 0.4 : 1};
  max-width: 1600px;
  // width: 1280px;

  // @media (min-width: 350px) {
  //   justify-content: center;
  // }

  // @media (min-width: 550px) {
  //   max-width: 550px;
  // }

  // @media (min-width: 800px) {
  //   max-width: 800px;
  // }

  // @media (min-width: 1080px) {
  //   max-width: 1080px;
  // }

  // @media (min-width: 1280px) {
  //   max-width: 1200px;
  // }
  // @media (min-width: 1440px) {
  //   max-width: 1400px;
  // }
`;

const Body = ({ children }: CommonBodyProps) => {
  const [isOpenHamburger] = useRecoilState(hamburgerState);
  return <div css={wrapperStyle(isOpenHamburger)}>{children}</div>;
};

export default Body;
