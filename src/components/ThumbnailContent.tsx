import React from 'react';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';

import Text from '@components/common/Text';
import Icon from '@components/common/Icon';

import { THUMBNAIL_TYPE } from '@core/common/constants';
import { ThumbnailInfoProps } from '@core/common/types';

const wrapperStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 0px 30px;
  margin-bottom: 20px;
`;

const boxStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ThumbnailContent = ({ type, main, sub }: ThumbnailInfoProps) => {
  return (
    <div css={wrapperStyle()}>
      <div css={boxStyle()}>
        {type === THUMBNAIL_TYPE.ABOUT ? (
          <>
            <Text
              size={themes.fontSize.Title}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.H1}
              weight={themes.fontWeight.Medium}
              color={themes.colors.Contents}
            >
              {sub}
            </Text>
          </>
        ) : type === THUMBNAIL_TYPE.OTHER ? (
          <>
            <Text
              size={themes.fontSize.MainTitle}
              weight={themes.fontWeight.Medium}
              color={themes.colors.Contents}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.Title}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {sub}
            </Text>
          </>
        ) : (
          <>
            <Text
              size={themes.fontSize.H2}
              weight={themes.fontWeight.Medium}
              color={themes.colors.Contents}
            >
              {main}
            </Text>
            <Text
              size={themes.fontSize.MainTitle}
              weight={themes.fontWeight.Medium}
              color={themes.colors.White}
            >
              {sub}
            </Text>
          </>
        )}
      </div>
      <Icon name="icCircleArrow" width={28} height={28} rotate={0} color={themes.colors.White} />
    </div>
  );
};

export default React.memo(ThumbnailContent);
