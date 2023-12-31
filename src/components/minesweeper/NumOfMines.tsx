import { css } from '@emotion/react';
import useMinesweeperState from 'store/useMinesweeperState';

export default function NumOfMines() {
  const { numOfMines, numOfFlagged } = useMinesweeperState();

  return (
    <div css={wrap}>
      <span>{numOfMines - numOfFlagged}</span>
    </div>
  );
}

const wrap = css`
  width: 55px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px inset gray;
  background-color: black;
  color: red;
  font-family: 'Wallpoet', cursive;
`;
