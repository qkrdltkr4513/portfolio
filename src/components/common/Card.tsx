import Image, { ImageProps } from 'next/image';
import { css } from '@emotion/react';
import MotionCardWrapper from '@components/motion/MotionCardWrapper';
import { CommonCardProps, CommonPositionType } from '@core/common/types';
import { COMMON_POSITION_TYPES } from '@core/common/constants';
import { themes } from '@styles/themes';

const { LEFT_TOP, RIGHT_TOP, LEFT_BOTTOM, RIGHT_BOTTOM } = COMMON_POSITION_TYPES;

const wrapperStyle = (width: number) => css`
  width: ${width}px;
  background-color: ${themes.colors['Gray/13']};
  border-radius: 16px;
`;

const innerStyle = () => css`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 18px;
`;

const ImagePositionStyle = (position: CommonPositionType, isCircleImage: boolean) => css`
  display: flex;
  ${position === LEFT_TOP || position === LEFT_BOTTOM
    ? css`
        justify-content: flex-start;
      `
    : (position === RIGHT_TOP || position === RIGHT_BOTTOM) &&
      css`
        justify-content: flex-end;
      `};
`;

const circleBoxStyle = () => css`
  border-radius: 100%;
`;

const Card = ({
  useMotion = false,
  width = 400,
  imageName,
  imagePosition,
  isCircleImage = false,
  children,
  className,
}: CommonCardProps) => {
  console.log(isCircleImage);
  return (
    <MotionCardWrapper useMotion={useMotion}>
      <div css={wrapperStyle(width)} className={className}>
        <div css={innerStyle()}>
          {imageName && (imagePosition === LEFT_TOP || imagePosition === RIGHT_TOP) && (
            <div css={ImagePositionStyle(imagePosition, isCircleImage)}>
              <Image src={imageName} width="80" height="80" css={circleBoxStyle()} />
            </div>
          )}
          {children}
          {imageName && (imagePosition === LEFT_BOTTOM || imagePosition === RIGHT_BOTTOM) && (
            <div css={ImagePositionStyle(imagePosition, isCircleImage)}>
              <Image src={imageName} width="80" height="80" css={circleBoxStyle()} />
            </div>
          )}
        </div>
      </div>
    </MotionCardWrapper>
  );
};

export default Card;
