import { css } from '@emotion/react';
import { CommonBodyProps } from '@core/types';

const wrapperStyle = () => css`
  // width: 100%;
  padding: 60px 0 0;
  // width: 1280px;
  @media (min-width: 1280px) {
    // width: 1200px;
  }
  @media (min-width: 1440px) {
    // width: 1400px;
  }
`;

const Body = ({ children }: CommonBodyProps) => <div css={wrapperStyle()}>{children}</div>;

export default Body;
