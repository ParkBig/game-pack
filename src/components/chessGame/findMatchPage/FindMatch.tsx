import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import Login from './Login';
import FindMatchForm from './FindMatchForm';

export default function FindMatch() {
  return (
    <div css={wrap}>
      <FindMatchForm />
      <Login />
    </div>
  );
}

const wrap = css`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${GlobalStyle.colors.chessGreen};
  border-radius: 15px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.6);
`;
