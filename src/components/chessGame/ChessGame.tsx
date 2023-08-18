import { css } from '@emotion/react';
import ChessHeader from './ChessHeader';
import FindMatchPage from './findMatchPage/FindMatchPage';
import useChessState from 'store/useChessState';
import InGame from './inGame/InGame';

export default function ChessGame() {
  const { matchRoomName } = useChessState();

  const render = matchRoomName ? <InGame /> : <FindMatchPage />;

  return (
    <div css={wrap}>
      <main css={main} className="ChessGame">
        <ChessHeader />
        {render}
      </main>
    </div>
  );
}

const wrap = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const main = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
