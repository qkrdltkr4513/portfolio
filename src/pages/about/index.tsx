import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import Text from '@components/common/Text';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';

import { themes } from '@styles/themes';
import { COMMON_CARD_SIZE_TYPES } from '@src/core/constants';

const wrapperStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  // gap: 20px 0;
`;

const headerStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const titleStyle = () => css`
  letter-spacing: -0.05em;
`;

const contentsBoxStyle = () => css`
  display: flex;
  flex: 4;
  flex-direction: column;
`;

const footerStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const About = () => {
  useEffect(() => {
    console.log('mounted');
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
          About Me
        </Text>
      </motion.div>
      <div css={contentsBoxStyle()}>
        <GridBox>
          <GridCard columnSize={'1 / 4'} height={280}>
            이미지
          </GridCard>
          <GridCard columnSize={'4 / 5'} height={280}>
            <Text
              size={themes.fontSize.ClampBody1}
              weight={themes.fontWeight.Medium}
              color={themes.colors['White/09']}
            >
              본인소개
            </Text>
            <Text
              size={themes.fontSize.ClampBody3}
              weight={themes.fontWeight.Medium}
              color={themes.colors['Black/07']}
            >
              Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.
            </Text>
          </GridCard>
          <GridCard columnSize={'1 / 3'} height={280}>
            나에 대하여 또는 관심분야
          </GridCard>
          <GridCard columnSize={'3 / 5'} height={280}>
            경력사항
          </GridCard>
          <GridCard columnSize={'1 / 2'} height={280}>
            I'm Austin
          </GridCard>
          <GridCard columnSize={'2 / 4'} height={280}>
            프로젝트 진행사항
          </GridCard>
          <GridCard columnSize={'4 / 5'} height={280}>
            이력사항
          </GridCard>
        </GridBox>
      </div>
      <div css={footerStyle()}>
        <div>페이스북</div>
        <div>인스타그램</div>
        <div>이메일</div>
      </div>
    </div>
  );
};

export default About;
