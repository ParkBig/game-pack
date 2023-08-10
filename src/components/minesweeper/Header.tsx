import { css } from '@emotion/react';
import CloseSVG from 'assets/svg/Close';
import MineSVG from 'assets/svg/Mine';
import GlobalStyle from 'const/globalStyle';
import useMinesweeperState from 'store/useMinesweeperState';
import useToggleAppState from 'store/useToggleAppState';

export default function Header() {
  const { toggleIsOpenMinesweeper, isCustomSettingOpen, toggleCustomSettingModal } = useMinesweeperState();
  const { setOpenGame } = useToggleAppState();

  const closeMinesweeperHandler = () => {
    if (isCustomSettingOpen) {
      toggleCustomSettingModal();
    }
    toggleIsOpenMinesweeper();
    setOpenGame('close', 'Minesweeper');
  };

  return (
    <div css={wrap} className="draggable">
      <div css={title}>
        <MineSVG fill={GlobalStyle.colors.blue} width="20" height="20" />
        Minesweeper
      </div>
      <div css={close} onClick={closeMinesweeperHandler}>
        <CloseSVG />
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5px;
`;
const title = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const close = css`
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
