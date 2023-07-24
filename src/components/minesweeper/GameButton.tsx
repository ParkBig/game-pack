import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { setBlocks, setIsGameProgress } from 'store/modules/blocksState';
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
      dispatch(setIsGameProgress());
      return;
    }
  };

  const onClickHandler = () => {
    // 마인 판별 알고리즘 연결(bfs)
    // 타이머 시작 (시작 안했다면) 클릭여부 전역에 추가해야함
    if (blockInfo.isMine) {
      // 게임종료 , 게임이 종료되면 모든 버튼들이 클릭이 불가능해져야함
    }
  };

  const onRightMouseClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log('깃발 온오프 해야함, 동시에 마인개수 -+1');
  };

  return (
    <div css={btn}>
      <Button onMouseDown={onMouseDownHandler} onClick={onClickHandler} onContextMenu={onRightMouseClickHandler}>
        {blockInfo.value}
      </Button>
    </div>
  );
}

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
