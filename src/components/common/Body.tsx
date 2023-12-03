import { css } from '@emotion/react';
import { CommonBodyProps } from '@core/common/types';

const wrapperStyle = () => css`
  padding: 60px 0 0;
`;

const Body = ({ children }: CommonBodyProps) => <div css={wrapperStyle()}>{children}</div>;

export default Body;
