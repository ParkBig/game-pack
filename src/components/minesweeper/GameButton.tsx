import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { setBlockIsClicked, setBlocks, setIsBlockClickPrevent, setIsGameProgress } from 'store/modules/blocksState';
import { BlockInfo } from 'types/store/blocksStateType';

interface Props {
  blockInfo: BlockInfo;
  thisRow: number;
  thisCol: number;
}

export default function GameButton({ blockInfo, thisRow, thisCol }: Props) {
  const dispatch = useDispatch();
  const { rows, cols, numOfMines, isGameProgress } = useSelector((state: RootState) => state.blocksState);

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
    // 타이머 시작 (시작 안했다면) 클릭여부 전역에 추가해야함
    dispatch(setBlockIsClicked({ row: thisRow, col: thisCol }));
    if (blockInfo.isMine) {
      console.log('hi');
      dispatch(setIsBlockClickPrevent(true));
    }
  };

  const onRightMouseClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log('깃발 온오프 해야함, 동시에 마인개수 -+1');
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
