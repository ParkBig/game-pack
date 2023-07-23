import { BlockInfoRow } from 'types/store/blocksStateType';

/** 랜덤마인 알고리즘.
 * 피셔-예이츠 셔플 알고리즘을 이용했습니다.
 */
export const generateRandomMines = (rows: number, cols: number, numMines: number): BlockInfoRow[] => {
  const totalCells = rows * cols;
  const mineInfoRow: boolean[] = Array.from({ length: totalCells }, (_, index) => index < numMines);

  for (let i = totalCells - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [mineInfoRow[i], mineInfoRow[randomIndex]] = [mineInfoRow[randomIndex], mineInfoRow[i]];
  }

  const board: BlockInfoRow[] = Array.from({ length: rows }, (_, rowIndex) =>
    mineInfoRow.slice(rowIndex * cols, (rowIndex + 1) * cols).map(mineInfo => ({ isMine: mineInfo }))
  );

  return board;
};
