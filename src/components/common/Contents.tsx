import { css } from '@emotion/react';
import { CommonContentsProps } from '@core/types';

const wrapperStyle = () => css`
  padding: 60px 0 0;
`;

const Contents = ({ children }: CommonContentsProps) => <div css={wrapperStyle()}>{children}</div>;

export default Contents;
