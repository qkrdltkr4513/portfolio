import { css } from '@emotion/react';
import MotionCardWrapper from '@components/motion/MotionCardWrapper';
import { CommonCardProps } from '@core/types';
import { COMMON_POSITION_TYPES } from '@core/constants';
import { themes } from '@styles/themes';

const wrapperStyle = (width: number) => css`
  width: ${width}px;
  background-color: ${themes.colors['White/02']};
  border-radius: 16px;
`;

const innerStyle = () => css`
  padding: 20px;
`;

const { LEFT_TOP, RIGHT_TOP, LEFT_BOTTOM, RIGHT_BOTTOM } = COMMON_POSITION_TYPES;

const Card = ({ width = 400, imageName, imagePosition, children, className }: CommonCardProps) => {
  return (
    <MotionCardWrapper>
      <div css={wrapperStyle(width)} className={className}>
        <div css={innerStyle()}>
          {imageName && (imagePosition === LEFT_TOP || imagePosition === RIGHT_TOP) && (
            <div>이미지 들어갈곳</div>
          )}
          {children}
          {imageName && (imagePosition === LEFT_BOTTOM || imagePosition === RIGHT_BOTTOM) && (
            <div>이미지 들어갈곳</div>
          )}
        </div>
      </div>
    </MotionCardWrapper>
  );
};

export default Card;
