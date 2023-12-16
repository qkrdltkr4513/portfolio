import { css } from '@emotion/react';
import Card from '@components/common/Card';
import Article from '@components/Article';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import ExternalLink from '@components/common/ExternalLink';
import { COMMON_POSITION_TYPES, EXTERNAL_LINK_LIST } from '@core/common/constants';
import { imgMyProfile } from '@assets/images';
import { themes } from '@styles/themes';
import { ExternalTypeProps } from '@core/common/types';

const { LEFT_TOP } = COMMON_POSITION_TYPES;

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px 70px;
`;

const leftBoxStyle = () => css`
  flex: 1;
`;

const cardListStyle = () => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px 0;
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
  // contact me 버튼 클릭시 호출한다.
  const onClickContactMe = () => {};

  // 좌측 사이드바 하단에 표시되는 링크 클릭시 호출한다.
  const onClickExternalLink = (item: ExternalTypeProps) => {
    const { type, url } = item;

    // TODO: 삭제 필요
    console.log(type, url);
  };

  return (
    <div css={wrapperStyle()}>
      <div css={leftBoxStyle()}>
        <div css={cardListStyle()}>
          <Card useMotion imageName={imgMyProfile} imagePosition={LEFT_TOP} isCircleImage>
            <div css={cardContentsStyle()}>
              <Text
                size={themes.fontSize.H1}
                weight={themes.fontWeight.SemiBold}
                color={themes.colors['White/09']}
              >
                Austin Park
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
                qkrdltkr4513@gmail.com
              </Text>
              <Text
                size={themes.fontSize.Body2}
                weight={themes.fontWeight.Medium}
                color={themes.colors['White/09']}
              >
                {/* TODO: 내용 추가 필요 */}
                TODO: 내용 추가 필요
              </Text>
            </div>
            <Button css={contactMeStyle()} text="Contact Me" onClick={onClickContactMe} />
          </Card>
          <Card useMotion>
            <div css={cardContentsStyle()}>
              {EXTERNAL_LINK_LIST.map((item, index) => {
                const { name, type } = item;
                const isLast = EXTERNAL_LINK_LIST.length - 1 === index;
                return (
                  <ExternalLink
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
        </div>
      </div>
      <div css={rightBoxStyle()}>
        <Article
          name="본인소개"
          content="Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다."
        />
        <div css={experienceBoxStyle()}>
          <Article
            name="경력사항"
            main="NC SOFT"
            sub="2022.07 - 재직중"
            content="TODO: 간략하게 회사에서 한일"
          />
          <Article
            main="스테이지파이브"
            sub="2021.01 - 2022.06"
            content="TODO: 간략하게 회사에서 한일"
          />
          <Article main="빌드잇" sub="2019.04 - 2020.12" content="TODO: 간략하게 회사에서 한일" />
          <Article main="아토스" sub="2017.01 - 2018.12" content="TODO: 간략하게 회사에서 한일" />
        </div>
        <div>
          <Article name="기술" content="안녕하세요" />
        </div>
        <div>
          <Article
            name="교육"
            main="러닛"
            sub="2019.01 - 2019.03"
            content="React를 통한 Mini project"
          />
          <Article
            main="비트교육센터"
            sub="2016.05 - 2016.12"
            content="Spring Framework MVC pattern"
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
      </div>
    </div>
  );
};

export default Resume;
