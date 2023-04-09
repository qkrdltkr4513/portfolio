import { css } from '@emotion/react';
import { themes } from '@styles/themes';

interface ContainerProps {
  children: React.ReactNode;
}

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${themes.colors['Black/09']};
`;

const innerStyle = () => css`
  padding: 20px 40px;
`;

const Container = ({ children }: ContainerProps) => {
  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>{children}</div>
    </div>
  );
};

export default Container;
