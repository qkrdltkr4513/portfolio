import { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';

import Text from '@components/common/Text';

type ChipItemType = {
  name: string;
  tag: string;
  active: boolean;
};

interface ChipProps {
  name: string;
  tag: string;
  active: boolean;
  onToggle: (item: Omit<ChipItemType, 'active'>, currentActiveStatus: boolean) => void;
}

const wrapperStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
`;

const chipItemStyle = (isActive: boolean) => css`
  min-width: 80px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${isActive ? themes.colors.CardBackGround : themes.colors['Gray/14']};
  border: 2px solid ${themes.colors.CardBackGround};
`;

const Chip = ({ name, tag, active, onToggle }: ChipProps) => {
  const [isActive, setIsAcitve] = useState(active);

  // chip item을 클릭시 호출한다.
  const onClickChipItem = useCallback(
    (item: Omit<ChipItemType, 'active'>) => {
      setIsAcitve(!isActive);
      onToggle(item, isActive);
    },
    [isActive],
  );

  return (
    <div css={wrapperStyle()}>
      <div css={chipItemStyle(isActive)} onClick={() => onClickChipItem({ name, tag })}>
        <Text
          textAlign="center"
          size={themes.fontSize.ClampBody3}
          weight={themes.fontWeight.Medium}
          color={isActive ? themes.colors.White : themes.colors['Gray/10']}
        >
          {name}
        </Text>
      </div>
    </div>
  );
};

export default Chip;
export type { ChipItemType };
