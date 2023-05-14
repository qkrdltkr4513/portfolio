import { css } from '@emotion/react';
import Card from '@components/common/Card';
import Article from '@components/Article';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
`;

const cardBoxStyle = () => css`
  flex-direction: column;
  flex-wrap: nowrap;
`;

const BoxStyle = () => css`
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: nowrap;
`;

const Resume = () => {
  return (
    <div css={wrapperStyle()}>
      <div css={cardBoxStyle()}>
        <Card>테스트</Card>
      </div>
      <div css={BoxStyle()}>
        <Article name="Name" main="Main Title" sub="Sub Title" content="contentntasdfadsfsa" />
      </div>
    </div>
  );
};

export default Resume;
