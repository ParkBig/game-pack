import { css } from '@emotion/react';
import MineSVG from 'assets/svg/Mine';
import useMinesweeperState from 'store/useMinesweeperState';
import useOpenGameState from 'store/useOpenGameState';

export default function GameIcons() {
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();
  const { setOpenGame } = useOpenGameState();

  const openMinesweeperHandler = () => {
    if (!isOpenMinesweeper) {
      toggleIsOpenMinesweeper();
      setOpenGame('open', 'Minesweeper');
    }
  };

  return (
    <div css={wrap}>
      <div css={icon} onDoubleClick={openMinesweeperHandler}>
        <MineSVG fill="black" width="45" height="45" />
        <span>지뢰찾기</span>
      </div>
    </div>
  );
}

const wrap = css`
  position: relative;
`;
const icon = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  cursor: pointer;
`;
