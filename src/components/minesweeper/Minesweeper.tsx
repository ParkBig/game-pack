import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import Header from './Header';
import GameSettingBar from './GameSettingBar';
import Game from './Game';
import DraggableCore from 'react-draggable';
import { useRef } from 'react';
import useMinesweeperState from 'store/useMinesweeperState';
import useModalState from 'store/useModalState';
import CustomSettingModal from './CustomSettingModal';

export default function Minesweeper() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const { isOpenMinesweeper } = useMinesweeperState();
  const { isCustomSettingOpen } = useModalState();

  return (
    <div css={wrap}>
      {isOpenMinesweeper && (
        <DraggableCore nodeRef={draggableRef} cancel=".non-draggable" bounds=".draggable-area">
          <main className="Minesweeper" css={main} ref={draggableRef}>
            <Header />
            <GameSettingBar />
            <Game />
          </main>
        </DraggableCore>
      )}
      {isCustomSettingOpen && <CustomSettingModal />}
    </div>
  );
}

const wrap = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
