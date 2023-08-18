import { css } from '@emotion/react';
import { Player } from 'types/store/useChessStateTypes';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';

import hourGlass from 'assets/chess/gif/hourGlass.gif';
import Alert from './Alert';

interface WrapProps {
  turn: Player;
  isStart: string;
}

export default function TurnNoticeAndAlert() {
  const { gameState } = useChessState();

  return (
    <>
      <div css={wrap({ turn: gameState.nowTurn, isStart: gameState.isStart.toString() })}>
        <div css={upperMyTurn({ turn: gameState.nowTurn })}>
          <div css={myTurn}>Turn!</div>
          <img src={hourGlass} />
        </div>
      </div>
      <Alert />
    </>
  );
}

const wrap = (props: WrapProps) => css`
  height: 100%;
  width: 100%;
  display: ${props.isStart === 'true' ? null : 'none'};
  position: absolute;
  z-index: 50;
  background: ${props.turn === 'player-1'
    ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(235, 248, 225, 0.1), rgba(235, 248, 225, 0.1), rgba(39, 174, 96, 1))'
    : 'linear-gradient( rgba(39, 174, 96, 1), rgba(235, 248, 225, 0.1), rgba(235, 248, 225, 0.1), rgba(255, 255, 255, 0.1))'};
`;
const upperMyTurn = (props: { turn: Player }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 10px;
  top: ${props.turn === 'player-1' ? '55%' : '45%'};
  right: 100px;
`;
const myTurn = css`
  font-size: ${GlobalStyle.size.fontSize5};
  font-weight: 600;
`;
