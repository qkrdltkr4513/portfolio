import { css } from '@emotion/react';
import { CommonCardProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = (width: number) => css`
  width: ${width}px;
  background-color: ${themes.colors['White/02']};
  border-radius: 16px;
`;

const innerStyle = () => css`
  padding: 20px;
`;

const Card = ({ width = 400, children, className }: CommonCardProps) => {
  return (
    <div css={wrapperStyle(width)} className={className}>
      <div css={innerStyle()}>{children}</div>
    </div>
  );
};

export default Card;
