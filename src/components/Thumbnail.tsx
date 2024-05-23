import { useCallback } from 'react';
import Image, { ImageProps } from 'next/image';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import { ThumbnailProps } from '@core/common/types';
import ExternalLink from '@components/common/ExternalLink';
import Text from '@components/common/Text';
import { THUMBNAIL_TYPE } from '@core/common/constants';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const innerStyle = () => css`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const boxStyle = (image?: ThumbnailProps['image']) => css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: ${image ? 'space-between;' : 'flex-end'};
`;

const imageBoxStyle = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;
`;

const circleImageStyle = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;
  border-radius: ${width / 2}px;
`;

const Thumbnail = ({ image, textContent, onClick }: ThumbnailProps) => {
  const ThumbnailImage = useCallback(() => {
    if (!image) return <></>;

    const { name, width, height, isCircle } = image;

    return (
      <div css={imageBoxStyle(width, height)}>
        {isCircle ? (
          <Image css={circleImageStyle(width, height)} src={name} width={width} height={height} />
        ) : (
          <Image src={name} width={width} height={height} />
        )}
      </div>
    );
  }, [image]);

  return (
    <div css={wrapperStyle()} onClick={onClick}>
      <div css={innerStyle()}>
        <div css={boxStyle(image)}>
          <ThumbnailImage />
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
