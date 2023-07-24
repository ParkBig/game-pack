import { BlockInfo, BlockInfoRow } from 'types/store/blocksStateType';

/** 랜덤마인 알고리즘.
 * 피셔-예이츠 셔플 알고리즘을 이용했습니다.
 */
export const generateRandomMines = (
  rows: number,
  cols: number,
  numMines: number,
  excludeIndex: [number, number]
): BlockInfoRow[] => {
  const totalCells = rows * cols;
  const mineInfoRow: boolean[] = Array.from({ length: totalCells }, (_, index) => index < numMines);

  for (let i = totalCells - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [mineInfoRow[i], mineInfoRow[randomIndex]] = [mineInfoRow[randomIndex], mineInfoRow[i]];
  }

  const board: BlockInfoRow[] = Array.from({ length: rows }, (_, rowIndex) =>
    mineInfoRow
      .slice(rowIndex * cols, (rowIndex + 1) * cols)
      .map(mineInfo => ({ isMine: mineInfo, isClicked: false, value: null, isFlagged: false }))
  );

  if (!board[excludeIndex[0]][excludeIndex[1]].isMine) {
    return board;
  } else {
    const falseBlocksIndexes = findFalseBlocks(board);
    const changeBlockIndex = getRandomBlock(falseBlocksIndexes);
    board[excludeIndex[0]][excludeIndex[1]].isMine = false;
    board[changeBlockIndex[0]][changeBlockIndex[1]].isMine = true;

    return board;
  }
};

const findFalseBlocks = (matrix: BlockInfoRow[]): Array<[number, number]> => {
  return matrix.reduce((falseElements: Array<[number, number]>, row: BlockInfoRow, rowIndex: number) => {
    row.forEach((value: BlockInfo, colIndex: number) => {
      if (!value.isMine) {
        falseElements.push([rowIndex, colIndex]);
      }
    });
    return falseElements;
  }, []);
};

const getRandomBlock = (arr: Array<[number, number]>): [number, number] => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
