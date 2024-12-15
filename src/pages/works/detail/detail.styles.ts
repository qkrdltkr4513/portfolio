import { css } from '@emotion/react';
import { themes } from '@styles/themes';

export const wrapperStyle = () => css`
  display: flex;
  width: 1000px;
`;

export const innerStyle = () => css`
  width: 100%;
`;

export const contentBoxStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 40px; 0
`;

export const imageBoxStyle = () => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const textWithContentStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

export const contentStyle = () => css`
  ${themes.fontSize.ClampBody4};
`;

export const assingedTaskStyle = () => css`
  list-style: outside;
  margin-left: 20px;
  line-height: 1.4;
`;
