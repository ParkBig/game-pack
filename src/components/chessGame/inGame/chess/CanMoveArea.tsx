import { css } from '@emotion/react';
import useChessState from 'store/useChessState';
import { socket } from 'util/chess/socketIo';

interface Props {
  index: number;
}

export default function CanMoveArea(props: Props) {
  const { matchRoomName, setChessMove, setNowTurn } = useChessState();

  const moveTo = () => {
    socket.emit('request-move', { roomName: matchRoomName, targetIndex: props.index }, setChessMove);
    setNowTurn();
  };

  return <div css={moveArea} onClick={moveTo} />;
}

const moveArea = css`
  width: 70%;
  height: 70%;
  border-radius: 50px;
  background-color: #44bd32;
  position: absolute;
  z-index: 300;
  opacity: 0.5;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
`;
