import { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { themes } from '@styles/themes';

import Text from '@components/common/Text';

type ChipItemType = {
  key: string;
  name: string;
  value: string;
};

interface ChipProps {
  key: string;
  name: string;
  value: string;
  onToggle: (item: ChipItemType, isActive: boolean) => void;
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

const Chip = ({ key, name, value, onToggle }: ChipProps) => {
  const [isActive, setIsAcitve] = useState(false);

  // chip item을 클릭시 호출한다.
  const onClickChipItem = useCallback(
    (item: ChipItemType) => {
      setIsAcitve(!isActive);
      onToggle(item, isActive);
    },
    [isActive],
  );

  return (
    <div css={wrapperStyle()}>
      <div css={chipItemStyle(isActive)} onClick={() => onClickChipItem({ key, name, value })}>
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
