import React, { useCallback } from 'react';
import { uniqueId } from 'lodash';
import Image from 'next/image';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import { WorkThumbnailProps } from '@core/types';

import Text from '@components/common/Text';

const wrapperStyle = () => css`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;

  border-radius: 16px;
  :hover {
    transform: scale(1.1);
    transition: all 0.1s linear;
  }
`;

const imageBackgroundStyle = (imageName: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/${imageName}.png);
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  opacity: 0.4;
`;

const boxStyle = () => css`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 270px;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 5;
`;

const tagNameStyle = () => css``;

const workNameStyle = () => css``;

const WorkThumbnail = ({
  imageName = 'img-austin',
  workId,
  tagNames,
  workName,
  className,
  onClick,
}: WorkThumbnailProps) => {
  const onClickItem = (
    workName: WorkThumbnailProps['workName'],
    workId: WorkThumbnailProps['workId'],
  ) => {
    onClick(workName, workId);
  };

  const ImageBackground = useCallback((props: { imageName: string }) => {
    const { imageName } = props;
    return <div css={imageBackgroundStyle(imageName)} />;
  }, []);

  return (
    <div css={wrapperStyle()} className={className} onClick={() => onClickItem(workName, workId)}>
      <ImageBackground imageName={imageName} />
      <div css={boxStyle()}>
        <div css={tagNameStyle()}>
          {tagNames.map((tagName) => (
            <Text
              key={`${uniqueId()}`}
              size={themes.fontSize.Title}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {tagName}
            </Text>
          ))}
        </div>
        <div css={workNameStyle()}>
          <Text
            size={themes.fontSize.H1}
            weight={themes.fontWeight.Medium}
            color={themes.colors.Contents}
          >
            {workName}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default WorkThumbnail;
