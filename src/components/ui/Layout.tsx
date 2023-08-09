import { Global, css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import normalize from 'emotion-normalize';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Wallpoet&display=swap');
          ${normalize}
          body {
            background-image: url(${GlobalStyle.backgroundImageUrl});
            background-size: cover;
            background-position: center;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
              'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      {props.children}
    </>
  );
}
