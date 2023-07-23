import { css } from '@emotion/react';
import GameInfo from './GameInfo';
import GlobalStyle from 'const/globalStyle';
import GameZone from './GameZone';

export default function Game() {
  return (
    <div css={wrap}>
      <div css={border}>
        <GameInfo />
        <GameZone />
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
