import React, { useEffect, useState, useCallback } from 'react';
import { css } from '@emotion/react';

import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { themes } from '@styles/themes';

import GridBox from '@components/common/GridBox';
import GridCard from '@components/common/GridCard';
import Text from '@components/common/Text';
import MotionBox from '@components/motion/MotionBox';
import Content from '@components/common/Content';
import Article from '@components/Article';

import { WorkListItemProps, WorkDetailItemProps } from '@core/types';
import { PROJECT_THUMNAIL_LIST } from '@core/constants';
import Seo from '@src/components/common/Seo';

export const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const innerStyle = () => css`
  width: 100%;
  // TODO
  @media (min-width: 1280px) {
    max-width: 800px;
  }

  @media (min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const contentBoxStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 40px; 0
`;

export const imageBoxStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const textWithContentStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

export const contentStyle = () => css`
  ${themes.fontSize.ClampBody4};
`;

export const assingedTaskStyle = () => css`
  list-style: outside;
  margin-left: 20px;
  line-height: 1.4;
`;

const WorkDetail = () => {
  const router = useRouter();

  const [detailInfo, setDetailInfo] = useState<WorkListItemProps>();

  const TextWithContent = useCallback(({ title, content }: WorkDetailItemProps) => {
    return (
      <div css={textWithContentStyle()}>
        <Text
          size={themes.fontSize.ClampBody1}
          weight={themes.fontWeight.Medium}
          color={themes.colors['White/09']}
        >
          {title}
        </Text>
        <Content css={contentStyle()} content={content} />
      </div>
    );
  }, []);

  // 담당 업무 리스트
  const AssingedTask = useCallback(({ list }: { list: string[] }) => {
    return (
      <ul>
        {list.map((item) => (
          <li key={`list-${item}`} css={assingedTaskStyle()}>
            {item}
          </li>
        ))}
      </ul>
    );
  }, []);

  useEffect(() => {
    const id = router.query.workId || window.history.state.as.split('/works/detail/')[1];

    PROJECT_THUMNAIL_LIST.forEach((item) => {
      if (item.workId === id) setDetailInfo(item);
    });
  }, []);

  return (
    <>
      {/* <Head>
        <title>[포트폴리오] - {detailInfo?.workName}</title>
      </Head> */}
      <Seo
        title={detailInfo?.workName as string}
        description={detailInfo?.introduction as string}
        url={`/works/detail/${detailInfo?.workId}`}
        imageName={`assets/images/${detailInfo?.imageName}.png`}
      />
      <div css={wrapperStyle()}>
        <div css={innerStyle()}>
          {detailInfo && (
            <MotionBox css={contentBoxStyle()} motionType="FADE_IN_UP">
              <div css={imageBoxStyle()}>
                <Image
                  src={`assets/images/${detailInfo.imageName}.png`}
                  width="700"
                  height="525"
                  alt=""
                />
              </div>
              <Text
                size={themes.fontSize.ClampBody1}
                weight={themes.fontWeight.Medium}
                color={themes.colors['White/09']}
              >
                {detailInfo?.workName}
              </Text>
              <TextWithContent title="프로젝트 목적" content={detailInfo.introduction} />
              <TextWithContent title="사용 기술" content={detailInfo.skill} />
              <TextWithContent
                title="담당 업무"
                content={<AssingedTask list={detailInfo.taskList} />}
              />
              <TextWithContent title="형상 관리" content={detailInfo.versionManage} />
              <TextWithContent title="프로젝트 기간" content={detailInfo.period} />
            </MotionBox>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(WorkDetail);
