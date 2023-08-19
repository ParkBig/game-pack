import { css } from '@emotion/react';
import ChessSVG from 'assets/svg/Chess';
import CloseSVG from 'assets/svg/Close';
import GoBackSVG from 'assets/svg/GoBack';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';
import useToggleAppState from 'store/useToggleAppState';
import { socket } from 'util/chess/socketIo';

export default function ChessHeader() {
  const {
    matchRoomName,
    setIsStart,
    setMyReady,
    setNowTurn,
    setMyIsInGame,
    setGotCha,
    toggleIsOpenChessGame,
    setMatchRoomName,
  } = useChessState();
  const { setOpenGame } = useToggleAppState();

  const goBackToFindMatchHandler = () => {
    setMatchRoomName();
    setIsStart('false');
    setMyReady('false');
    setNowTurn('player-1');
    setMyIsInGame(false);
    setGotCha();
    socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'leave' });
  };

  const closeChessGameHandler = () => {
    toggleIsOpenChessGame();
    setMatchRoomName();
    setOpenGame('close', 'ChessGame');
    if (matchRoomName) {
      setIsStart('false');
      setMyIsInGame(false);
      setGotCha();
      socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'leave' });
    }
  };

  return (
    <div css={wrap}>
      <div css={title}>
        <ChessSVG viewBox="550" length="25" />
        ChessGame
      </div>
      {matchRoomName && (
        <div css={roomInfo}>
          <span>매치이름: {matchRoomName}</span>
        </div>
      )}
      <div css={upperBtn}>
        {matchRoomName && (
          <div css={btn} onClick={goBackToFindMatchHandler}>
            <GoBackSVG />
          </div>
        )}
        <div css={btn} onClick={closeChessGameHandler}>
          <CloseSVG />
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5px;
  background-color: ${GlobalStyle.colors.headerBackgroundColor};
`;
const title = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const roomInfo = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const upperBtn = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const btn = css`
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
