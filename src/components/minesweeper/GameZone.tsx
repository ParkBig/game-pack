import { css } from '@emotion/react';

export default function GameZone() {
  return <div css={wrap}>gd</div>;
}

const wrap = css`
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px inset;
`;
