import { css } from '@emotion/react';
import { CommonArticleTitleProps } from '@core/types';
import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 18px;
`;

const nameStyle = () => css`
  display: flex;
  justify-content: flex-start;
  color: ${themes.colors['White/09']};
  ${themes.fontSize.Title};
  ${themes.fontWeight.Bold};
`;

const boxStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
`;

const mainTitleStyle = () => css`
  display: flex;
  color: ${themes.colors.Title};
  ${themes.fontSize.MainTitle};
  ${themes.fontWeight.Medium};
`;

const subTitleStyle = () => css`
  display: flex;
  color: ${themes.colors.Contents};
  ${themes.fontSize.SubTitle};
  ${themes.fontWeight.Normal};
`;

const ArticleTitle = ({ name, main, sub }: CommonArticleTitleProps) => (
  <div css={wrapperStyle()}>
    <span css={nameStyle()}>{name}</span>
    <div css={boxStyle()}>
      {main && <span css={mainTitleStyle()}>{main}</span>}
      {sub && <span css={subTitleStyle()}>{sub}</span>}
    </div>
  </div>
);

export default ArticleTitle;
