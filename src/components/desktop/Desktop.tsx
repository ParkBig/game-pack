import { css } from '@emotion/react';
import Minesweeper from 'components/minesweeper/Minesweeper';
import GlobalStyle from 'const/globalStyle';
import GameIcons from './GameIcons';
import UnderBar from './UnderBar';

export default function Desktop() {
  return (
    <div css={wrap}>
      <GameIcons />
      <div css={content} className="draggable-area">
        <Minesweeper />
      </div>
      <UnderBar />
    </div>
  );
}

const wrap = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${GlobalStyle.backgroundImageUrl});
  background-size: cover;
  background-position: center;
`;
const content = css`
  height: 100%;
  width: 100%;
`;
