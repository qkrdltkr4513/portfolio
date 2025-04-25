import { useRef } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import usePointer from '@src/hooks/usePointer';
import { themes } from '@styles/themes';

interface ContainerProps {
  children: React.ReactNode;
}

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  height: 100%;
  // min-width: 100vh;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.colors['Gray/14']};
`;

const innerStyle = () => css`
  width: 100%;
  padding: 20px 0 40px;
`;

const pointerStyle = () => css`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${themes.colors['Gray/09']};
  opacity: 0.3;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${themes.colors.White};
  }
`;

const Container = ({ children }: ContainerProps) => {
  const ref = useRef(null);
  const { x, y } = usePointer(ref);

  return (
    <div css={wrapperStyle()}>
      {/* <motion.div
        ref={ref}
        css={pointerStyle()}
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 300,
          stiffness: 50000,
          restDelta: 0.001,
        }}
      >
        <span />
      </motion.div> */}
      <div css={innerStyle()}>{children}</div>
    </div>
  );
};

export default Container;
