import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';

import alertImg from 'assets/chess/background/alertImg.png';

export default function GameAlert() {
  const { gameState } = useChessState();

  return <div css={modal}>{gameState.gameAlert.alertDetail}</div>;
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
