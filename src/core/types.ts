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
