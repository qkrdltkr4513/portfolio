import { useMemo } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { uniqueId } from 'lodash';
import { CONSTANTS_MENU_LIST } from '@core/constants';
import { CommonMenuListProps } from '@core/types';

import { themes } from '@styles/themes';

interface MenuListProps {
  className?: string;
}

const wrapperStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0 50px;
`;

const itemStyle = (isActive: boolean) => css`
  display: block;
  color: ${isActive ? themes.colors['Yellow'] : themes.colors.White};
  ${themes.fontSize.Body1};
  ${themes.fontWeight.Medium};
  cursor: pointer;
`;

const MenuList = ({ className }: MenuListProps) => {
  const { push, pathname } = useRouter();

  const onClickMenuItem = (item: CommonMenuListProps) => {
    const { path } = item;
    push(path);
  };

  return (
    <div css={wrapperStyle()} className={className}>
      {CONSTANTS_MENU_LIST.map((item) => {
        const { name, path } = item;

        let isActive;
        if (path !== '/') {
          isActive = pathname === path || pathname.includes(path);
        } else {
          isActive = pathname === path;
        }

        return (
          <span
            css={itemStyle(isActive)}
            key={`menu-item-${uniqueId()}`}
            onClick={() => onClickMenuItem(item)}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
};

export default MenuList;
