import { css } from '@emotion/react';
import { themes } from '@styles/themes';
import MenuList from '@components/common/MenuList';

const wrapperStyle = () => css`
  display: flex;
  width: 100%;
  height: 60px;
`;

const innerStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

const titleStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Title2};
  ${themes.fontWeight.SemiBold};
`;

const contactMeStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Body2};
  ${themes.fontWeight.Regular};
`;

const Header = () => {
  return (
    <div css={wrapperStyle()}>
      <div css={innerStyle()}>
        <span css={titleStyle()}>Portfolio</span>
        <MenuList />
        <span css={contactMeStyle()}>Contact Me</span>
      </div>
    </div>
  );
};

export default Header;
