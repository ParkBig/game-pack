import { css } from '@emotion/react';
import Minesweeper from 'components/minesweeper/Minesweeper';
import GlobalStyle from 'const/globalStyle';
import GameIcons from './GameIcons';
import UnderBar from './UnderBar';
import ChessGame from 'components/chessGame/ChessGame';
import useMinesweeperState from 'store/useMinesweeperState';
import useChessState from 'store/useChessState';

export default function Desktop() {
  const { isOpenMinesweeper } = useMinesweeperState();
  const { isOpenChessGame } = useChessState();

  return (
    <div css={wrap}>
      <GameIcons />
      <div css={content} className="draggable-area">
        {isOpenMinesweeper && <Minesweeper />}
        {isOpenChessGame && <ChessGame />}
      </div>
      <UnderBar />
    </div>
  );
}

const wrap = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${GlobalStyle.backgroundImageUrl});
  background-size: cover;
  background-position: center;
`;
const content = css`
  height: 100%;
  width: 100%;
`;
