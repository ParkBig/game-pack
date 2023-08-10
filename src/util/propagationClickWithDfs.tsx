import { BlockInfoRow } from 'types/store/useMinesweeperStateTypes';

export const propagationClickWithDfs = (blockMatrixInfo: BlockInfoRow[], startRow: number, startCol: number) => {
  const stack = [[startRow, startCol]];
  const rows = blockMatrixInfo.length;
  const cols = blockMatrixInfo[0].length;
  const newArr = blockMatrixInfo.map(row => [...row]);
  let flaggedCount = 0;

  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      newArr[row][col].isMine === true ||
      newArr[row][col].isClicked === true
    ) {
      continue;
    }

    if (newArr[row][col].isFlagged) {
      flaggedCount++;
    }

    newArr[row][col] = { ...newArr[row][col], isClicked: true, isFlagged: false };

    if (newArr[row][col].value) {
      continue;
    }

    stack.push([row - 1, col - 1]);
    stack.push([row - 1, col]);
    stack.push([row - 1, col + 1]);
    stack.push([row, col - 1]);
    stack.push([row, col + 1]);
    stack.push([row + 1, col - 1]);
    stack.push([row + 1, col]);
    stack.push([row + 1, col + 1]);
  }

  return { propagatedBlockInfoMatrix: newArr, flaggedCount };
};
