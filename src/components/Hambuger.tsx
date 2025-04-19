import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { hamburgerState } from '@src/recoil/headerState';
import useCommon from '@hooks/useCommon';
import HamburgerMenus from './HamburgerMenus';
import { themes } from '@styles/themes';

const openBox = () => css`
  height: 100vh;
  overflow-y: hidden;
  /* overflow-y: scroll; */
  opacity: 1;
  transition: all 0.44s cubic-bezier(0.32, 0.08, 0.24, 1);
  transition-duration: 0.44;
  /* transition-timing-function: cubic-bezier(0.32, 0.08, 0.24, 1); */
  /* , cubic-bezier(0.52, 0.16, 0.24, 1); */
  /* transition: all 0.36s cubic-bezier(0.9, 0.3, 0.6, 1); */
  /* transition: all 0.41s ease-in-out; */
  transition-delay: 0s, 0s;
  /* margin-top: 56px; */

  // background-color: black;
  background-color: ${themes.colors['Gray/14']};
`;

const closeBox = () => css`
  width: 100%;
  height: calc(100% - 56px);
  overflow-y: hidden;
  max-height: none;
  transition: all 0.44s cubic-bezier(0.52, 0.16, 0.24, 1);
  transition-duration: 0.44;
  /* transition-timing-function: cubic-bezier(0.52, 0.16, 0.24, 1); */
  /* transition: all 0.41s ease-in-out; */
  /* , cubic-bezier(0.52, 0.16, 0.24, 1); */
  transition-delay: 0s, 0s;
  /* margin-top: 56px; */
`;

const hamburgerBox = (isOpenHamburger: boolean) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 56px;
  left: 0;
  ${isOpenHamburger ? openBox() : closeBox()};
`;

const wrapper = css`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 55;
  transform: translateY(3px);
`;

const Hambuger = () => {
  const router = useRouter();
  const [isOpenHamburger, setIsOpenHamburger] = useRecoilState<boolean>(hamburgerState);
  const { setBodyOverflowHidden } = useCommon();

  const changeRouter = () => {
    setIsOpenHamburger(false);
  };

  useEffect(() => {
    const updateState = () => {
      setIsOpenHamburger(isOpenHamburger);
    };

    // window.addEventListener('popstate', goBack);
    router.events.on('routeChangeStart', changeRouter);
    window.addEventListener('transitionend', updateState);

    // 햄버거 메뉴 뒤로가기 제어를 위한 분기
    // if (isOpenHamburger) {
    //   window.history.pushState({ page: 'hamburger' }, document.title);
    // }

    return () => {
      // window.removeEventListener('popstate', goBack);
      router.events.off('routeChangeStart', changeRouter);
      window.removeEventListener('transitionend', updateState);
      // if (isOpenHamburger && !isGoBackClicked && !isLogoClicked) router.back();
    };
  }, [isOpenHamburger]);

  useEffect(() => {
    setBodyOverflowHidden(isOpenHamburger);
  }, [isOpenHamburger]);

  return (
    <div css={wrapper}>
      <div css={hamburgerBox(isOpenHamburger)}>
        <HamburgerMenus />
      </div>
    </div>
  );
};

export default Hambuger;
