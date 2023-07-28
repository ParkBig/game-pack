import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { propagationClickWithDfs } from 'components/util/propagationClickWithDfs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import {
  setBlockIsClicked,
  setBlockIsFlagged,
  setBlocks,
  setIsBlockClickPrevent,
  setIsGameProgress,
} from 'store/modules/blocksState';
import { BlockInfo, SetBlockIsFlaggedPayloadAction, SetBlocksPayloadAction } from 'types/store/blocksStateType';

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
      const setsBlockInfoMatrix = generateRandomMines(rows, cols, numOfMines, [thisRow, thisCol]);
      const payload: SetBlocksPayloadAction = { isInitial: true, setsBlockInfoMatrix };
      dispatch(setBlocks(payload));
      dispatch(setIsGameProgress(true));
      return;
    }
  };

  const onClickHandler = () => {
    dispatch(setBlockIsClicked({ row: thisRow, col: thisCol }));
    if (blockInfo.isMine) {
      dispatch(setIsGameProgress(false));
      dispatch(setIsBlockClickPrevent(true));
      return;
    }
    const propagatedBlockInfoMatrix = propagationClickWithDfs(blockInfoMatrix, thisRow, thisCol);
    const payload: SetBlocksPayloadAction = { isInitial: false, setsBlockInfoMatrix: propagatedBlockInfoMatrix };
    dispatch(setBlocks(payload));
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
