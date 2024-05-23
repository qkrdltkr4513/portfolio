import { useCallback } from 'react';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import Body from '@components/common/Body';
import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Thumbnail from '@components/Thumbnail';
import Text from '@components/common/Text';
import Article from '@components/Article';
import Icon from '@components/common/Icon';
import { imgAustin } from '@assets/images';
import { THUMBNAIL_TYPE } from '@core/common/constants';
import { ThumbnailInfoProps } from '@src/core/common/types';

const textContentWrapperStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 0px 30px;
  margin-bottom: 20px;
`;

const textContentBoxStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const THUMBNAIL_LIST: ThumbnailInfoProps[] = [
  {
    type: THUMBNAIL_TYPE.ABOUT,
    main: `Hello, I'm I.Sak 👋`,
    sub: 'Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.RESUME,
    main: 'MY RESUME',
    sub: '이력서 상세보기',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'WEB SERVICE',
    sub: '핀다이렉트 Z',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'MOBILE APP',
    sub: 'NSD',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'IOT SERVICE',
    sub: '스마트 빌딩',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.HISTORY,
    main: 'DASHBOARD',
    sub: '프로젝트 경험',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.OTHER,
    main: `Let's work together 🙌`,
    sub: 'CONTACT ME',
    target: '',
  },
];

const Home = () => {
  const TextContent = useCallback(({ type, main, sub }: ThumbnailInfoProps) => {
    return (
      <div css={textContentWrapperStyle()}>
        <div css={textContentBoxStyle()}>
          {type === THUMBNAIL_TYPE.ABOUT ? (
            <>
              <Text
                size={themes.fontSize.Title}
                weight={themes.fontWeight.Medium}
                color={themes.colors.White}
              >
                {main}
              </Text>
              <Text
                size={themes.fontSize.H1}
                weight={themes.fontWeight.Medium}
                color={themes.colors.Contents}
              >
                {sub}
              </Text>
            </>
          ) : type === THUMBNAIL_TYPE.OTHER ? (
            <>
              <Text
                size={themes.fontSize.MainTitle}
                weight={themes.fontWeight.Medium}
                color={themes.colors.Contents}
              >
                {main}
              </Text>
              <Text
                size={themes.fontSize.Title}
                weight={themes.fontWeight.Medium}
                color={themes.colors.White}
              >
                {sub}
              </Text>
            </>
          ) : (
            <>
              <Text
                size={themes.fontSize.H2}
                weight={themes.fontWeight.Medium}
                color={themes.colors.Contents}
              >
                {main}
              </Text>
              <Text
                size={themes.fontSize.MainTitle}
                weight={themes.fontWeight.Medium}
                color={themes.colors.White}
              >
                {sub}
              </Text>
            </>
          )}
        </div>
        <Icon name="icCircleArrow" width={28} height={28} rotate={0} color={themes.colors.White} />
      </div>
    );
  }, []);

  return (
    <GridBox>
      <GridCard columnSize={'1 / 3'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: true,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[0].type}
              main={THUMBNAIL_LIST[0].main}
              sub={THUMBNAIL_LIST[0].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 4'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[1].type}
              main={THUMBNAIL_LIST[1].main}
              sub={THUMBNAIL_LIST[1].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'4 / 5'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[2].type}
              main={THUMBNAIL_LIST[2].main}
              sub={THUMBNAIL_LIST[2].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'1 / 2'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[3].type}
              main={THUMBNAIL_LIST[3].main}
              sub={THUMBNAIL_LIST[3].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'2 / 3'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[4].type}
              main={THUMBNAIL_LIST[4].main}
              sub={THUMBNAIL_LIST[4].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        <Thumbnail
          image={{
            name: imgAustin,
            width: 100,
            height: 100,
            isCircle: false,
          }}
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[5].type}
              main={THUMBNAIL_LIST[5].main}
              sub={THUMBNAIL_LIST[5].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'1 / 3'} height={305}>
        <Thumbnail
          textContent={
            <TextContent
              type={THUMBNAIL_LIST[6].type}
              main={THUMBNAIL_LIST[6].main}
              sub={THUMBNAIL_LIST[6].sub}
            />
          }
          onClick={() => console.log(112313)}
        />
      </GridCard>
      <GridCard columnSize={'3 / 5'} height={305}>
        테스트 8
      </GridCard>
    </GridBox>
  );
};

export default Home;
