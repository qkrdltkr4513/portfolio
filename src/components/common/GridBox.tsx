import { css } from '@emotion/react';
import { CommonGridBoxProps } from '@core/types';

const wrapperStyle = (rows: number, columns: number) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(50px, 1fr));
  grid-template-rows: repeat(${rows}, minmax(150px, 1fr));
  gap: 30px 30px;
`;

const GridBox = ({ rows = 2, columns = 4, children }: CommonGridBoxProps) => {
  return <div css={wrapperStyle(rows, columns)}>{children}</div>;
};

export default GridBox;
