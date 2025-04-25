import Image, { ImageProps } from 'next/image';
import { css } from '@emotion/react';
import MotionBox from '@components/motion/MotionBox';
import { CommonCardProps, CommonPositionType } from '@core/types';
import { COMMON_POSITION_TYPES } from '@core/constants';
import { themes } from '@styles/themes';

const { LEFT_TOP, RIGHT_TOP, LEFT_BOTTOM, RIGHT_BOTTOM } = COMMON_POSITION_TYPES;

const motionBoxStyle = (maxWidth?: string) => css`
  @media (max-width: 1080px) {
    width: 100%;
    ${maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
  }
`;

const wrapperStyle = (width: string, height?: string, isHoverAction?: boolean) => css`
  width: ${width};
  // max-width: ${width}px;
  ${height &&
  css`
    height: ${height};
  `};
  background-color: ${!isHoverAction && themes.colors.CardBackGround};
  border-radius: 16px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const innerStyle = (isFullCard: boolean) => css`
  display: flex;
  flex-direction: column;
  ${!isFullCard &&
  css`
    padding: 18px;
  `};
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
  isFullCard = false,
  isHoverAction = false,
  motionType,
  useMotion = true,
  width = '400px',
  maxWidth,
  height,
  imageName,
  imagePosition,
  isCircleImage = false,
  children,
  className,
}: CommonCardProps) => {
  return (
    <MotionBox motionType={motionType} useMotion={useMotion} css={motionBoxStyle(maxWidth)}>
      <div css={wrapperStyle(width, height, isHoverAction)} className={className}>
        <div css={innerStyle(isFullCard)}>
          {imageName && (imagePosition === LEFT_TOP || imagePosition === RIGHT_TOP) && (
            <div css={ImagePositionStyle(imagePosition, isCircleImage)}>
              <Image src={imageName} width="80" height="80" css={circleBoxStyle()} alt="" />
            </div>
          )}
          {children}
          {imageName && (imagePosition === LEFT_BOTTOM || imagePosition === RIGHT_BOTTOM) && (
            <div css={ImagePositionStyle(imagePosition, isCircleImage)}>
              <Image src={imageName} width="80" height="80" css={circleBoxStyle()} alt="" />
            </div>
          )}
        </div>
      </div>
    </MotionBox>
  );
};

export default Card;
