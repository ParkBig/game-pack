import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'util/makeBlockMatrix';
import { propagationClickWithDfs } from 'util/propagationClickWithDfs';
import useMinesweeperState from 'store/useMinesweeperState';
import { BlockInfo, SetBlockIsFlaggedPayload, SetBlocksPayload } from 'types/store/useMinesweeperStateTypes';

interface Props {
  blockInfo: BlockInfo;
  thisRow: number;
  thisCol: number;
}

export default function GameButton({ blockInfo, thisRow, thisCol }: Props) {
  const {
    rows,
    cols,
    numOfMines,
    isGameProgress,
    isBlockClickPrevent,
    blockInfoMatrix,
    setBlocks,
    setIsGameProgress,
    setBlockIsClicked,
    setIsBlockClickPrevent,
    setBlockIsFlagged,
  } = useMinesweeperState();

  const onMouseDownHandler = () => {
    if (!isGameProgress) {
      const setsBlockInfoMatrix = generateRandomMines(rows, cols, numOfMines, [thisRow, thisCol]);
      const payload: SetBlocksPayload = { isInitial: true, setsBlockInfoMatrix };
      setBlocks(payload);
      return;
    }
  };

  const onClickHandler = () => {
    if (!isGameProgress) {
      setIsGameProgress(true);
    }
    setBlockIsClicked({ row: thisRow, col: thisCol });
    if (blockInfo.isMine) {
      setIsGameProgress(false);
      setIsBlockClickPrevent(true);
      return;
    }
    const { propagatedBlockInfoMatrix, flaggedCount } = propagationClickWithDfs(blockInfoMatrix, thisRow, thisCol);
    const payload: SetBlocksPayload = {
      isInitial: false,
      setsBlockInfoMatrix: propagatedBlockInfoMatrix,
      flaggedCount,
    };
    setBlocks(payload);
  };

  const onRightMouseClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (!isGameProgress) {
      setIsGameProgress(true);
    }
    if (isBlockClickPrevent || blockInfo.isClicked) {
      return;
    }
    const payload: SetBlockIsFlaggedPayload = { row: thisRow, col: thisCol };
    setBlockIsFlagged(payload);
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
