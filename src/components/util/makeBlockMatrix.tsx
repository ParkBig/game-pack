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
    mineInfoRow.slice(rowIndex * cols, (rowIndex + 1) * cols).map((mineInfo, colIndex) => ({
      isMine: mineInfo,
      isClicked: false,
      value: mineInfo ? null : countNearByMines(rows, cols, rowIndex, colIndex, mineInfoRow),
      isFlagged: false,
    }))
  );

  if (!board[excludeIndex[0]][excludeIndex[1]].isMine) {
    return board;
  } else {
    const falseBlocksIndexes = findFalseBlocks(board);
    const changeBlockIndex = getRandomBlock(falseBlocksIndexes);
    const excludeIndexBlockValue = board[excludeIndex[0]][excludeIndex[1]].value;
    const changeBlockValue = board[changeBlockIndex[0]][changeBlockIndex[1]].value;
    board[excludeIndex[0]][excludeIndex[1]].isMine = false;
    board[excludeIndex[0]][excludeIndex[1]].value = changeBlockValue;
    board[changeBlockIndex[0]][changeBlockIndex[1]].isMine = true;
    board[changeBlockIndex[0]][changeBlockIndex[1]].value = excludeIndexBlockValue;

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

const countNearByMines = (rows: number, cols: number, rowIndex: number, colIndex: number, mineInfoRow: boolean[]) => {
  let nearByMines = 0;
  const dRow = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dCol = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < 8; i++) {
    const targetRow = rowIndex + dRow[i];
    const targetCol = colIndex + dCol[i];
    if (
      targetRow > -1 &&
      targetRow < rows &&
      targetCol > -1 &&
      targetCol < cols &&
      mineInfoRow[targetRow * cols + targetCol]
    ) {
      nearByMines++;
    }
  }

  return nearByMines ? nearByMines : null;
};
