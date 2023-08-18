import { css } from '@emotion/react';

import alertImg from 'assets/chess/background/alertImg.png';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';

export default function CatchAlert() {
  const { boardState } = useChessState();

  return (
    <>
      <div css={modal}>{`${boardState.gotcha.caughtChessColor}의 ${boardState.gotcha.chessmenType}이 잡혔습니다!`}</div>
    </>
  );
}

const modal = css`
  border: 5px solid gold;
  border-radius: 10px;
  padding: 40px 80px 40px 80px;
  background-image: url(${alertImg});
  background-size: cover;
  color: gold;
  font-size: ${GlobalStyle.size.fontSize5};
  font-weight: 600;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 400;
`;
