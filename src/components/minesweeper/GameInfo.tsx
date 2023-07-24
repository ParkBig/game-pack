import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { useDispatch } from 'react-redux';
import { initializeBlocks } from 'store/modules/blocksState';

export default function GameInfo() {
  const dispatch = useDispatch();

  const initialMinesHandler = () => {
    dispatch(initializeBlocks());
  };

  return (
    <div css={wrap}>
      <span>마인개수</span>
      <div css={upperBtn} onClick={initialMinesHandler}>
        <button css={btn}>😀</button>
      </div>
      <span>진행시간</span>
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
`;
const upperBtn = css`
  height: 40px;
  width: 40px;
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
