import {
  CommonButtonType,
  CommonMenuListProps,
  CommonGridCardSizeProps,
  CommonPositionProps,
  CommonLevelTypeProps,
  ExternalTypeProps,
  ThumbnailInfoProps,
  ThumbnailType,
  WorkListItemProps,
} from '@core/types';

export const PAGE_INFOS = {
  HOME: {
    name: 'Home',
    path: '/',
  },
  WORK: {
    name: 'Works',
    path: '/works',
  },
  ABOUT: {
    name: 'About',
    path: '/about',
  },
  RESUME: {
    name: 'Resume',
    path: '/resume',
  },
  DASHBOARD: {
    name: 'Dashboard',
    path: '/dashboard',
  },
};

// Header에 표시되는 메뉴 리스트.
export const CONSTANTS_MENU_LIST: CommonMenuListProps[] = [
  { name: PAGE_INFOS.HOME.name, path: PAGE_INFOS.HOME.path },
  { name: PAGE_INFOS.WORK.name, path: PAGE_INFOS.WORK.path },
  { name: PAGE_INFOS.ABOUT.name, path: PAGE_INFOS.ABOUT.path },
  { name: PAGE_INFOS.RESUME.name, path: PAGE_INFOS.RESUME.path },
  { name: PAGE_INFOS.DASHBOARD.name, path: PAGE_INFOS.DASHBOARD.path },
];

// Thumbnail Types
export const THUMBNAIL_TYPES: { [key in ThumbnailType]: ThumbnailType } = {
  ABOUT: 'ABOUT',
  RESUME: 'RESUME',
  WORK: 'WORK',
  OTHER: 'OTHER',
  HISTORY: 'HISTORY',
  PROJECT: 'PROJECT',
};

// Home 페이지에서 표시되는 카드 내부의 썸네일 컨텐츠
export const THUMBNAIL_LIST: ThumbnailInfoProps[] = [
  {
    type: THUMBNAIL_TYPES.ABOUT,
    main: `Hello, I'm I.Sak 👋`,
    sub: 'Front-End 개발을 즐거워하고 성장 욕구와 긍정적인 사고를 가진 개발자입니다.',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.RESUME,
    main: 'MY RESUME',
    sub: '이력서 상세보기',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.WORK,
    main: 'WEB SERVICE',
    sub: '핀다이렉트 Z',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.WORK,
    main: 'MOBILE APP',
    sub: 'NSD',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.WORK,
    main: 'IOT SERVICE',
    sub: '스마트 빌딩',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.HISTORY,
    main: 'WORK HISTORY',
    sub: '프로젝트 이력',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.HISTORY,
    main: 'DASHBOARD',
    sub: '프로젝트 통계',
    target: '',
  },
  {
    type: THUMBNAIL_TYPES.OTHER,
    main: `Let's work together 🙌`,
    sub: 'CONTACT ME',
    target: '',
  },
];

// WORK 페이지에서 표시되는 프로젝트 요약 카드 리스트
export const PROJECT_THUMNAIL_LIST: WorkListItemProps[] = [
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'ITSM Admin (통합관리자)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile'],
    workName: 'NSD App (서비스데스크 앱)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'NSD (서비스데스크)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Design'],
    workName: '디자인 시스템',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '핀다이렉트Z (자사몰)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '핀다이렉트샵 (자사몰)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'One Click (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '스마트폰샵 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '프로모션 홈페이지',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'BuildThing Loadcell Server (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile'],
    workName: 'BuildThing Loadcell Admin (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile'],
    workName: 'BuildThing Loadcell (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'BuildThing IAQ Cloud (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile'],
    workName: 'BuildThing IAQ Admin (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile', 'Desktop'],
    workName: 'BuildThing Admin v1.1 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Mobile'],
    workName: 'BuildThing IAQ (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'BuildThing Cloud v1.1 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'B.IOT v1.3 (스마트 빌딩 솔루션)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '자사 홈페이지',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'B.IOT v1.2 (스마트 빌딩 솔루션)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'A4S (보안 정보 모니터링 솔루션)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'BuildThing Cloud v1.0 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '제철소 MES 시스템 2.0',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'SWC 웹 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'SWC 키오스크 (자사 서비스)',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: '통합 IT 시스템 구축',
    target: '',
  },
  {
    workId: '',
    imageName: 'img-austin',
    // type: THUMBNAIL_TYPES.PROJECT,
    tagNames: ['Web'],
    workName: 'SWC 월패드 (자사 서비스)',
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

// External Link
export const EXTERNAL_LINK_LIST: ExternalTypeProps[] = [
  { name: 'Buildit', type: 'link', url: 'https://buildit.kr' },
  { name: 'StageFive', type: 'link', url: 'https://www.stagefive.com' },
  { name: 'Nc Soft', type: 'link', url: 'https://www.ncsoft.com' },
  { name: 'File', type: 'file', url: '' },
];
