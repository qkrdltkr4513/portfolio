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
  gap: 50px;
`;

const cardBoxStyle = () => css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 24px 0;
`;

const boxStyle = () => css`
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: nowrap;
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
      <div css={cardBoxStyle()}>
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
      <div css={boxStyle()}>
        <Article name="Name" main="Main Title" sub="Sub Title" content="contentntasdfadsfsa" />
      </div>
    </div>
  );
};

export default Resume;
