import React from 'react';
import { css } from '@emotion/react';
import useChessState from 'store/useChessState';
import { BoardsBlock } from 'types/store/useChessStateTypes';
import Chessman from './Chessman';
import CanMoveArea from './CanMoveArea';

interface WrapProps {
  isColor: boolean;
}

const BoardBlock = ({ boardBlock, index }: BoardsBlock) => {
  const { boardState, gameState, userState } = useChessState();

  return (
    <div css={wrap({ isColor: boardBlock.color })}>
      {boardState.isBlockPick.isPick &&
        boardState.canMoveArea.includes(index) &&
        userState.myInfo.gameInfo.playerNum === gameState.nowTurn && <CanMoveArea index={index} />}
      {boardBlock.chessmenType && <Chessman boardBlock={boardBlock} index={index} />}
    </div>
  );
};

export default React.memo(BoardBlock);

const wrap = (props: WrapProps) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${props.isColor ? '#353b48' : 'white'};
  position: relative;
  z-index: 100;
`;
