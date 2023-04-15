import { CommonButtonType, CommonMenuListProps } from '@core/types';

// Header에 표시되는 메뉴 리스트.
export const CONSTANTS_MENU_LIST: CommonMenuListProps[] = [
  { name: 'Home', path: '/' },
  { name: 'Works', path: 'works' },
  { name: 'About', path: 'about' },
  { name: 'Resume', path: 'resume' },
];

// common button의 type
export const COMMON_BUTTON_TYPES: { [index: string]: CommonButtonType } = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};
