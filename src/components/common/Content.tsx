import { css } from '@emotion/react';
import { CommonContentProps } from '@core/common/types';
import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  display: flex;
  flex-direction: column;
  color: ${themes.colors.Contents};
  ${themes.fontSize.H1};
  ${themes.fontWeight.Normal};
`;

const Content = ({ content }: CommonContentProps) => {
  return <div css={wrapperStyle()}>{content}</div>;
};

export default Content;
