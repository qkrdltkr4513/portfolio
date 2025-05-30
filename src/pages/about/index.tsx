import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { css } from '@emotion/react';

import { SEO_STATIC_INFO, THUMBNAIL_TYPES } from '@core/constants';

import Text from '@components/common/Text';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Thumbnail from '@components/Thumbnail';
import ThumbnailContent from '@components/ThumbnailContent';
import Icon from '@components/common/Icon';

import { themes } from '@styles/themes';
import useCommon from '@src/hooks/useCommon';
import Seo from '@src/components/common/Seo';
import { useRouter } from 'next/router';

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
  padding: 0 20px;
`;

const titleStyle = () => css`
  letter-spacing: -0.05em;
`;

const contentsBoxStyle = () => css`
  // max-width: 1600px;
  display: flex;
  flex: 4;
  flex-direction: column;
`;

const imageBoxStyle = () => css`
  > div {
    padding: 0;
  }
`;

// 이미지 백그라운드 스타일
const imageStyle = () => css`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(/portfolio/assets/images/img-about-background.png);
  background-size: cover;
  background-position: center bottom;
  border-radius: 18px;
`;

// footer 스타일
const footerStyle = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

// 웰컴 스타일
const welcomeBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 20px 0;

  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

// 본인소개 스타일
const introduceYourselfBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 20px 0;

  @media (max-width: 800px) {
    justify-content: center;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const introduceYourselfStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px 0;
`;

// 경력사항 스타일
const experienceBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;
`;

const experienceStyle = () => css`
  display: flex;
  width: 100%;
  gap: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

const companyNameStyle = () => css`
  display: flex;
  width: 100%;
  max-width: fit-content;
  flex-direction: row;
  justify-content: flex-start;
`;

const experienceInfoStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  max-width: fit-content;
  > p:first-of-type {
    padding-right: 8px;
  }
`;

const lineStyle = () => css`
  display: block;
  width: calc(100% - 140px);
  height: 1px;
  background-color: ${themes.colors.White};
  @media (max-width: 380px) {
    display: none;
  }
`;

// 인적사항 스타일
const personalInfomationBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;
`;

const personalInfomationStyle = () => css``;

// 학력사항 스타일
const academicBackgroundBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;
`;

const academicBackgroundStyle = () => css``;

// 취미활동
const hobbyBoxStyle = () => css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;
`;

const hobbyStyle = () => css``;

// 더 자세히 알아보기
const learnMoreAboutBoxStyle = () => css`
  > div {
    padding: 0;
  }
`;

const iconProfileBoxStyle = () => css`
  display: flex;
  justify-content: flex-start;
  align-item: center;
`;

const imageBackgroundStyle = (imageName: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/portfolio/assets/images/${imageName}.png);
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  opacity: 0.4;
`;

const EXPERIENCE_LIST = [
  { companyName: 'NC ITS', workType: 'Front-End', period: '22.07 - 현재' },
  { companyName: '스테이지파이브', workType: 'Front-End', period: '21.01 - 22.06' },
  { companyName: '빌드잇', workType: 'Front-End', period: '19.04 - 20.12' },
  { companyName: '아토스', workType: 'SI / SM', period: '2017.01 - 2018.12' },
];

const About = () => {
  const router = useRouter();
  const { getWindowWidth } = useCommon();
  const outerWidth = getWindowWidth();

  const [isMediumSize, setIsMediumSize] = useState<boolean>();

  // 본인 소개 리스트
  const IntroduceYourselfList = useCallback(() => {
    return (
      <div css={introduceYourselfStyle()}>
        <Text
          size={themes.fontSize.ClampBody4}
          weight={themes.fontWeight.Medium}
          color={themes.colors['White/07']}
        >
          B2B, B2C, IOT 서비스에서 Front-End 부분을 담당하여 다양한 환경(웹, 모바일 앱, 데스크탑
          앱)에서 즐겁게 개발한 경험이 있습니다.
          <br />
          <br />
          B2B에서는 ITSM과 같은 사내에서만 사용하는 백오피스, 데이터 시각화를 중점적으로 담당하였고,{' '}
          {/* <br /> */}
          B2C에서는 eCommerce 서비스의 프로모션, 주문, 결재, 개인화 페이지를 중점적으로
          담당하였으며, {/*  <br /> */}
          IOT에서는 클라우드 서비스와 하이브리드 앱 그리고 데이터 시각화를 담당하여 진행한 경험이
          있습니다.
        </Text>
      </div>
    );
  }, []);

  // 경력 리스트
  const ExperienceList = useCallback(() => {
    return EXPERIENCE_LIST.map((item) => {
      const { companyName, workType, period } = item;
      return (
        <div key={`experiencd-${companyName}`} css={experienceStyle()}>
          <div css={companyNameStyle()}>
            <Text
              size={themes.fontSize.ClampBody3}
              weight={themes.fontWeight.Medium}
              color={themes.colors['White/07']}
            >
              {companyName}
            </Text>
          </div>
          <span css={lineStyle()} />
          <div css={experienceInfoStyle()}>
            <Text
              size={themes.fontSize.ClampBody3}
              weight={themes.fontWeight.Medium}
              color={themes.colors['White/07']}
              textAlign="right"
            >
              {workType}
            </Text>
            <Text
              size={themes.fontSize.ClampBody3}
              weight={themes.fontWeight.Medium}
              color={themes.colors['White/07']}
              textAlign="left"
            >
              {period}
            </Text>
          </div>
        </div>
      );
    });
  }, []);

  // 인적사항
  const PersonalInfomationList = useCallback(() => {
    return (
      <div css={personalInfomationStyle()}>
        <Text
          size={themes.fontSize.ClampBody4}
          weight={themes.fontWeight.Medium}
          color={themes.colors['White/07']}
        >
          {/* TODO: 인적사항 리스트렌더링 작업 필요 */}
          이름: 박이삭
          <br />
          나이: 33세
          <br />
          성별: 남자
          <br />
          생년월일: 1992.07.27
          <br />
          {/* 경력: 5년 4개월 */}
          경력: 8년
        </Text>
      </div>
    );
  }, []);

  // 학력사항
  const AcademicBackgroundList = useCallback(() => {
    return (
      <div css={academicBackgroundStyle()}>
        <Text
          size={themes.fontSize.ClampBody4}
          weight={themes.fontWeight.Medium}
          color={themes.colors['White/07']}
        >
          {/* TODO: 학력사항 리스트렌더링 작업 필요 */}
          상명대학교 컴퓨터소프트웨어공학과 졸업
          <br />
          (2011.03 ~ 2017.02)
          <br />
          <br />
          아산고등학교 졸업
          <br />
          (2008.03 ~ 2011.02)
          <br />
        </Text>
      </div>
    );
  }, []);

  // 취미 활동
  const HobbyList = useCallback(() => {
    return (
      <div css={hobbyStyle()}>
        <Text
          size={themes.fontSize.ClampBody4}
          weight={themes.fontWeight.Medium}
          color={themes.colors['White/07']}
        >
          {/* TODO: 취미활동 리스트렌더링 작업 필요 */}
          {/* TODO: 내용 수정 또는 표시 유/무 생각 필요 */}
          피겨스케이트
          <br />
          헬스
          <br />
          축구 / 풋살
          <br />
          게임
          <br />
          인테리어 구경
          <br />
        </Text>
      </div>
    );
  }, []);

  const ImageBackground = useCallback((props: { imageName: string }) => {
    const { imageName } = props;
    return <div css={imageBackgroundStyle(imageName)} />;
  }, []);

  useEffect(() => {
    if (!typeof window) return;

    const windowOuterWidth = window.outerWidth;

    if (outerWidth > 1080) {
      setIsMediumSize(false);
    } else if (
      (outerWidth <= 1080 && outerWidth > 550) ||
      (windowOuterWidth <= 1080 && windowOuterWidth > 550)
    ) {
      setIsMediumSize(true);
    } else if (!outerWidth) {
      setIsMediumSize(false);
    }
  }, [outerWidth, typeof window]);

  return (
    <>
      <Seo
        title={SEO_STATIC_INFO.about.title}
        description={SEO_STATIC_INFO.about.description}
        url={SEO_STATIC_INFO.about.url}
        imageName={SEO_STATIC_INFO.about.imageName}
      />
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
            <GridCard css={imageBoxStyle()} columnSize={'1 / 4'} height={280} isResizeHeight>
              <div css={imageStyle()} />
            </GridCard>
            <GridCard columnSize={isMediumSize ? '1 / 3' : '4 / 5'} height={280} isResizeHeight>
              <div css={welcomeBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  안녕하세요 👋
                </Text>
                <Text
                  size={themes.fontSize.ClampBody3}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/07']}
                >
                  Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.
                </Text>
              </div>
            </GridCard>
            <GridCard columnSize={'1 / 3'} height={280} isResizeHeight>
              <div css={introduceYourselfBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  본인소개 😃
                </Text>
                <IntroduceYourselfList />
              </div>
            </GridCard>
            <GridCard columnSize={'3 / 5'} height={280} isResizeHeight>
              <div css={experienceBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  경력사항 👨‍💻
                </Text>
                <div>{ExperienceList()}</div>
              </div>
            </GridCard>
            <GridCard columnSize={'1 / 2'} height={280} isResizeHeight>
              <div css={personalInfomationBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  인적사항 🤔
                </Text>
                <PersonalInfomationList />
              </div>
            </GridCard>
            <GridCard columnSize={'2 / 3'} height={280} isResizeHeight>
              <div css={academicBackgroundBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  학력사항 🧑‍🎓
                </Text>
                <AcademicBackgroundList />
              </div>
            </GridCard>
            <GridCard columnSize={'3 / 4'} height={280} isResizeHeight>
              <div css={hobbyBoxStyle()}>
                <Text
                  size={themes.fontSize.ClampH2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  취미활동 😙
                </Text>
                <HobbyList />
              </div>
            </GridCard>
            {/*  */}
            <GridCard columnSize={'4 / 5'} height={280} isResizeHeight>
              <Thumbnail
                css={learnMoreAboutBoxStyle()}
                hasIcon={true}
                textContent={
                  <>
                    <div css={iconProfileBoxStyle()}>
                      <ImageBackground imageName="img-my-character" />
                    </div>
                    <ThumbnailContent
                      type={THUMBNAIL_TYPES.RESUME}
                      main="LEARN MORE ABOUT ME"
                      sub="See my resume 👀"
                    />
                  </>
                }
                onClick={() => router.push('/resume')}
              />
            </GridCard>
          </GridBox>
        </div>
      </div>
    </>
  );
};

export default About;
