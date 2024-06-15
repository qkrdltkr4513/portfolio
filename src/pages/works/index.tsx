import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

import Text from '@components/common/Text';
import Chip, { ChipItemType } from '@components/common/Chip';

import { themes } from '@styles/themes';
import { uniqueId } from 'lodash';

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

// TODO: Config 파일 생성 후 정의 필요
const FILTER_LIST = [
  { name: 'All', tag: 'all', active: true },
  { name: 'Web', tag: 'web', active: false },
  { name: 'Mobile App', tag: 'mobile', active: false },
  { name: 'Desktop App', tag: 'desktop', active: false },
  { name: 'Design', tag: 'design', active: false },
];

// 현재까지 진행한 프로젝트 리스트
const WORK_HISTORY_LIST = [
  {
    title: '',
    description: '',
    techSkill: '',
    versionManger: '',
    name: '',
    value: '',
    tag: '',
    company: '',
    link: '',
    images: [],
  },
];

const Works = () => {
  const [filterList, setFilterList] = useState(FILTER_LIST);

  // Filter Chip Item 토클시 호출한다.
  const onToggleChip = (chipItem: Omit<ChipItemType, 'active'>, currentActiveStatus: boolean) => {
    const { tag } = chipItem;

    if (tag === 'all') {
      setFilterList((prevState) => {
        return prevState.map((item) => {
          if (item.tag === 'all') item.active = true;
          else item.active = false;
          return item;
        });
      });
    } else {
      const activatedFilter = filterList.filter((item) => item.active === true);

      setFilterList((prevState) => {
        if (filterList.length - 1 === activatedFilter.length + 1 && !currentActiveStatus) {
          return prevState.map((item) => {
            if (item.tag === 'all') item.active = true;
            else item.active = false;
            return item;
          });
        } else {
          return prevState.map((item) => {
            if (item.tag === tag) item.active = !currentActiveStatus;
            if (item.tag === 'all') item.active = false;
            return item;
          });
        }
      });
    }
  };

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
      </motion.div>
    </div>
  );
};

export default Works;
