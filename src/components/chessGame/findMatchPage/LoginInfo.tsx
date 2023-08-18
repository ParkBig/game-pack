import { css } from '@emotion/react';
import styled from '@emotion/styled';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';

export default function LoginInfo() {
  const { userState } = useChessState();

  return (
    <div css={wrap}>
      <div css={id}>{userState.myInfo.loginInfo.nickname}</div>
      <div css={rate}>
        <Span isWin={true}>win: {userState.myInfo.loginInfo.win}</Span>
        <Span isWin={false}>lose: {userState.myInfo.loginInfo.lose}</Span>
      </div>
    </div>
  );
}

const wrap = css`
  width: 97%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 2px solid ${GlobalStyle.colors.chessGray};
  border-radius: 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
  background-color: ${GlobalStyle.colors.chessWhite};
`;
const id = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${GlobalStyle.size.fontSize6};
`;
const rate = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${GlobalStyle.size.fontSize4};
  gap: 10px;
`;
const Span = styled.span<{ isWin: boolean }>`
  color: ${prop => (prop.isWin ? 'blue' : 'red')};
`;
