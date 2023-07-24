import { css } from '@emotion/react';
import MineSVG from 'assets/svg/Mine';
import GlobalStyle from 'const/globalStyle';

export default function Header() {
  return (
    <div css={wrap}>
      <MineSVG fill={GlobalStyle.colors.blue} />
      Minesweeper
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 5px;
`;
