import { css } from '@emotion/react';
import ArticleTitle from '@components/common/ArticleTitle';
import Content from '@components/common/Content';
import { CommonArticleTitleProps, CommonContentProps } from '@core/types';

type ArticleProps = CommonArticleTitleProps & CommonContentProps;

const wrapperStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Article = ({ name, main, sub, content }: ArticleProps) => (
  <div css={wrapperStyle()}>
    <ArticleTitle name={name} main={main} sub={sub} />
    {content && <Content content={content} />}
  </div>
);

export default Article;
