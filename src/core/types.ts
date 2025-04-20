import * as icons from '@assets/icons';
import { ImageProps, StaticImageData } from 'next/image';

export interface CommonMenuListProps {
  name: string;
  path: string;
}

export type CommonButtonType = 'BLACK' | 'WHITE';

export interface CommonButtonProps {
  type?: CommonButtonType;
  text: string;
  className?: string;
  onClick: () => void;
}

export interface CommonBodyProps {
  children: React.ReactNode;
}

export interface CommonGridBoxProps {
  rows?: number;
  columns?: number;
  children: React.ReactNode;
  className?: string;
}

export type CommonGridCardType = 'SMALL' | 'MEDIUM' | 'LARGE' | 'FULL';

export interface CommonGridCardSizeProps {
  [key: string]: CommonGridCardType;
}

export interface CommonGridCardProps {
  motionType?: CommonMotionType;
  imageName?: string;
  isResizeHeight?: boolean;
  useMotion?: boolean;
  height?: number;
  columnSize: string;
  rowSize?: string;
  children: React.ReactNode;
  className?: string;
  type?: string;
  onClick?: () => void;
}

export type CommonPositionType = 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';

export interface CommonPositionProps {
  LEFT_TOP: CommonPositionType;
  LEFT_BOTTOM: CommonPositionType;
  RIGHT_TOP: CommonPositionType;
  RIGHT_BOTTOM: CommonPositionType;
}

export type CommonMotionType = 'DEFAULT' | 'FADE_IN_UP' | 'FADE_IN_RIGHT';

export interface CommonCardProps {
  isFullCard?: boolean;
  motionType?: CommonMotionType;
  useMotion?: boolean;
  width?: string;
  maxWidth?: string;
  height?: string;
  imageName?: ImageProps['src'];
  imagePosition?: CommonPositionType;
  isCircleImage?: boolean;
  children: React.ReactNode;
  className?: string;
  isHoverAction?: boolean;
}

export interface CommonArticleTitleProps {
  name?: string;
  main?: string;
  sub?: string;
}

export interface CommonContentProps {
  content?: React.ReactNode | string;
  className?: string;
}

export type CommonIconType = keyof typeof icons;

export interface CommonIconProps {
  name: CommonIconType;
  isFixStroke?: boolean;
  strokeWidth?: number;
  rotate?: number;
  width: number;
  height: number;
  color?: string;
  className?: string;
}

export interface CommonLevelTypeProps {
  MAIN: CommonLevelType;
  SUB: CommonLevelType;
}

export interface CommonMenuListProps {
  name: string;
  path: string;
}

export interface CommonButtonProps {
  type?: CommonButtonType;
  text: string;
  className?: string;
  onClick: () => void;
}

export interface CommonBodyProps {
  children: React.ReactNode;
}

export interface CommonGridBoxProps {
  rows?: number;
  columns?: number;
  children: React.ReactNode;
  className?: string;
}

export interface CommonPositionProps {
  LEFT_TOP: CommonPositionType;
  LEFT_BOTTOM: CommonPositionType;
  RIGHT_TOP: CommonPositionType;
  RIGHT_BOTTOM: CommonPositionType;
}

export interface CommonCardProps {
  useMotion?: boolean;
  width?: string;
  // imageName?: string;
  imageName?: ImageProps['src'];
  imagePosition?: CommonPositionType;
  isCircleImage?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CommonArticleTitleProps {
  name?: string;
  main?: string;
  sub?: string;
}

export interface CommonIconProps {
  name: CommonIconType;
  isFixStroke?: boolean;
  strokeWidth?: number;
  rotate?: number;
  width: number;
  height: number;
  color?: string;
  className?: string;
}

export interface CommonTextProps {
  size?: string;
  weight: string;
  color: string;
  textAlign?: string;
  children?: React.ReactNode;
  className?: string;
}

export type CommonLevelType = 'MAIN' | 'SUB';

export interface CommonLevelTypeProps {
  MAIN: CommonLevelType;
  SUB: CommonLevelType;
}

export interface ExternalTypeProps {
  name: string;
  type: 'link' | 'file';
  url?: string;
}

export interface CommonExternalLinkProps extends Omit<ExternalTypeProps, 'url'> {
  isFirst?: boolean;
  isLast?: boolean;
  onClick: () => void;
}

export type ThumbnailType = 'ABOUT' | 'RESUME' | 'WORK' | 'HISTORY' | 'OTHER' | 'PROJECT';

export type PositionType = 'START' | 'CENTER' | 'END' | 'MIDDLE';

export type VersionManageToolType = 'GIT' | 'SVN' | string;

export interface ThumbnailProps {
  image?: {
    name: StaticImageData;
    width: number;
    height: number;
    isCircle?: boolean;
    position?: PositionType;
  };
  hasIcon?: boolean;
  textContent: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ThumbnailInfoProps {
  type: ThumbnailType;
  main: string;
  sub: string;
  target?: string;
}

export interface WorkThumbnailProps {
  imageName?: string;
  workId: string;
  tagNames: string[];
  workName: string;
  className?: string;
  onClick: (workId: WorkThumbnailProps['workId'], workName: WorkThumbnailProps['workName']) => void;
}

export interface WorkListItemProps extends Omit<WorkThumbnailProps, 'onClick'> {
  target: string;
  skill: string;
  introduction: string;
  taskList: string[];
  versionManage: VersionManageToolType;
  period: string;
  reference?: React.ReactNode;
}

export interface WorkDetailItemProps extends Pick<CommonContentProps, 'content'> {
  title: string;
}
