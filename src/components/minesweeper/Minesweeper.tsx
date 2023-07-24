import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import Header from './Header';
import GameSettingBar from './GameSettingBar';
import Game from './Game';

export default function Minesweeper() {
  return (
    <main css={wrap}>
      <Header />
      <GameSettingBar />
      <Game />
    </main>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${GlobalStyle.colors.headerBackgroundColor};
`;
