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

// const logoStyle = () => css`
//   width: 100px;
//   height: 50px;
//   background-image: url(/assets/images/main/img-main-logo.png);
//   background-size: contain;
//   height: 50px;
//   background-repeat: no-repeat;
// `;

// const contactMeStyle = () => css`
//   display: block;
//   color: ${themes.colors.White};
//   ${themes.fontSize.Body2};
//   ${themes.fontWeight.SemiBold};
// `;

const Header = () => {
  // contact me 버튼 클릭시 호출한다.
  // const onClickContactMe = () => {};

  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>
        <span css={titleStyle()}>Portfolio</span>
        {/* <div css={logoStyle()} /> */}
        <MenuList />
        {/* <Button text="Contact Me" onClick={onClickContactMe} /> */}
        {/* <span css={contactMeStyle()}>Contact Me</span> */}
      </div>
    </div>
  );
};

export default Header;
