import { css } from '@emotion/react';
import { MenuList } from './StartMenuList';
import useMinesweeperState from 'store/useMinesweeperState';
import useToggleAppState from 'store/useToggleAppState';

interface Props {
  type: MenuList;
}

export default function StartMenu({ type }: Props) {
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();
  const { setOpenGame } = useToggleAppState();

  const onClickHandler = () => {
    if (type === '지뢰찾기' && !isOpenMinesweeper) {
      toggleIsOpenMinesweeper();
      setOpenGame('open', 'Minesweeper');
    }
  };

  return (
    <div css={wrap} onClick={onClickHandler}>
      {type}
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
