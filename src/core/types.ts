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
}

export type CommonGridCardType = 'SMALL' | 'MEDIUM' | 'LARGE' | 'FULL';

export interface CommonGridCardSizeProps {
  [key: string]: CommonGridCardType;
}

export interface CommonCardProps {
  type: CommonGridCardType;
  height?: number;
  columnSize: string;
  children: React.ReactNode;
}
