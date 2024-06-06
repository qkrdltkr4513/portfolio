import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

import Text from '@components/common/Text';
import Chip from '@components/common/Chip';

import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const headerStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const titleStyle = () => css`
  letter-spacing: -0.05em;
`;

const filterBoxStyle = () => css``;

const chipsBoxStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

const Works = () => {
  useEffect(() => {
    console.log('mounted works');
  }, []);

  return (
    <div css={wrapperStyle()}>
      <motion.div
        css={headerStyle()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Text
          size={themes.fontSize.ClampTitle}
          weight={themes.fontWeight.Bold}
          color={themes.colors['Gray/12']}
          textAlign="center"
          css={titleStyle()}
        >
          All Works
        </Text>
      </motion.div>
      <motion.div
        css={filterBoxStyle()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div css={chipsBoxStyle()}>
          <Chip key="1" name="All" value="React" onToggle={() => console.log('toggle')} />
          <Chip key="1" name="Web" value="React" onToggle={() => console.log('toggle')} />
          <Chip key="1" name="Mobile App" value="React" onToggle={() => console.log('toggle')} />
          <Chip key="1" name="Desktop App" value="React" onToggle={() => console.log('toggle')} />
          <Chip key="1" name="Design" value="React" onToggle={() => console.log('toggle')} />
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
