import { css } from '@emotion/react';
import useChessState from 'store/useChessState';
import { BoardsBlock } from 'types/store/useChessStateTypes';
import { socket } from 'util/chess/socketIo';
import sortChess from 'util/chess/sortChess';
import siftChessmenToMove from 'util/chess/sortChessmenToMove';

interface ChessmanImgProps {
  myChess: boolean | null;
}

export default function Chessman({ boardBlock, index }: BoardsBlock) {
  const { matchRoomName, boardState, gameState, userState, setGameAlert, setCanMoveArea, setIsBlockPick } =
    useChessState();

  const chessImg = sortChess(boardBlock.chessColor, boardBlock.chessmenType);

  const blockPick = () => {
    if (!gameState.isStart) {
      setGameAlert('아직 전부 준비되지 않았습니다.');
      return;
    }
    if (userState.myInfo.gameInfo.playerNum === gameState.nowTurn) {
      setCanMoveArea(siftChessmenToMove(index, boardState.board));
      socket.emit('block-pick', { roomName: matchRoomName, pickedIndex: index }, setIsBlockPick);
    }
  };

  return <img css={chessmanImg({ myChess: boardBlock.isMyChessmen })} onClick={blockPick} src={chessImg} />;
}

const chessmanImg = (props: ChessmanImgProps) => css`
  width: 60%;
  height: 60%;
  position: absolute;
  z-index: 200;
  pointer-events: ${props.myChess ? null : 'none'};
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;
