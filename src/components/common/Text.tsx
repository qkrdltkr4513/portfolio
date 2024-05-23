import React from 'react';
import { css } from '@emotion/react';
import { CommonTextProps } from '@core/types';

const textStyle = ({ size, weight, color, textAlign }: CommonTextProps) => css`
  display: block;
  color: ${color};
  text-align: ${textAlign};
  ${size};
  ${weight};
`;

const Text = ({
  size,
  weight,
  color,
  textAlign = 'left',
  children,
  className,
}: CommonTextProps) => (
  <p css={textStyle({ size, weight, color, textAlign })} className={className}>
    {children}
  </p>
);

export default React.memo(Text);
