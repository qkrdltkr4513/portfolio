import { useEffect } from 'react';
import { css } from '@emotion/react';
import MotionCardWrapper from '@components/motion/MotionCardWrapper';
import { CommonGridCardProps } from '@core/common/types';
import { themes } from '@styles/themes';

const wrapperStyle = (columnSize: string, height?: number) => css`
  display: inline-grid;
  ${height &&
  css`
    height: ${height}px;
  `}
  grid-column: ${columnSize};
  background-color: ${themes.colors['White/02']};
  border-radius: 18px;
`;

const innerStyle = () => css`
  padding: 20px;
`;

const GridCard = ({ height, columnSize, children, className }: CommonGridCardProps) => {
  useEffect(() => {
    console.log('card item mounted');
  }, []);

  return (
    <MotionCardWrapper css={wrapperStyle(columnSize, height)} className={className}>
      <div css={innerStyle()}>{children}</div>
    </MotionCardWrapper>
  );
};

export default GridCard;
