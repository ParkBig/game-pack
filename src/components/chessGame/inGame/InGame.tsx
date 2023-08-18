import { css } from '@emotion/react';

import roomPageBg from 'assets/chess/background/roomPageBg.png';
import { useEffect } from 'react';
import useChessState from 'store/useChessState';
import { Player } from 'types/store/useChessStateTypes';
import boardList from 'util/chess/boardList';
import { socket } from 'util/chess/socketIo';
import Interaction from './interaction/Interaction';
import Chess from './chess/Chess';
import TurnNoticeAndAlert from './gameAlert/TurnNoticeAndAlert';

export default function InGame() {
  const {
    matchRoomName,
    boardState,
    userState,
    setIsStart,
    setMyOdds,
    setBoard,
    setNowTurn,
    setGameAlert,
    setMyReady,
    setGotCha,
    setMyIsInGame,
    setMatchRoomName,
    setAllLoginInfo,
    setMyPlayerNum,
  } = useChessState();

  useEffect(() => {
    if (userState.myInfo.loginInfo.isLogin) {
      if (boardState.gotcha.got && boardState.gotcha.chessmenType === 'king') {
        if (boardState.gotcha.caughtChessColor === 'black') {
          if (userState.myInfo.gameInfo.playerNum === 'player-1') {
            setMyOdds(true);
          } else {
            setMyOdds(false);
          }
        }
        if (boardState.gotcha.caughtChessColor === 'white') {
          if (userState.myInfo.gameInfo.playerNum === 'player-1') {
            setMyOdds(false);
          } else {
            setMyOdds(true);
          }
        }
      }
    }
  }, [
    boardState.gotcha.caughtChessColor,
    boardState.gotcha.chessmenType,
    boardState.gotcha.got,
    userState.myInfo.gameInfo.playerNum,
    userState.myInfo.loginInfo.isLogin,
    setMyOdds,
  ]);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'leave' });
    };
    window.addEventListener('beforeunload', beforeUnloadHandler);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [matchRoomName]);

  useEffect(() => {
    socket.emit('board-setting', matchRoomName, (player: Player) => {
      setMyPlayerNum(player);
      const boardSetting = boardList(player);
      setBoard(boardSetting);
      setGameAlert(`당신은 ${player}, ${player === 'player-1' ? '하얀색말입니다.' : '검은색말입니다.'}`);
    });

    socket.on('getLoginInfo', loginInfos => {
      setAllLoginInfo(loginInfos);
    });

    socket.on('all-ready', start => {
      setIsStart();
      console.log(`Game ${start}`);
    });

    socket.on('opponent-entered', () => {
      setGameAlert('상대방이 입장했습니다!');
    });

    socket.on('rematch-start', msg => {
      console.log(msg);
    });

    return () => {
      socket.off('board-setting');
      socket.off('all-ready');
      socket.off('opponent-entered');
      socket.off('rematch-start');
      socket.off('getLoginInfo');
    };
  }, [
    userState.myInfo.gameInfo.isInGame,
    matchRoomName,
    setMatchRoomName,
    setAllLoginInfo,
    setBoard,
    setGameAlert,
    setIsStart,
    setMyPlayerNum,
  ]);

  useEffect(() => {
    socket.on('initialize-ready', () => {
      setGameAlert('상대방이 나갔습니다!');
      setNowTurn('player-1');
      setIsStart('false');
      setMyReady('false');
      setGotCha();
      if (userState.myInfo.gameInfo.playerNum) {
        const boardSetting = boardList(userState.myInfo.gameInfo.playerNum);
        setBoard(boardSetting);
      }
    });

    return () => {
      socket.off('initialize-ready');
    };
  }, [
    userState.myInfo.gameInfo.playerNum,
    matchRoomName,
    setBoard,
    setGameAlert,
    setGotCha,
    setIsStart,
    setMyIsInGame,
    setMyReady,
    setNowTurn,
  ]);

  return (
    <div css={wrap}>
      <div css={chessArea}>
        <TurnNoticeAndAlert />
        <Chess />
      </div>
      <div css={interactionArea}>
        <Interaction />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const chessArea = css`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url(${roomPageBg});
  background-size: cover;
`;
const interactionArea = css`
  width: 20%;
  height: 100%;
  border-left: 5px solid #27ae60;
`;
