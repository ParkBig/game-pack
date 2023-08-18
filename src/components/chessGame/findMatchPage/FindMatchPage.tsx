import { css } from '@emotion/react';
import FindMatch from './FindMatch';

import chessBGImg from 'assets/chess/background/chessBGImg.png';

export default function FindMatchPage() {
  return (
    <div css={wrap}>
      <FindMatch />
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${chessBGImg});
`;
