import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import MenuList from '@components/common/MenuList';
import Button from '@components/common/Button';
import Icon from './Icon';

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
  display: flex;
  width: 100%;
  max-width: 1400px;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    max-width: 676px;
  }

  @media (max-width: 700px) {
    justify-content: center;
  }

  @media (max-width: 550px) {
    max-width: 550px;
  }
`;

const titleStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Title};
  ${themes.fontWeight.SemiBold};

  @media (max-width: 700px) {
    display: none;
  }
`;

const Header = () => (
  <div css={wrapperStyle()}>
    <div css={innerStyle()}>
      <span css={titleStyle()}>Portfolio</span>
      <MenuList />
    </div>
  </div>
);

export default Header;
