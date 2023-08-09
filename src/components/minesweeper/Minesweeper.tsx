import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import Header from './Header';
import GameSettingBar from './GameSettingBar';
import Game from './Game';
import DraggableCore from 'react-draggable';
import { useRef } from 'react';
import MineSVG from 'assets/svg/Mine';
import useMinesweeperState from 'store/useMinesweeperState';

export default function Minesweeper() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();

  const openMinesweeperHandler = () => {
    if (!isOpenMinesweeper) {
      toggleIsOpenMinesweeper();
    }
  };

  return (
    <div css={wrap} className="draggable-area">
      <div css={icon} onDoubleClick={openMinesweeperHandler}>
        <MineSVG fill="black" width="45" height="45" />
        <span>지뢰찾기</span>
      </div>
      {isOpenMinesweeper && (
        <DraggableCore nodeRef={draggableRef} cancel=".non-draggable" bounds=".draggable-area">
          <main css={main} ref={draggableRef}>
            <Header />
            <GameSettingBar />
            <Game />
          </main>
        </DraggableCore>
      )}
    </div>
  );
}

const wrap = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const icon = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;
const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${GlobalStyle.colors.headerBackgroundColor};
`;
