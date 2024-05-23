import React from 'react';
import { css } from '@emotion/react';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';
import { CommonExternalLinkProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = (isLast: boolean) => css`
  display: flex;
  flex-direction: column;
  ${!isLast &&
  css`
    border-bottom: 1px solid ${themes.colors['Gray/01']};
  `}
`;

const innerStyle = (isFirst: boolean) => css`
  padding: 20px 0;
  ${isFirst
    ? css`
        padding: 0px 0px 20px;
      `
    : css`
        padding: 20px 0;
      `}
`;

const boxStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ExternalLink = ({
  isFirst = false,
  isLast = false,
  name,
  type,
  onClick,
}: CommonExternalLinkProps) => {
  return (
    <div css={wrapperStyle(isLast)}>
      <div css={innerStyle(isFirst)}>
        <div css={boxStyle()} onClick={onClick}>
          <Text
            size={themes.fontSize.H2}
            weight={themes.fontWeight.Medium}
            color={themes.colors.White}
          >
            {name}
          </Text>
          <Icon
            name="icCircleArrow"
            width={24}
            height={24}
            rotate={type === 'link' ? -45 : 90}
            color={themes.colors.White}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExternalLink);
