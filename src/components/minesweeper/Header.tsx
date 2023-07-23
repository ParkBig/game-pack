import { css } from '@emotion/react';

export default function Header() {
  return <div css={wrap}>Minesweeper</div>;
}

const wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px;
`;
