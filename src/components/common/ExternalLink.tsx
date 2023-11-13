import React from 'react';
import { css } from '@emotion/react';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';
import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  display: flex;
  flex-direction: column;
`;

const innerStyle = () => css`
  padding: 20px;
`;

const boxStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ExternalLink = () => {
  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>
        <div css={boxStyle()}>
          <Text
            size={themes.fontSize.H2}
            weight={themes.fontWeight.Medium}
            color={themes.colors.White}
          >
            ExternalLink
          </Text>
          <Icon
            name="icCircleArrow"
            width={24}
            height={24}
            rotate={-45}
            color={themes.colors.White}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExternalLink);
