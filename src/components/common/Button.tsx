import { css } from '@emotion/react';
import { COMMON_BUTTON_TYPES } from '@core/common/constants';
import { CommonButtonProps, CommonButtonType } from '@core/common/types';
import { themes } from '@styles/themes';

const wrapperStyle = (type: CommonButtonType) => {
  const isBlack = type === COMMON_BUTTON_TYPES.BLACK;
  return css`
    border-radius: 20px;
    border: 1px solid ${themes.colors.White};
    background-color: ${isBlack ? themes.colors['Gray/13'] : themes.colors.White};
    cursor: pointer;
  `;
};

const innerStyle = () => css`
  padding: 10px 14px;
`;

const textStyle = (type: CommonButtonType) => {
  const isBlack = type === COMMON_BUTTON_TYPES.BLACK;
  return css`
    display: block;
    text-align: center;
    color: ${isBlack ? themes.colors.White : themes.colors['Black/08']};
    ${themes.fontSize.Body2};
    ${themes.fontWeight.Medium};
  `;
};

const Button = ({
  type = COMMON_BUTTON_TYPES.BLACK,
  className,
  text,
  onClick,
}: CommonButtonProps) => {
  return (
    <div css={wrapperStyle(type)} onClick={onClick} className={className}>
      <div css={innerStyle()}>
        <span css={textStyle(type)}>{text}</span>
      </div>
    </div>
  );
};

export default Button;
