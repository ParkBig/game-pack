import { css } from '@emotion/react';
import WindowSVG from 'assets/svg/Window';
import GlobalStyle from 'const/globalStyle';
import StartMenuList from './StartMenuList';
import useToggleAppState from 'store/useToggleAppState';

export default function ToggleStartMenu() {
  const { setIsOpenMenuList } = useToggleAppState();

  const toggleStartMenuHandler = () => {
    setIsOpenMenuList();
  };

  return (
    <div css={start} onClick={toggleStartMenuHandler}>
      <WindowSVG />
      <span>start</span>
      <StartMenuList />
    </div>
  );
}

const start = css`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px outset;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: ${GlobalStyle.colors.desktopUnderBarStartBackgroundColor};
  position: relative;
  cursor: pointer;
`;
