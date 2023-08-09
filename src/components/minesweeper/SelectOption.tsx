import CheckSVG from 'assets/svg/Check';
import { css } from '@emotion/react';
import { sortingGameMode } from 'util/sortingGameMode';
import useMinesweeperState from 'store/useMinesweeperState';
import useModalState from 'store/useModalState';
import { Options } from 'types/store/useMinesweeperStateTypes';

interface WrapProps {
  new?: boolean;
}

interface Props {
  optionValue: Options;
}

export default function SelectOption({ optionValue }: Props) {
  const { toggleCustomSettingModal } = useModalState();
  const { gameMode, initializeBlocks, setRowsCols } = useMinesweeperState();

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
