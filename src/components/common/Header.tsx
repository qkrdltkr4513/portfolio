import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import MenuList from '@components/common/MenuList';
import Hambuger from '@components/Hambuger';
import Button from '@components/common/Button';
import Icon from './Icon';
import { useRecoilState } from 'recoil';
import { hamburgerState } from '@src/recoil/headerState';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const wrapperStyle = () => css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  z-index: 10;
  background-color: ${themes.colors['Gray/14']};
`;

const innerStyle = () => css`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1600px;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 350px) {
    // justify-content: center;
  }

  // @media (min-width: 550px) {
  // max-width: 550px;
  // justify-content: center;
  // }

  // @media (min-width: 800px) {
  //   max-width: 800px;
  //   justify-content: space-between;
  // }

  // @media (min-width: 1080px) {
  //   max-width: 1080px;
  // }

  // @media (min-width: 1280px) {
  //   max-width: 1200px;
  // }
  // @media (min-width: 1440px) {
  //   max-width: 1400px;
  // }

  // @media (max-width: 1080px) {
  //   max-width: 676px;
  // }

  // @media (max-width: 700px) {
  //   justify-content: center;
  // }

  // @media (max-width: 550px) {
  //   max-width: 550px;
  // }
`;

const titleStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Title};
  ${themes.fontWeight.SemiBold};
  cursor: pointer;
`;

const menuListStyle = () => css`
  @media (max-width: 799px) {
    display: none;
  }
`;

const hambugerIconStyle = () => css`
  @media (min-width: 800px) {
    display: none;
  }
`;

const Header = () => {
  const router = useRouter();
  const [isOpenHamburger, setIsOpenHamburger] = useRecoilState<boolean>(hamburgerState);

  const goToHome = () => router.push('/');

  const onClickMenu = useCallback(() => {
    setIsOpenHamburger((currVal) => !currVal);
  }, [setIsOpenHamburger]);

  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>
        <span css={titleStyle()} onClick={goToHome}>
          Portfolio
        </span>
        <MenuList css={menuListStyle()} />
        <div css={hambugerIconStyle()} onClick={onClickMenu}>
          <Icon name={isOpenHamburger ? 'icClose' : 'icHamberger'} width={30} height={30} />
        </div>
        <Hambuger />
      </div>
    </div>
  );
};

export default Header;
