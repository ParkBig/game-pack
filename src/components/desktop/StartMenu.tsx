import { css } from '@emotion/react';
import { MenuList } from './StartMenuList';
import useMinesweeperState from 'store/useMinesweeperState';
import useToggleAppState from 'store/useToggleAppState';
import useChessState from 'store/useChessState';
import { socket } from 'util/chess/socketIo';

interface Props {
  menu: MenuList;
}

export default function StartMenu({ menu }: Props) {
  const { isOpenMinesweeper, toggleIsOpenMinesweeper } = useMinesweeperState();
  const { setOpenGame } = useToggleAppState();
  const {
    matchRoomName,
    isOpenChessGame,
    setIsStart,
    setMyIsInGame,
    setGotCha,
    toggleIsOpenChessGame,
    setMatchRoomName,
  } = useChessState();

  const onClickHandler = () => {
    if (menu.name === '지뢰찾기' && !isOpenMinesweeper) {
      if (isOpenChessGame) {
        setOpenGame('close', 'ChessGame');
        toggleIsOpenChessGame();
        setMatchRoomName();
        if (matchRoomName) {
          setIsStart('false');
          setMyIsInGame(false);
          setGotCha();
          socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'leave' });
        }
      }
      toggleIsOpenMinesweeper();
      setOpenGame('open', 'Minesweeper');
    }
    if (menu.name === '체스게임' && !isOpenChessGame) {
      if (isOpenMinesweeper) {
        setOpenGame('close', 'Minesweeper');
        toggleIsOpenMinesweeper();
      }
      toggleIsOpenChessGame();
      setOpenGame('open', 'ChessGame');
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
