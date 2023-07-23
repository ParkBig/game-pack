import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Button from 'components/ui/Button';
import { initializeMines } from 'store/modules/minesState';

export default function GameInfo() {
  const dispatch = useDispatch();

  const initialMinesHandler = () => {
    dispatch(initializeMines());
  };

  return (
    <div css={wrap}>
      <span>마인개수</span>
      <div css={btn} onClick={initialMinesHandler}>
        <Button style={{ fontSize: '2em' }}>😀</Button>
      </div>
      <span>진행시간</span>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 4px inset;
`;
const btn = css`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
