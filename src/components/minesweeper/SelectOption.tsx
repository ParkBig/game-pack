import { Options } from './GameModeSelector';
import { useDispatch } from 'react-redux';
import { initializeMines, setRowCol } from 'store/modules/minesState';
import { SettingType, sortingNumOfMines } from 'components/util/sortingNumOfMines';

interface Props {
  optionValue: Options;
}

export default function SelectOption({ optionValue }: Props) {
  const dispatch = useDispatch();

  const handleSelectHandler = () => {
    const selectedValue = optionValue;
    if (selectedValue === 'New') {
      console.log('new');
      dispatch(initializeMines());
    }
    if (selectedValue === 'Custom') {
      console.log('custom');
    } else {
      const payload = sortingNumOfMines(selectedValue as SettingType);
      dispatch(setRowCol(payload));
    }
  };

  return (
    <div onClick={handleSelectHandler}>
      <span>{optionValue}</span>
    </div>
  );
}
