import { css } from '@emotion/react';
import { CommonContentProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  display: flex;
  flex-direction: column;
  color: ${themes.colors.Contents};
  ${themes.fontSize.H1};
  ${themes.fontWeight.Normal};
`;

const Content = ({ content, className }: CommonContentProps) => {
  return (
    <div css={wrapperStyle()} className={className}>
      {content}
    </div>
  );
};

export default Content;
