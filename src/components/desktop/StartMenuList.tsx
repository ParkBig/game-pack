import { css } from '@emotion/react';
import StartMenu from './StartMenu';
import useToggleAppState from 'store/useToggleAppState';
import GlobalStyle from 'const/globalStyle';
import MineSVG from 'assets/svg/Mine';
import ChessSVG from 'assets/svg/Chess';

export interface MenuList {
  icon: React.ReactNode;
  name: '지뢰찾기' | '체스게임';
}

const menuList: MenuList[] = [
  { icon: <MineSVG fill="black" width="25" height="25" />, name: '지뢰찾기' },
  { icon: <ChessSVG viewBox="600" length="25" />, name: '체스게임' },
];

export default function StartMenuList() {
  const { isOpenMenuList } = useToggleAppState();

  return (
    <>
      {isOpenMenuList && (
        <div css={wrap}>
          {menuList.map(menu => (
            <StartMenu key={menu.name} menu={menu} />
          ))}
        </div>
      )}
    </>
  );
}

const wrap = css`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  position: absolute;
  left: 0;
  bottom: 40px;
  border: 6px solid ${GlobalStyle.colors.desktopUnderBarColor};
  background-color: white;
`;
