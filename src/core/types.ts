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

export interface CommonContentsProps {
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

export interface CommonCardProps {
  width?: number;
  children: React.ReactNode;
  className?: string;
}
