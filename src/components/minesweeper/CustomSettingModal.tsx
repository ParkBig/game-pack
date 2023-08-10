import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import ReactDOM from 'react-dom';
import CustomInput from './CustomInput';
import { useRef } from 'react';
import useMinesweeperState from 'store/useMinesweeperState';
import { SetRowColPayload } from 'types/store/useMinesweeperStateTypes';

export default function CustomSettingModal() {
  const { setRowsCols, toggleCustomSettingModal } = useMinesweeperState();
  const rowsInputRef = useRef<HTMLInputElement>(null);
  const colsInputRef = useRef<HTMLInputElement>(null);
  const minesInputRef = useRef<HTMLInputElement>(null);

  const offModalHandler = () => {
    toggleCustomSettingModal();
  };

  const confirmSettingHandler = () => {
    if (!rowsInputRef.current?.value || !colsInputRef.current?.value || !minesInputRef.current?.value) {
      return alert('값을 입력해주세요.');
    }

    const rows = Number(rowsInputRef.current.value);
    const cols = Number(colsInputRef.current.value);
    const numOfMines = Number(minesInputRef.current.value);

    if (rows < 7) {
      return alert('조건을 만족해주세요.');
    }
    if (rows > 31) {
      return alert('조건을 만족해주세요.');
    }
    if (cols < 7) {
      return alert('조건을 만족해주세요.');
    }
    if (cols > 31) {
      return alert('조건을 만족해주세요.');
    }
    if (numOfMines >= rows * cols) {
      return alert('지뢰의 개수는 블럭의 개수보다 크거나 같을수 없습니다.');
    }

    const payload: SetRowColPayload = {
      rows,
      cols,
      numOfMines,
      gameMode: 'Custom',
    };
    setRowsCols(payload);
    toggleCustomSettingModal();
  };

  return ReactDOM.createPortal(
    <div css={wrap}>
      <div css={title}>Custom Setting</div>
      <div css={setting}>
        <CustomInput ref={rowsInputRef} type="rows" placeholder="6<rows<31" />
        <CustomInput ref={colsInputRef} type="cols" placeholder="6<cols<31" />
        <CustomInput ref={minesInputRef} type="mines" placeholder="mine<blocks" />
      </div>
      <div css={btns}>
        <div css={btn} onClick={offModalHandler}>
          <span>취소</span>
        </div>
        <div css={btn} onClick={confirmSettingHandler}>
          <span>확인</span>
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalStyle.colors.gray};
  padding: 10px 20px;
  border: 3px double gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
`;
const title = css`
  font-size: 20px;
`;
const setting = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const btns = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const btn = css`
  border: 3px outset gray;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
`;
