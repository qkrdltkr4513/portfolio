import { useEffect } from 'react';
import { css } from '@emotion/react';
import MotionCardWrapper from '@components/motion/MotionCardWrapper';
import { CommonGridCardProps } from '@core/common/types';
import { themes } from '@styles/themes';

const wrapperStyle = (columnSize: string, height?: number) => css`
  // display: inline-grid;
  display: flex;
  ${height &&
  css`
    height: ${height}px;
  `}
  grid-column: ${columnSize};
  align-items: center;
  // background-color: ${themes.colors['White/02']};
  background-color: ${themes.colors.CardBackGround};
  border-radius: 18px;
`;

const innerStyle = () => css`
  width: 100%;
  height: 100%;
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
