import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { initializeBlocks } from 'store/modules/blocksState';

export default function ResetBtn() {
  const dispatch = useDispatch();
  const { isBlockClickPrevent } = useSelector((state: RootState) => state.blocksState);

  const initialMinesHandler = () => {
    dispatch(initializeBlocks());
  };

  return (
    <div css={upperBtn} onClick={initialMinesHandler}>
      <button css={btn}>{isBlockClickPrevent ? '🥺' : '😀'}</button>
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
