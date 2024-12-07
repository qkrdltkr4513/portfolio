import { useEffect, useState, useMemo, useCallback } from 'react';
// import { motion } from 'framer-motion';
import { css } from '@emotion/react';

import MotionBox from '@components/motion/MotionBox';
import Text from '@components/common/Text';
import Chip, { ChipItemType } from '@components/common/Chip';
import Card from '@components/common/Card';

import { themes } from '@styles/themes';
import { uniqueId } from 'lodash';
// import Thumbnail from '@src/components/Thumbnail';
// import ThumbnailContent from '@src/components/ThumbnailContent';
import { PROJECT_THUMNAIL_LIST } from '@core/constants';
import { WorkListItemProps } from '@core/types';
// import { imgAustin } from '@assets/images';
import WorkThumbnail from '@src/components/WorkThumbnail';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
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

const filterBoxStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const chipsBoxStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

const workListBoxStyle = () => css`
  display: inline-flex;
  flex-direction: row;
  max-width: 1600px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
`;

// TODO: Config 파일 생성 후 정의 필요
const FILTER_LIST = [
  { name: 'All', tag: 'All', active: true },
  { name: 'Web', tag: 'Web', active: false },
  { name: 'Mobile App', tag: 'Mobile', active: false },
  { name: 'Desktop App', tag: 'Desktop', active: false },
  { name: 'Design', tag: 'Design', active: false },
];

// 현재까지 진행한 프로젝트 리스트
// const WORK_HISTORY_LIST = [
//   {
//     title: '',
//     description: '',
//     techSkill: '',
//     versionManger: '',
//     name: '',
//     value: '',
//     tag: '',
//     company: '',
//     link: '',
//     images: [],
//   },
// ];

const Works = () => {
  const [filterList, setFilterList] = useState(FILTER_LIST);

  const workList = useMemo(() => {
    let result: WorkListItemProps[] = [];

    filterList.forEach((item) => {
      const { name, tag, active } = item;

      if (tag === 'All' && active) result = [...PROJECT_THUMNAIL_LIST];
      else {
        PROJECT_THUMNAIL_LIST.forEach((projectItem) => {
          const { tagNames } = projectItem;
          // 필터 기능
          if ((tagNames.includes(tag) || tag === 'All') && active) {
            result.push(projectItem);
          }
        });
      }
    });
    return result;
  }, [filterList]);

  // Filter Chip Item 토클시 호출한다.
  const onToggleChip = useCallback(
    (chipItem: Omit<ChipItemType, 'active'>, currentActiveStatus: boolean) => {
      const { tag } = chipItem;
      if (tag === 'All') {
        setFilterList((prevState) => {
          return prevState.map((item) => {
            if (item.tag === 'All') item.active = true;
            else item.active = false;
            return item;
          });
        });
      } else {
        setFilterList((prevState) => {
          const activatedFilter = prevState.filter((item) => item.active === true);
          const isActiveAll =
            (filterList.length - 1 === activatedFilter.length && !currentActiveStatus) ||
            activatedFilter.length === 0;

          if (isActiveAll) {
            return prevState.map((item) => {
              if (item.tag === 'All') item.active = true;
              else item.active = false;
              return item;
            });
          } else {
            return prevState.map((item) => {
              if (item.tag === tag) item.active = !currentActiveStatus;
              if (item.tag === 'All') item.active = false;
              return item;
            });
          }
        });
      }
    },
    [filterList],
  );

  return (
    <div css={wrapperStyle()}>
      <MotionBox css={headerStyle()} motionType={'FADE_IN_UP'}>
        <Text
          size={themes.fontSize.ClampTitle}
          weight={themes.fontWeight.Bold}
          color={themes.colors['Gray/12']}
          textAlign="center"
          css={titleStyle()}
        >
          All Works
        </Text>
      </MotionBox>
      <MotionBox css={filterBoxStyle()} motionType={'FADE_IN_UP'}>
        <div css={chipsBoxStyle()}>
          {filterList.map((item) => {
            const { name, tag, active } = item;
            return (
              <Chip
                key={`chip-item-${uniqueId()}`}
                name={name}
                tag={tag}
                active={active}
                onToggle={onToggleChip}
              />
            );
          })}
        </div>
      </MotionBox>
      <div css={workListBoxStyle()}>
        {workList.map((item) => {
          const { imageName, workId, tagNames, workName } = item;
          return (
            <Card motionType={'FADE_IN_UP'} isFullCard={true} key={`${uniqueId()}`}>
              <WorkThumbnail
                imageName={imageName}
                workId={workId}
                tagNames={tagNames}
                workName={workName}
                onClick={() => console.log(111)}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
