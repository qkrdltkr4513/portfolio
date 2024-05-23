import {
  CommonButtonType,
  CommonMenuListProps,
  CommonGridCardSizeProps,
  CommonPositionProps,
  CommonLevelTypeProps,
} from '@core/types';

import { THUMBNAIL_TYPE } from '@core/common/constants';
import { ThumbnailInfoProps } from '@core/common/types';

// Header에 표시되는 메뉴 리스트.
export const CONSTANTS_MENU_LIST: CommonMenuListProps[] = [
  { name: 'Home', path: '/' },
  { name: 'Works', path: 'works' },
  { name: 'About', path: 'about' },
  { name: 'Resume', path: 'resume' },
];

// Home 페이지에서 표시되는 카드 내부의 썸네일 컨텐츠
export const THUMBNAIL_LIST: ThumbnailInfoProps[] = [
  {
    type: THUMBNAIL_TYPE.ABOUT,
    main: `Hello, I'm I.Sak 👋`,
    sub: 'Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.RESUME,
    main: 'MY RESUME',
    sub: '이력서 상세보기',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'WEB SERVICE',
    sub: '핀다이렉트 Z',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'MOBILE APP',
    sub: 'NSD',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.WORK,
    main: 'IOT SERVICE',
    sub: '스마트 빌딩',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.HISTORY,
    main: 'DASHBOARD',
    sub: '프로젝트 경험',
    target: '',
  },
  {
    type: THUMBNAIL_TYPE.OTHER,
    main: `Let's work together 🙌`,
    sub: 'CONTACT ME',
    target: '',
  },
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
