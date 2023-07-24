import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { initializeBlocks } from 'store/modules/blocksState';

export default function GameInfo() {
  const dispatch = useDispatch();
  const { numOfMines, numOfFlagged, isBlockClickPrevent } = useSelector((state: RootState) => state.blocksState);

  const initialMinesHandler = () => {
    dispatch(initializeBlocks());
  };

  return (
    <div css={wrap}>
      <div css={num}>{numOfMines - numOfFlagged}</div>
      <div css={upperBtn} onClick={initialMinesHandler}>
        <button css={btn}>{isBlockClickPrevent ? '🥺' : '😀'}</button>
      </div>
      <div css={num}>진행시간</div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 4px inset;
  text-align: center;
`;
const num = css`
  width: 60px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px inset gray;
  background-color: black;
  color: red;
  font-family: 'Wallpoet', cursive;
`;
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
  font-size: 30px;

  :active {
    border: 3px inset;
  }
`;
