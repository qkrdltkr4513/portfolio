import { css } from '@emotion/react';
import Card from '@components/common/Card';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
`;

const BoxStyle = () => css`
  flex-grow: 1;
`;

const Resume = () => {
  return (
    <div css={wrapperStyle()}>
      <Card>테스트</Card>
      <div css={BoxStyle()}>테스트111</div>
    </div>
  );
};

export default Resume;
