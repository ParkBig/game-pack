import { css } from '@emotion/react';
import GameInfoBar from './GameInfoBar';
import GlobalStyle from 'const/globalStyle';
import GameButtons from './GameButtons';

export default function Game() {
  return (
    <div css={wrap} className="non-draggable">
      <div css={border}>
        <GameInfoBar />
        <GameButtons />
      </div>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px outset;
  background-color: ${GlobalStyle.colors.gray};
`;
const border = css`
  border: 5px solid ${GlobalStyle.colors.gray};
`;
