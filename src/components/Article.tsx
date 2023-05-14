import { css } from '@emotion/react';
import Title from '@components/common/Title';
import Content from '@components/common/Content';
import { CommonTitleProps, CommonContentProps } from '@src/core/types';

type ArticleProps = CommonTitleProps & CommonContentProps;

const wrapperStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Article = ({ name, main, sub, content }: ArticleProps) => (
  <div css={wrapperStyle()}>
    <Title name={name} main={main} sub={sub} />
    <Content content={content} />
  </div>
);

export default Article;
