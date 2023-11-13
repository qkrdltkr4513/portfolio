import React from 'react';
import { css } from '@emotion/react';
import { CommonTextProps } from '@core/types';

const textStyle = ({ size, weight, color }: CommonTextProps) => css`
  display: block;
  color: ${color};
  ${size};
  ${weight};
`;

const Text = ({ size, weight, color, children, className }: CommonTextProps) => (
  <p css={textStyle({ size, weight, color })} className={className}>
    {children}
  </p>
);

export default React.memo(Text);
