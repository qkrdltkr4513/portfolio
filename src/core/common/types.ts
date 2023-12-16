import * as icons from '@assets/icons';
import { ImageProps } from 'next/image';

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
  useMotion?: boolean;
  height?: number;
  columnSize: string;
  children: React.ReactNode;
  className?: string;
}

export type CommonPositionType = 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';
export interface CommonPositionProps {
  LEFT_TOP: CommonPositionType;
  LEFT_BOTTOM: CommonPositionType;
  RIGHT_TOP: CommonPositionType;
  RIGHT_BOTTOM: CommonPositionType;
}

export interface CommonCardProps {
  useMotion?: boolean;
  width?: number;
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

export interface CommonContentProps {
  content?: string;
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
