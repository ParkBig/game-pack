import { css } from '@emotion/react';

export default function ChessGame() {
  return (
    <div css={wrap}>
      <div>gd</div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: tomato;
`;
