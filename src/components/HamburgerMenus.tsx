import { memo, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { hamburgerState } from '@src/recoil/headerState';
import { css, keyframes } from '@emotion/react';
import { themes } from '@styles/themes';

const HAMBUGER_MENU_LIST = [
  {
    name: 'Home',
    path: '/',
    openSec: 0,
    closSec: 0.294,
  },
  {
    name: 'About',
    path: '/about',
    openSec: 0,
    closSec: 0.308,
  },
  {
    name: 'Resume',
    path: '/resume',
    openSec: 0,
    closeSec: 0.294,
  },
  {
    name: 'Works',
    path: '/works',
    openSec: 0,
    closeSec: 0.294,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    openSec: 0,
    closeSec: 0.266,
  },
];

const menuItemStyle = (isCurrentPath: boolean) => css`
  display: block;
  height: 40px;
  padding: 10px 20px;
  // background-color: ${themes.colors['Gray/01']};
  color: ${isCurrentPath ? themes.colors.Yellow : themes.colors['Gray/09']};
  ${themes.fontSize.Body2};
  ${themes.fontWeight.Medium};
  line-height: 20px;
  border-bottom: 1px solid ${themes.colors['Gray/11']};
`;

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const fadeOut = keyframes`
  0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

const fadeInAnimation = (sec: number) => css`
  animation: 0.3s linear ${sec}s 1 ${fadeIn} forwards;
`;

const fadeOutAnimation = (sec: number) => css`
  animation: 0.3s linear ${sec}s 1 ${fadeOut} forwards;
`;

const MenuTreeList = () => {
  // recoil
  const [isOpenHamburger] = useRecoilState<boolean>(hamburgerState);

  // hooks
  const { push, pathname, asPath } = useRouter();

  // handler
  const goToPage = useCallback(
    (pageUrl: string | undefined) => {
      if (pageUrl) {
        push(pageUrl);
      }
    },
    [push],
  );

  return (
    <>
      {HAMBUGER_MENU_LIST.map((menuItem, i) => {
        const { name, path, openSec } = menuItem;
        let isCurrentPath = pathname === path;
        if (path !== '/' && pathname.includes(path)) isCurrentPath = true;

        return (
          <div key={`menu-item-${name}`}>
            <p
              css={css`
                ${menuItemStyle(isCurrentPath)}
                ${isOpenHamburger ? fadeInAnimation(openSec) : fadeOutAnimation(0)}
              `}
              onClick={() => goToPage(path)}
            >
              {menuItem.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default MenuTreeList;
