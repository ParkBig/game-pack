import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import useMinesweeperState from 'store/useMinesweeperState';

export default function ResetBtn() {
  const { isWin, isBlockClickPrevent, initializeBlocks } = useMinesweeperState();

  const initialMinesHandler = () => {
    initializeBlocks();
  };

  return (
    <div css={upperBtn} onClick={initialMinesHandler}>
      <button css={btn}>{isBlockClickPrevent ? (isWin ? '😀' : '🥺') : '😀'}</button>
    </div>
  );
}

const upperBtn = css`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
const btn = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px outset;
  padding: 0;
  background-color: ${GlobalStyle.colors.gray};
  font-size: 25px;

  :active {
    border: 3px inset;
  }
`;
