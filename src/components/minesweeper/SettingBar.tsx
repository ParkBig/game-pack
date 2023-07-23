import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { useState } from 'react';
import GameModeSelector from './GameModeSelector';

export default function SettingBar() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelectOpenHandler = () => {
    setIsSelectOpen(prev => !prev);
  };

  return (
    <div css={wrap}>
      <div css={toggleSelect}>
        <div onClick={toggleSelectOpenHandler}>
          <span>Game</span>
        </div>
        {isSelectOpen && <GameModeSelector />}
      </div>
      <div
        css={toggleSelect}
        onClick={() => {
          window.alert('구현할 요구기능이 없습니다.');
        }}
      >
        <span>Option</span>
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
