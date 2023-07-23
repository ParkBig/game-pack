import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { setBlocks, setIsGameProgress } from 'store/modules/blocksState';
import { BlockInfo } from 'types/store/blocksStateType';

interface Props {
  blockInfo: BlockInfo;
  thisRow: number;
  thisCol: number;
}

export default function GameButton({ blockInfo, thisRow, thisCol }: Props) {
  const dispatch = useDispatch();
  const { rows, cols, numOfMines, isGameProgress } = useSelector((state: RootState) => state.blocksState);

  const onMouseDown = () => {
    if (!isGameProgress) {
      const payload = generateRandomMines(rows, cols, numOfMines, [thisRow, thisCol]);
      dispatch(setBlocks(payload));
      dispatch(setIsGameProgress());
      return;
    }
  };

  const onMouseUp = () => {
    // 마인 판별 알고리즘 연결
    // 타이머 시작
    console.log('u');
  };

  return (
    <div css={btn}>
      <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        {blockInfo.isMine}
      </Button>
    </div>
  );
}

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
