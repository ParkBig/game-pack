import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { useState } from 'react';
import GameModeSelector from './GameModeSelector';
import useMinesweeperState from 'store/useMinesweeperState';

export default function GameSettingBar() {
  const { isCustomSettingOpen } = useMinesweeperState();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelectOpenHandler = () => {
    if (isCustomSettingOpen) {
      return;
    }
    setIsSelectOpen(prev => !prev);
  };

  return (
    <div css={wrap} className="non-draggable">
      <div css={toggleSelect}>
        <div onClick={toggleSelectOpenHandler}>
          <span>Game</span>
        </div>
        {isSelectOpen && !isCustomSettingOpen && <GameModeSelector />}
      </div>
      <div
        css={toggleSelect}
        onClick={() => {
          window.alert('화이띵!');
        }}
      >
        <span>Help</span>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background-color: ${GlobalStyle.colors.settingBarBackgroundColor};
  gap: 15px;
  border: 1px solid gray;
`;
const toggleSelect = css`
  position: relative;
  cursor: pointer;
`;
