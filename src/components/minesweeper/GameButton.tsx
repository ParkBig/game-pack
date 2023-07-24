import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { propagationClickWithDfs } from 'components/util/propagationClickWithBfs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import {
  setBlockIsClicked,
  setBlockIsFlagged,
  setBlocks,
  setIsBlockClickPrevent,
  setIsGameProgress,
} from 'store/modules/blocksState';
import { BlockInfo, SetBlockIsFlaggedPayloadAction } from 'types/store/blocksStateType';

interface Props {
  blockInfo: BlockInfo;
  thisRow: number;
  thisCol: number;
}

export default function GameButton({ blockInfo, thisRow, thisCol }: Props) {
  const dispatch = useDispatch();
  const { rows, cols, numOfMines, isGameProgress, isBlockClickPrevent, blockInfoMatrix } = useSelector(
    (state: RootState) => state.blocksState
  );

  const onMouseDownHandler = () => {
    if (!isGameProgress) {
      const payload = generateRandomMines(rows, cols, numOfMines, [thisRow, thisCol]);
      dispatch(setBlocks(payload));
      dispatch(setIsGameProgress(true));
      return;
    }
  };

  const onClickHandler = () => {
    // 마인 판별 알고리즘 연결(bfs)
    dispatch(setBlockIsClicked({ row: thisRow, col: thisCol }));
    if (blockInfo.isMine) {
      dispatch(setIsGameProgress(false));
      dispatch(setIsBlockClickPrevent(true));
      return;
    }
    const a = propagationClickWithDfs(blockInfoMatrix, thisRow, thisCol);
    console.log(a);
  };

  const onRightMouseClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (isBlockClickPrevent) {
      return;
    }
    const payload: SetBlockIsFlaggedPayloadAction = { row: thisRow, col: thisCol };
    dispatch(setBlockIsFlagged(payload));
  };

  return (
    <div css={btn}>
      <Button
        isClicked={blockInfo.isClicked}
        blockInfo={blockInfo}
        onMouseDown={onMouseDownHandler}
        onClick={onClickHandler}
        onContextMenu={onRightMouseClickHandler}
      />
    </div>
  );
}

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
