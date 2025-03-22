import React from 'react';
import { css } from '@emotion/react';
import { CommonIconProps, CommonIconType } from '@core/types';
import * as svg from '@assets/icons';
import { themes } from '@styles/themes';

interface IconProps {
  name: CommonIconType;
}

const IconBoxStyle = ({
  isFixStroke,
  strokeWidth,
  rotate,
  width,
  height,
  color,
}: Pick<
  CommonIconProps,
  'isFixStroke' | 'strokeWidth' | 'rotate' | 'width' | 'height' | 'color'
>) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${rotate}deg);
  svg {
    width: ${width}px;
    height: ${height}px;

    path,
    circle {
      stroke: ${color};
      fill: ${color};
      ${isFixStroke &&
      css`
        stroke-width: ${strokeWidth || 0};
        vector-effect: non-scaling-stroke;
      `}
    }
  }
`;

const viewBox = '0 0 24 24';
const SVGIcon = ({ name }: IconProps) => React.createElement(svg[name], { viewBox });

const Icon = ({
  name,
  isFixStroke,
  strokeWidth = 0,
  rotate = 0,
  width,
  height,
  color = themes.colors['Gray/01'],
  className,
}: CommonIconProps) => {
  return (
    <div
      css={IconBoxStyle({ isFixStroke, strokeWidth, rotate, width, height, color })}
      className={className}
    >
      <SVGIcon name={name} />
    </div>
  );
};

export default Icon;
