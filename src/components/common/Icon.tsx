import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { CommonIconProps, CommonIconType } from '@core/types';
import * as icons from '@assets/icons';
import { themes } from '@styles/themes';

interface IconProps {
  name: CommonIconType;
}

const IconBoxStyle = ({
  rotate,
  width,
  height,
  color,
}: Pick<CommonIconProps, 'rotate' | 'width' | 'height' | 'color'>) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${rotate}deg);
  svg {
    width: ${width};
    height: ${height};

    path,
    circle,
    g > rect {
      fill: ${color};
    }
  }
`;

const Icon = ({
  name,
  rotate = 0,
  width,
  height,
  color = themes.colors['Gray/01'],
  className,
}: CommonIconProps) => {
  const SVGIcon = useCallback(
    ({ name }: IconProps) => {
      const viewBox = '0 0 16 16';

      return React.createElement(icons[name], { viewBox });
    },
    [name],
  );

  return (
    <div css={IconBoxStyle({ rotate, width, height, color })} className={className}>
      <SVGIcon name={name} />
    </div>
  );
};

export default Icon;
