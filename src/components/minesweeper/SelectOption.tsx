import { useDispatch, useSelector } from 'react-redux';
import { initializeBlocks, setRowsCols } from 'store/modules/blocksState';
import { RootState } from 'store/configureStore';
import CheckSVG from 'assets/svg/Check';
import { css } from '@emotion/react';
import { Options } from 'types/store/blocksStateType';
import { sortingGameMode } from 'components/util/sortingGameMode';

interface WrapProps {
  new?: boolean;
}

interface Props {
  optionValue: Options;
}

export default function SelectOption({ optionValue }: Props) {
  const dispatch = useDispatch();
  const gameMode = useSelector((state: RootState) => state.blocksState.gameMode);

  const handleSelectHandler = () => {
    const selectedValue = optionValue;
    if (selectedValue === 'New') {
      dispatch(initializeBlocks());
      return;
    }
    if (selectedValue === 'Custom') {
      console.log('custom');
      return;
    } else {
      const payload = sortingGameMode(selectedValue);
      dispatch(setRowsCols(payload));
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
