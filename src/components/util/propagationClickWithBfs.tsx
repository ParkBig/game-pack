import { BlockInfoRow } from 'types/store/blocksStateType';

// 모든 배열과 지금 누른 인덱스 받아와야함.
/** bfs => dfs 변경
 * bfs가 메모리 사용량이 dfs보다 더 많으며, 지금 지뢰찾기는 커스텀으로 50*50 = 2500개의 데이터만 받지만, 확장가능성으로 더 큰 데이터를 받을 수도 있기에 dfs로 변경함.
 */
export const propagationClickWithDfs = (blockMatrixInfo: BlockInfoRow[], startRow: number, startCol: number) => {
  return changeIsClickStateToClickedWithDfs(blockMatrixInfo, startRow, startCol);
};

const changeIsClickStateToClickedWithDfs = (blockMatrixInfo: BlockInfoRow[], startRow: number, startCol: number) => {
  const stack = [[startRow, startCol]];
  const rows = blockMatrixInfo.length;
  const cols = blockMatrixInfo[0].length;
  const newArr = blockMatrixInfo.map(row => [...row]);
  console.log(stack, rows, cols, newArr);
  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col > cols ||
      newArr[row][col].isMine === true ||
      newArr[row][col].isClicked === true
    ) {
      continue;
    }

    // newArr[row][col].isClicked = true;

    // stack.push([row - 1, col]);
    // stack.push([row + 1, col]);
    // stack.push([row, col - 1]);
    // stack.push([row, col + 1]);
  }
};
