import { css } from '@emotion/react';
import Timer from './Timer';
import NumOfMines from './NumOfMines';
import ResetBtn from './ResetBtn';

export default function GameInfo() {
  return (
    <div css={wrap}>
      <NumOfMines />
      <ResetBtn />
      <Timer />
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
  text-align: center;
`;
