import React from 'react';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';

import Text from '@components/common/Text';

import { THUMBNAIL_TYPES } from '@core/constants';
import { ThumbnailInfoProps, ThumbnailType } from '@core/types';

const wrapperStyle = (type: ThumbnailType) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 0px 30px;
  ${type !== THUMBNAIL_TYPES.PROJECT
    ? css`
        margin-bottom: 20px;
      `
    : css`
        margin-top: 30px;
      `}
`;

const boxStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ThumbnailContent = ({ type, main, sub }: ThumbnailInfoProps) => {
  const { ABOUT, OTHER, PROJECT } = THUMBNAIL_TYPES;
  return (
    <div css={wrapperStyle(PROJECT)}>
      <div css={boxStyle()}>
        {type === ABOUT ? (
          <>
            <Text
              size={themes.fontSize.ClampSubTitle}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.ClampBody4}
              weight={themes.fontWeight.Medium}
              color={themes.colors.Contents}
            >
              {sub}
            </Text>
          </>
        ) : type === OTHER ? (
          <>
            <Text
              size={themes.fontSize.ClampBody2}
              weight={themes.fontWeight.Medium}
              color={themes.colors.Contents}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.ClampSubTitle}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {sub}
            </Text>
          </>
        ) : (
          <>
            <Text
              size={themes.fontSize.ClampBody4}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.ClampBody2}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {sub}
            </Text>
          </>
        )}
      </div>
      {/* {type !== PROJECT && (
        <Icon name="icCircleArrow" width={28} height={28} rotate={0} color={themes.colors.White} />
      )} */}
    </div>
  );
};

export default React.memo(ThumbnailContent);
