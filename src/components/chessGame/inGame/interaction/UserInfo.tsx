import styled from '@emotion/styled';
import GlobalStyle from 'const/globalStyle';
import useChessState from 'store/useChessState';

interface Props {
  me: boolean;
}

export default function UserInfo(props: Props) {
  const { userState } = useChessState();
  const opponent = userState.myInfo.gameInfo.playerNum === 'player-1' ? 'player-2' : 'player-1';

  if (props.me) {
    return (
      <>
        {userState.myInfo.loginInfo.isLogin ? (
          <Wrap>
            <Who isMe={true}>Me</Who>
            <Info>
              <Id>{userState.myInfo.loginInfo.nickname}</Id>
              <Rate>
                <Span isWin={true}>win: {userState.myInfo.loginInfo.win}</Span>
                <Span isWin={false}>lose: {userState.myInfo.loginInfo.lose}</Span>
              </Rate>
            </Info>
          </Wrap>
        ) : (
          <Wrap>
            <Who isMe={true}>Me</Who>
            <Info>
              <Id>{userState.myInfo.gameInfo.playerNum}</Id>
            </Info>
          </Wrap>
        )}
      </>
    );
  } else {
    return (
      <>
        {userState.allLoginInfo[opponent]?.isLogin ? (
          <Wrap>
            <Who isMe={false}>Oppo</Who>
            <Info>
              <Id>{userState.allLoginInfo[opponent]?.nickname}</Id>
              <Rate>
                <Span isWin={true}>win: {userState.allLoginInfo[opponent]?.win}</Span>
                <Span isWin={false}>lose: {userState.allLoginInfo[opponent]?.lose}</Span>
              </Rate>
            </Info>
          </Wrap>
        ) : (
          <Wrap>
            <Who isMe={false}>Oppo</Who>
            <Info>
              <Id>{opponent}</Id>
            </Info>
          </Wrap>
        )}
      </>
    );
  }
}

const Wrap = styled.div`
  width: 100%;
  height: 8.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${GlobalStyle.colors.chessGray};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
  background-color: ${GlobalStyle.colors.chessWhite};
`;
const Who = styled.div<{ isMe: boolean }>`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${prop => (prop.isMe ? 'blue' : 'red')};
  font-weight: 700;
`;
const Info = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Id = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${GlobalStyle.size.fontSize4};
`;
const Rate = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${GlobalStyle.size.fontSize3};
  gap: 10px;
`;
const Span = styled.span<{ isWin: boolean }>`
  color: ${prop => (prop.isWin ? 'blue' : 'red')};
`;
