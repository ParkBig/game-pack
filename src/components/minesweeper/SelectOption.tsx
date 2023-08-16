import CheckSVG from 'assets/svg/Check';
import { css } from '@emotion/react';
import useMinesweeperState from 'store/useMinesweeperState';
import { Options } from 'types/store/useMinesweeperStateTypes';
import { sortingGameMode } from 'util/minesweeper/sortingGameMode';

interface WrapProps {
  new?: boolean;
}

interface Props {
  optionValue: Options;
}

export default function SelectOption({ optionValue }: Props) {
  const { gameMode, toggleCustomSettingModal, initializeBlocks, setRowsCols } = useMinesweeperState();

  const handleSelectHandler = () => {
    const selectedValue = optionValue;
    if (selectedValue === 'New') {
      initializeBlocks();
      return;
    }
    if (selectedValue === 'Custom') {
      toggleCustomSettingModal();
      return;
    } else {
      const payload = sortingGameMode(selectedValue);
      setRowsCols(payload);
    }
  };

  return (
    <div onClick={handleSelectHandler} css={wrap({ new: optionValue === 'New' && true })}>
      <span>{optionValue}</span>
      {gameMode === optionValue && <CheckSVG />}
    </div>
  );
}

const wrap = (props: WrapProps) => css`
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-bottom: ${props.new ? '1px solid gray' : 'none'};
  font-size: 13px;
  gap: 5px;
`;
