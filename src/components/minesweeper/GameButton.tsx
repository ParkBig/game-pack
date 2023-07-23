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
  const { rows, cols, numOfMines, isGameProgress, blockInfoMatrix } = useSelector(
    (state: RootState) => state.blocksState
  );

  const onMouseDownHandler = () => {
    console.log(blockInfoMatrix);
    if (!isGameProgress) {
      const payload = generateRandomMines(rows, cols, numOfMines, [thisRow, thisCol]);
      dispatch(setBlocks(payload));
      dispatch(setIsGameProgress());
      return;
    }
  };

  const onClickHandler = () => {
    // 마인 판별 알고리즘 연결
    // 타이머 시작 (시작 안했다면)
    console.log('onClick');
  };

  const onRightMouseClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log('오른쪽클릭');
  };

  return (
    <div css={btn}>
      <Button onMouseDown={onMouseDownHandler} onClick={onClickHandler} onContextMenu={onRightMouseClickHandler}>
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
