import { css } from '@emotion/react';
import ChessSVG from 'assets/svg/Chess';
import MineSVG from 'assets/svg/Mine';
import useChessState from 'store/useChessState';
import useMinesweeperState from 'store/useMinesweeperState';
import useToggleAppState from 'store/useToggleAppState';

interface IconProps {
  top: string;
  left: string;
}

export default function GameIcons() {
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();
  const { isOpenChessGame, toggleIsOpenChessGame } = useChessState();
  const { setOpenGame } = useToggleAppState();

  const openMinesweeperHandler = () => {
    if (isOpenChessGame) {
      toggleIsOpenChessGame();
      setOpenGame('close', 'ChessGame');
    }
    if (!isOpenMinesweeper) {
      toggleIsOpenMinesweeper();
      setOpenGame('open', 'Minesweeper');
    }
  };

  const openChessGameHandler = () => {
    if (isOpenMinesweeper) {
      setOpenGame('close', 'Minesweeper');
      toggleIsOpenMinesweeper();
    }
    if (!isOpenChessGame) {
      toggleIsOpenChessGame();
      setOpenGame('open', 'ChessGame');
    }
  };

  return (
    <div css={wrap}>
      <div css={icon({ top: '10px', left: '10px' })} onDoubleClick={openMinesweeperHandler}>
        <MineSVG fill="black" width="45" height="45" />
        <span>지뢰찾기</span>
      </div>
      <div css={icon({ top: '90px', left: '10px' })} onDoubleClick={openChessGameHandler}>
        <ChessSVG viewBox="550" length="45" />
        <span>체스게임</span>
      </div>
    </div>
  );
}

const wrap = css`
  position: relative;
`;
const icon = (props: IconProps) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: ${props.top};
  left: ${props.left};
  cursor: pointer;
`;
