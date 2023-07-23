import normalize from 'emotion-normalize';
import { Global, css } from '@emotion/react';
import Minesweeper from 'components/minesweeper/Minesweeper';
import GlobalStyle from 'const/globalStyle';

export default function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          body {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(${GlobalStyle.backgroundImageUrl});
            background-size: cover;
            background-position: center;
          }
        `}
      />
      <Minesweeper />
    </>
  );
}
