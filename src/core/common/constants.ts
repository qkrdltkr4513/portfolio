import {
  CommonButtonType,
  CommonMenuListProps,
  CommonGridCardSizeProps,
  CommonPositionProps,
  CommonLevelTypeProps,
  ExternalTypeProps,
  ThumbnailType,
} from '@core/common/types';

// Header에 표시되는 메뉴 리스트.
export const CONSTANTS_MENU_LIST: CommonMenuListProps[] = [
  { name: 'Home', path: '/' },
  { name: 'Works', path: 'works' },
  { name: 'About', path: 'about' },
  { name: 'Resume', path: 'resume' },
];

// common button의 type
export const COMMON_BUTTON_TYPES: { [key: string]: CommonButtonType } = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

// Common GridCard Size Types
export const COMMON_CARD_SIZE_TYPES: CommonGridCardSizeProps = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  FULL: 'FULL',
};

// Common Position Type
export const COMMON_POSITION_TYPES: CommonPositionProps = {
  LEFT_TOP: 'LEFT_TOP',
  LEFT_BOTTOM: 'LEFT_BOTTOM',
  RIGHT_TOP: 'RIGHT_TOP',
  RIGHT_BOTTOM: 'RIGHT_BOTTOM',
};

// LEVEL Type
export const COMMON_LEVEL_TYPES: CommonLevelTypeProps = {
  MAIN: 'MAIN',
  SUB: 'SUB',
};

// External Link
export const EXTERNAL_LINK_LIST: ExternalTypeProps[] = [
  { name: 'Buildit', type: 'link', url: 'https://buildit.kr' },
  { name: 'StageFive', type: 'link', url: 'https://www.stagefive.com' },
  { name: 'Nc Soft', type: 'link', url: 'https://www.ncsoft.com' },
  { name: 'File', type: 'file', url: '' },
];

// Thumbnail Types
export const THUMBNAIL_TYPE: { [key in ThumbnailType]: ThumbnailType } = {
  ABOUT: 'ABOUT',
  RESUME: 'RESUME',
  WORK: 'WORK',
  OTHER: 'OTHER',
  HISTORY: 'HISTORY',
};
