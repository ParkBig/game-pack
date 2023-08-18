import { useEffect } from 'react';
import { css } from '@emotion/react';
import useChessState from 'store/useChessState';
import { socket } from 'util/chess/socketIo';
import BoardBlock from './BoardBlock';

interface WrapProps {
  length: number;
}

export default function Chess() {
  const { boardState, setChessMove, setIsBlockPick, setNowTurn } = useChessState();

  useEffect(() => {
    socket.on('perform-chessMove', targetIndex => {
      setChessMove(targetIndex);
      setNowTurn();
    });

    socket.on('picked-index', pickedIndex => {
      setIsBlockPick(pickedIndex);
    });

    return () => {
      socket.off('perform-chessMove');
      socket.off('picked-index');
    };
  }, [setChessMove, setIsBlockPick, setNowTurn]);

  return (
    <div css={wrap({ length: window.innerHeight })}>
      {boardState.board.map((boardBlock, index) => (
        <BoardBlock key={`${boardBlock.col}-${boardBlock.row}`} boardBlock={boardBlock} index={index} />
      ))}
    </div>
  );
}

const wrap = (props: WrapProps) => css`
  width: ${`${props.length * (6 / 7)}px`};
  height: ${`${props.length * (6 / 7)}px`};
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
