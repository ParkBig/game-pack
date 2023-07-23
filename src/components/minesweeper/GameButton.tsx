import { css } from '@emotion/react';
import Button from 'components/ui/Button';
import { generateRandomMines } from 'components/util/makeBlockMatrix';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { setBlocks } from 'store/modules/blocksState';
import { BlockInfo } from 'types/store/blocksStateType';

interface Props {
  blockInfo: BlockInfo;
}

export default function GameButton({ blockInfo }: Props) {
  const dispatch = useDispatch();
  const { rows, cols, numOfMines } = useSelector((state: RootState) => state.blocksState);

  const onMouseDown = () => {
    // 이때 마인세팅이 안되있다면 세팅. 이떄 눌린 버튼은 무조건 마인이 아님.
    console.log('잊지마.');
    const payload = generateRandomMines(rows, cols, numOfMines);
    dispatch(setBlocks(payload));
  };

  const onMouseUp = () => {
    // 마인 판별 알고리즘 연결
    // 타이머 시작
    console.log('u');
  };

  return (
    <div css={btn}>
      <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        {blockInfo.isMine}
      </Button>
    </div>
  );
}

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
