import { BlockInfo, BlockInfoRow } from 'types/store/UseBlocksState';

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
    /** 버그 발견!
     * 현재 당사자끼리의 정보만 바꾸는데, 잘못됨.
     * 바뀌게되면 원천블락을 둘러싼 주변 블락들의 지뢰카운트를 하나찍줄여주고,
     * 바꿀 블락의 주변 블락들의 지뢰카운트를 늘려줘야한다.
     */
    const falseBlocksIndexes = findFalseBlocks(board);
    const changeBlockIndex = getRandomBlock(falseBlocksIndexes);
    exchangeBlockInfo(board, excludeIndex, changeBlockIndex);
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

const exchangeBlockInfo = (board: BlockInfoRow[], source: [number, number], target: [number, number]) => {
  const rows = board.length;
  const cols = board[0].length;
  const [sourceRow, sourceCol] = source;
  const [targetRow, targetCol] = target;
  const dRow = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dCol = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < 8; i++) {
    const [exchangeNearBySourceBlockRow, exchangeNearBySourceBlockCol] = [sourceRow + dRow[i], sourceCol + dCol[i]];
    const [exchangeNearByTargetBlockRow, exchangeNearByTargetBlockCol] = [targetRow + dRow[i], targetCol + dCol[i]];

    if (
      exchangeNearBySourceBlockRow > -1 &&
      exchangeNearBySourceBlockRow < rows &&
      exchangeNearBySourceBlockCol > -1 &&
      exchangeNearBySourceBlockCol < cols
    ) {
      const exchangeNearBySourceBlockValue = board[exchangeNearBySourceBlockRow][exchangeNearBySourceBlockCol].value;
      if (exchangeNearBySourceBlockValue) {
        if (exchangeNearBySourceBlockValue === 1) {
          board[exchangeNearBySourceBlockRow][exchangeNearBySourceBlockCol].value = null;
        } else {
          board[exchangeNearBySourceBlockRow][exchangeNearBySourceBlockCol].value = exchangeNearBySourceBlockValue - 1;
        }
      }
    }
    if (
      exchangeNearByTargetBlockRow > -1 &&
      exchangeNearByTargetBlockRow < rows &&
      exchangeNearByTargetBlockCol > -1 &&
      exchangeNearByTargetBlockCol < cols
    ) {
      const exchangeNearByTargetBlockValue = board[exchangeNearByTargetBlockRow][exchangeNearByTargetBlockCol].value;
      if (exchangeNearByTargetBlockValue) {
        board[exchangeNearByTargetBlockRow][exchangeNearByTargetBlockCol].value = exchangeNearByTargetBlockValue + 1;
      } else {
        board[exchangeNearByTargetBlockRow][exchangeNearByTargetBlockCol].value = 1;
      }
    }
  }

  const sourceBlock = board[sourceRow][sourceCol];
  const targetBlock = board[targetRow][targetCol];

  board[sourceRow][sourceCol] = { ...sourceBlock, value: targetBlock.value, isMine: false };
  board[targetRow][targetCol] = { ...targetBlock, value: sourceBlock.value, isMine: true };
};
