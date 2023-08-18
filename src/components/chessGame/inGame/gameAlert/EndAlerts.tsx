import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { socket } from 'util/chess/socketIo';
import useChessState from 'store/useChessState';
import boardList from 'util/chess/boardList';
import GlobalStyle from 'const/globalStyle';

import craftChess from 'assets/chess/background/craftChess.png';
import reGameBg from 'assets/chess/background/reGameBg.png';
import ggBg from 'assets/chess/background/ggBg.png';

export default function EndAlerts() {
  const {
    matchRoomName,
    boardState,
    userState,
    setMatchRoomName,
    setMyIsInGame,
    setMyReady,
    setGotCha,
    setBoard,
    setIsStart,
    setNowTurn,
  } = useChessState();

  const reGame = () => {
    socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'initialize' });
    setNowTurn('player-1');
    setIsStart('false');
    setMyReady('false');
    setGotCha();
    if (userState.myInfo.gameInfo.playerNum) {
      const boardSetting = boardList(userState.myInfo.gameInfo.playerNum);
      setBoard(boardSetting);
    }
  };

  const goHome = () => {
    socket.emit('leave-or-initialize-room', { roomName: matchRoomName, state: 'leave' });
    setIsStart('false');
    setMyIsInGame(false);
    setGotCha();
    setMatchRoomName();
  };

  return (
    <>
      <div css={matchResult}>
        {boardState.gotcha.caughtChessColor === 'black' ? (
          <>
            <UpperResult>
              <Result fontSize="large">검은색 킹이 잡혔습니다..!</Result>
              <br />
              <Result fontSize="xx-large">white-player 승리!</Result>
            </UpperResult>
            <Rematch>
              <RematchBtn bgColor="green" onClick={reGame}>
                다시하기
              </RematchBtn>
              <RematchBtn bgColor="red" onClick={goHome}>
                GG
              </RematchBtn>
            </Rematch>
          </>
        ) : (
          <>
            <UpperResult>
              <Result fontSize="large">하얀색 킹이 잡혔습니다..!</Result>
              <br />
              <Result fontSize="xx-large">black-player 승리!</Result>
            </UpperResult>
            <Rematch>
              <RematchBtn bgColor="green" onClick={reGame}>
                다시하기
              </RematchBtn>
              <RematchBtn bgColor="red" onClick={goHome}>
                GG
              </RematchBtn>
            </Rematch>
          </>
        )}
      </div>
    </>
  );
}

const matchResult = css`
  width: 550px;
  height: 310px;
  border: 5px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${craftChess});
  background-size: cover;
  position: absolute;
  z-index: 500;
`;
const UpperResult = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Result = styled.span<{ fontSize: string }>`
  text-align: center;
  font-size: ${prop => prop.fontSize};
`;
const Rematch = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 80px;
`;
const RematchBtn = styled.button<{ bgColor: string }>`
  width: 130px;
  height: 50px;
  border-radius: 10px;
  background-color: ${prop => prop.bgColor};
  background-image: url(${prop => (prop.bgColor === 'green' ? reGameBg : ggBg)});
  background-size: cover;
  color: #d2dae2;
  font-size: ${GlobalStyle.size.fontSize5};
  font-weight: 700;
  cursor: pointer;
`;
