import { css } from '@emotion/react';
import Head from 'next/head';

import MotionBox from '@components/motion/MotionBox';
import Card from '@components/common/Card';
import Article from '@components/Article';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import ExternalLink from '@components/common/ExternalLink';

import { ExternalTypeProps } from '@core/types';
import { COMMON_POSITION_TYPES, EXTERNAL_LINK_LIST, SEO_STATIC_INFO } from '@core/constants';

import { imgMyProfile } from '@assets/images';
import { themes } from '@styles/themes';
import { useCallback, useEffect } from 'react';
import useCommon from '@src/hooks/useCommon';
import Seo from '@src/components/common/Seo';

const { LEFT_TOP } = COMMON_POSITION_TYPES;

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px 70px;
  padding: 20px;

  // @media (min-width: 551px) and (max-width: 800px) {
  //   flex-direction: column;
  // }

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const leftBoxStyle = () => css`
  flex: 1;
`;

const cardListStyle = () => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 24px 0;

  @media (min-width: 601px) and (max-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0 24px;
  }
`;

const rightBoxStyle = () => css`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px 0px;
`;

const experienceBoxStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
`;

const cardContentsStyle = () => css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
`;

const contactMeStyle = () => css`
  width: 100px;
  background-color: ${themes.colors['Gray/13']};
`;

const Resume = () => {
  //
  const { getWindowWidth } = useCommon();
  // contact me 버튼 클릭시 호출한다.
  const onClickContactMe = () => {};

  // 좌측 사이드바 하단에 표시되는 링크 클릭시 호출한다.
  const onClickExternalLink = (item: ExternalTypeProps) => {
    const { type, url } = item;

    if (type === 'link') window.open(url);
  };
  // width={(getWindowWidth() as number) > 800 ? '100%' : '400px'}
  const ExternalLinkList = useCallback(
    () => (
      <Card motionType="FADE_IN_RIGHT">
        <div css={cardContentsStyle()}>
          {EXTERNAL_LINK_LIST.map((item, index) => {
            const { name, type } = item;
            const isLast = EXTERNAL_LINK_LIST.length - 1 === index;
            return (
              <ExternalLink
                key={`link-${name}`}
                isFirst={index === 0}
                isLast={isLast}
                name={name}
                type={type}
                onClick={() => onClickExternalLink(item)}
              />
            );
          })}
        </div>
      </Card>
    ),
    [],
  );

  return (
    <>
      <Seo
        title={SEO_STATIC_INFO.resume.title}
        description={SEO_STATIC_INFO.resume.description}
        url={SEO_STATIC_INFO.resume.url}
        imageName={SEO_STATIC_INFO.resume.imageName}
      />
      <div css={wrapperStyle()}>
        <div css={leftBoxStyle()}>
          <div css={cardListStyle()}>
            <Card
              imageName={imgMyProfile}
              imagePosition={LEFT_TOP}
              motionType="FADE_IN_RIGHT"
              isCircleImage
            >
              <div css={cardContentsStyle()}>
                <Text
                  size={themes.fontSize.H1}
                  weight={themes.fontWeight.SemiBold}
                  color={themes.colors['White/09']}
                >
                  박이삭
                </Text>
                <Text
                  size={themes.fontSize.H2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors.Yellow}
                >
                  Front End Developer
                </Text>
              </div>
              <div css={cardContentsStyle()}>
                <Text
                  size={themes.fontSize.Body2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  E-mail : qkrdltkr4513@gmail.com
                </Text>
                <Text
                  size={themes.fontSize.Body2}
                  weight={themes.fontWeight.Medium}
                  color={themes.colors['White/09']}
                >
                  {/* TODO: 내용 추가 필요 */}
                  Phone : 010.5629.0727
                </Text>
              </div>
              {/* <Button css={contactMeStyle()} text="Contact Me" onClick={onClickContactMe} /> */}
            </Card>
            <ExternalLinkList />
          </div>
        </div>
        <MotionBox css={rightBoxStyle()} motionType="FADE_IN_RIGHT">
          <Article
            name="본인소개"
            content={
              <span>
                Front-End 개발과 협업을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.
              </span>
            }
          />
          <div css={experienceBoxStyle()}>
            <Article
              name="경력사항"
              main="NC ITS"
              sub="2022.07 - 재직중"
              content="Jira 태스크 관리 및 Git flow, Git PR, 코드리뷰, Naming Convention 을 도입하였고, 프로젝트 셋업 및 신규 기술 도입 검토를 담당하였으며, 디자이너와의 협업을 통해 토큰 기반의 디자인시스템 및 공용 컴포넌트 개발 작업을 주로 진행하였습니다. 수행한 프로젝트는 사내에서 사용하는 전사 IT 서비스를 효율적으로 제공하고 관리하는 ITSM 서비스로 Next.js와 React Native를 통한 웹과 앱 서비스를 기획, 디자인 리뷰를 시작으로 기획자와 백엔드 개발자 그리고 디자이너와의 원활한 커뮤니케이션을 통해 디자인 가이드 반영, API 통신을 통한 기획서의 요구사항 반영을 진행하였습니다."
            />
            <Article
              main="스테이지파이브"
              sub="2021.01 - 2022.06"
              content="수행한 프로젝트는 5G, 알뜰폰, 중고폰과 같은 MVNO와 MNO 서비스를 제공하는 B2C 서비스로 자사몰 및 자사서비스 그리고 프로모션 신규 개발 및 유지보수의 프론트엔드 부분을 담당하였습니다. 기획, 디자인 리뷰를 시작으로 기획자와 백엔드 개발자 그리고 디자이너와의 원활한 커뮤니케이션을 통해 디자인 가이드 반영, API 통신을 통한 기획서의 요구사항 반영을 진행하였으며, 주로 공용 컴포넌트 개발 작업과 Storybook 작업을 진행하였습니다."
            />
            <Article
              main="빌드잇"
              sub="2019.04 - 2020.12"
              content="수행한 프로젝트는 IOT 제품 및 서비스를 제공하는 B2B, B2C 서비스로 스마트빌딩 서비스, 자사 IOT 서비스의 Web(클라우드 플랫폼), App의 프론트엔드 부분을 담당하였습니다. 사내에서 개발한 SDK를 통하여 제품 및 디바이스를 연결하고 차트를 통한 데이터 시각화를 중점적으로 개발 진행하였고, 기획, 디자인 리뷰를 시작으로 기획자와 백엔드 개발자 그리고 디자이너와의 원활한 커뮤니케이션을 통해 디자인 가이드 반영, API 통신을 통한 기획서의 요구사항 반영을 진행하였으며, Chrome Inspector를 통한 성능 개선 작업을 진행하였습니다."
            />
            <Article
              main="아토스"
              sub="2017.01 - 2018.12"
              content="수행한 프로젝트는 외부 고객사의 ERP, MES 시스템 구축 및 운영업무로 외부 고객사로 파견업무를 진행하였고, 파견 업무가 종료되면 자사 서비스의 페이지 개발을 진행하였습니다."
            />
          </div>
          <div>
            <Article
              name="기술"
              main="사용 가능 기술"
              content="Next.js, React.js, React Native, Vue.js, Typescript, jQuery, Javascript, React Query, Redux, Recoil, MFA(Module Federation), ES6, AWS S3, HTML5, CSS3, Emotion, Styled Component, Stylus"
            />
            <Article main="협업툴" content="Git, SVN, Figma, Zeplin, Jira, Confluence" />
          </div>
          <div>
            <Article
              name="교육"
              main="러닛"
              sub="2019.01 - 2019.03"
              content="미니 프로젝트를 통한 React.js"
            />
            <Article
              main="투비소프트"
              sub="2017.11 - 2017.11"
              content="Nexacro Platform 개발자 교육"
            />
            <Article
              main="비트교육센터"
              sub="2016.05 - 2016.12"
              content="Java Enterprise 고급 인력 양성"
            />
          </div>
          {/* TODO: 아래 항목 내용 추가 및 페이지 표시 위치 변경 필요 */}
          <div>
            <Article
              name="학력사항"
              main="상명대학교 컴퓨터소프트웨어공학과"
              sub="2011.03 - 2017.02"
            />
            <Article main="아산 고등학교" sub="2008.03 - 2011.02" />
          </div>
          <div>
            <Article name="활동사항" main="학생회" sub="2015.02 - 2016.02" />
            <Article main="하이런" sub="2014.02 - 2015.02" />
            <Article main="S.I.S" sub="2011.02 - 현재" />
          </div>
        </MotionBox>
      </div>
    </>
  );
};

export default Resume;
