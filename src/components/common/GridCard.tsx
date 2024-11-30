import { useEffect } from 'react';
import { css } from '@emotion/react';
import MotionBox from '@components/motion/MotionBox';
import { CommonGridCardProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = (columnSize: string, height?: number) => css`
  display: flex;
  ${height &&
  css`
    height: ${height}px;
  `}
  grid-column: ${columnSize};
  align-items: center;
  background-color: ${themes.colors.CardBackGround};
  border-radius: 18px;
`;

const innerStyle = () => css`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const GridCard = ({ height, columnSize, children, className, motionType }: CommonGridCardProps) => {
  useEffect(() => {
    console.log('card item mounted');
  }, []);

  return (
    <MotionBox css={wrapperStyle(columnSize, height)} className={className} motionType={motionType}>
      <div css={innerStyle()}>{children}</div>
    </MotionBox>
  );
};

export default GridCard;
