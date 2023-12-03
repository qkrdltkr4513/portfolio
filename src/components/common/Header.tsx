import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import MenuList from '@components/common/MenuList';
import Button from '@components/common/Button';

const wrapperStyle = () => css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 10;
  background-color: ${themes.colors['Gray/14']};
`;

const innerStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

const titleStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Title};
  ${themes.fontWeight.SemiBold};
`;

const contactMeStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Body2};
  ${themes.fontWeight.SemiBold};
`;

const Header = () => {
  // contact me 버튼 클릭시 호출한다.
  const onClickContactMe = () => {};

  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>
        <span css={titleStyle()}>Portfolio</span>
        <MenuList />
        <Button text="Contact Me" onClick={onClickContactMe} />
        {/* <span css={contactMeStyle()}>Contact Me</span> */}
      </div>
    </div>
  );
};

export default Header;
