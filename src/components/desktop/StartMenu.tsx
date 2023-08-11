import { css } from '@emotion/react';
import { MenuList } from './StartMenuList';
import useMinesweeperState from 'store/useMinesweeperState';
import useToggleAppState from 'store/useToggleAppState';

interface Props {
  menu: MenuList;
}

export default function StartMenu({ menu }: Props) {
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();
  const { setOpenGame } = useToggleAppState();

  const onClickHandler = () => {
    if (menu.name === '지뢰찾기' && !isOpenMinesweeper) {
      toggleIsOpenMinesweeper();
      setOpenGame('open', 'Minesweeper');
    }
  };

  return (
    <div css={wrap} onClick={onClickHandler}>
      {menu.icon}
      {menu.name}
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  color: black;
`;
