import * as icons from '@assets/icons';
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
  type: CommonGridCardType;
  height?: number;
  columnSize: string;
  children: React.ReactNode;
  className?: string;
}

export type PositionType = 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';
export interface CommonPositionProps {
  LEFT_TOP: PositionType;
  LEFT_BOTTOM: PositionType;
  RIGHT_TOP: PositionType;
  RIGHT_BOTTOM: PositionType;
}

export interface CommonCardProps {
  width?: number;
  imageName?: string;
  imagePosition?: PositionType;
  children: React.ReactNode;
  className?: string;
}

export interface CommonTitleProps {
  name?: string;
  main: string;
  sub?: string;
}

export interface CommonContentProps {
  content: string;
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
  size: string;
  weight: string;
  color: string;
  children?: React.ReactNode;
  className?: string;
}

export type CommonLevelType = 'MAIN' | 'SUB';

export interface CommonLevelTypeProps {
  MAIN: CommonLevelType;
  SUB: CommonLevelType;
}
