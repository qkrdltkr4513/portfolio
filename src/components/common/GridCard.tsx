import { useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import MotionBox from '@components/motion/MotionBox';
import { CommonGridCardProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = (
  columnSize: string,
  rowSize?: string,
  height?: number,
  isResizeHeight?: boolean,
  type?: string,
) => css`
  display: flex;
  ${height &&
  css`
    height: ${height}px;
  `}
  align-items: center;
  background-color: ${themes.colors.CardBackGround};
  border-radius: 18px;
  cursor: pointer;

  grid-column: ${columnSize};
  grid-row: ${rowSize};

  ${type === 'dashboard'
    ? css`
        @media (max-width: 1080px) {
          ${columnSize === '1 / 2' && 'grid-column: 1 / 3'};
          ${columnSize === '1 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '2 / 3' && 'grid-column: 3 / 5'};
          ${columnSize === '3 / 4' && 'grid-column: 1 / 3'};
          ${columnSize === '3 / 5' && 'grid-column: 1 / 5'};
          ${columnSize === '4 / 5' && 'grid-column: 3 / 5'};
        }

        @media (max-width: 550px) {
          ${columnSize === '1 / 2' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '2 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '3 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '3 / 5' && 'grid-column: 1 / 5'};
          ${columnSize === '4 / 5' && 'grid-column: 1 / 5'};

          ${isResizeHeight && 'height: 200px;'}
        }
      `
    : css`
        @media (max-width: 1080px) {
          ${columnSize === '1 / 2' && 'grid-column: 1 / 3'};
          ${columnSize === '1 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '2 / 3' && 'grid-column: 3 / 5'};
          ${columnSize === '3 / 4' && 'grid-column: 1 / 3'};
          ${columnSize === '3 / 5' && 'grid-column: 1 / 5'};
          ${columnSize === '4 / 5' && 'grid-column: 3 / 5'};
        }

        @media (max-width: 550px) {
          ${columnSize === '1 / 2' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '1 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '2 / 3' && 'grid-column: 1 / 5'};
          ${columnSize === '3 / 4' && 'grid-column: 1 / 5'};
          ${columnSize === '3 / 5' && 'grid-column: 1 / 5'};
          ${columnSize === '4 / 5' && 'grid-column: 1 / 5'};

          ${isResizeHeight && 'height: 200px;'}
        }
      `}
`;

const imageBackgroundStyle = (imageName: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/main/${imageName}.png);
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  opacity: 0.3;
`;

const innerStyle = () => css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (max-width: 550px) {
    // padding: 4px;
    padding: 10px 20px;
  }
`;

const GridCard = ({
  height,
  imageName,
  columnSize,
  rowSize,
  isResizeHeight,
  children,
  className,
  motionType,
  type,
  onClick,
}: CommonGridCardProps) => {
  const ImageBackground = useCallback((props: { imageName: string }) => {
    const { imageName } = props;
    return <div css={imageBackgroundStyle(imageName)} />;
  }, []);

  useEffect(() => {
    console.log('card item mounted');
  }, []);

  return (
    <MotionBox
      css={wrapperStyle(columnSize, rowSize, height, isResizeHeight, type)}
      className={className}
      motionType={motionType}
    >
      <div css={innerStyle()} onClick={onClick}>
        {imageName && <ImageBackground imageName={imageName} />}
        {children}
      </div>
    </MotionBox>
  );
};

export default GridCard;
