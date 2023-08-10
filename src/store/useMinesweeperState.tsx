import { UseMinesweeperState } from 'types/store/useMinesweeperStateTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useMinesweeperState = create(
  immer<UseMinesweeperState>(set => ({
    isOpenMinesweeper: false,
    rows: 8,
    cols: 8,
    numOfMines: 10,
    numOfFlagged: 0,
    timer: 0,
    gameMode: 'Beginner',
    isWin: false,
    isGameProgress: false,
    isBlockClickPrevent: false,
    blockInfoMatrix: Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
    ),
    clickedCount: 0,
    isCustomSettingOpen: false,
    toggleIsOpenMinesweeper: () =>
      set(state => {
        if (state.isOpenMinesweeper) {
          state.rows = 8;
          state.cols = 8;
          state.numOfMines = 10;
          state.numOfFlagged = 0;
          state.gameMode = 'Beginner';
          state.timer = 0;
          state.isWin = false;
          state.isGameProgress = false;
          state.isBlockClickPrevent = false;
          state.blockInfoMatrix = Array.from({ length: 8 }, () =>
            Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
          );
          state.clickedCount = 0;
        }
        state.isOpenMinesweeper = !state.isOpenMinesweeper;
      }),
    initializeBlocks: () =>
      set(state => {
        state.isGameProgress = false;
        state.isBlockClickPrevent = false;
        state.numOfFlagged = 0;
        state.timer = 0;
        state.isWin = false;
        state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
        );
        state.clickedCount = 0;
      }),
    setRowsCols: setRowsCol =>
      set(state => {
        state.rows = setRowsCol.rows;
        state.cols = setRowsCol.cols;
        state.numOfMines = setRowsCol.numOfMines;
        state.numOfFlagged = 0;
        state.gameMode = setRowsCol.gameMode;
        state.isGameProgress = false;
        state.isBlockClickPrevent = false;
        state.timer = 0;
        state.isWin = false;
        state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
        );
        state.clickedCount = 0;
      }),
    setIsGameProgress: setIsGameProgress =>
      set(state => {
        state.isGameProgress = setIsGameProgress;
      }),
    setBlocks: setBlocks =>
      set(state => {
        if (setBlocks.isInitial) {
          state.numOfFlagged = 0;
        }
        if (setBlocks.flaggedCount) {
          state.numOfFlagged -= setBlocks.flaggedCount;
        }
        if (setBlocks.clickedCount) {
          state.clickedCount += setBlocks.clickedCount;
        }
        state.blockInfoMatrix = setBlocks.setsBlockInfoMatrix;
        if (state.clickedCount + state.numOfMines === state.rows * state.cols) {
          state.isGameProgress = false;
          state.isBlockClickPrevent = true;
          state.isWin = true;
        }
      }),
    setBlockIsClicked: setBlockIsClicked =>
      set(state => {
        if (!state.isGameProgress) {
          return;
        }
        state.blockInfoMatrix = state.blockInfoMatrix.map((blockInfoRow, rowIndex) =>
          blockInfoRow.map((blockInfo, colIndex) => {
            if (rowIndex === setBlockIsClicked.row && colIndex === setBlockIsClicked.col) {
              state.clickedCount++;
              return { ...blockInfo, isClicked: true };
            } else {
              return blockInfo;
            }
          })
        );
        if (state.clickedCount + state.numOfMines === state.rows * state.cols) {
          state.isGameProgress = false;
          state.isBlockClickPrevent = true;
          state.isWin = true;
        }
      }),
    setIsBlockClickPrevent: setIsBlockClickPrevent =>
      set(state => {
        state.isBlockClickPrevent = setIsBlockClickPrevent;
      }),
    setBlockIsFlagged: setBlockIsFlagged =>
      set(state => {
        state.blockInfoMatrix = state.blockInfoMatrix.map((blockInfoRow, rowIndex) =>
          blockInfoRow.map((blockInfo, colIndex) => {
            if (rowIndex === setBlockIsFlagged.row && colIndex === setBlockIsFlagged.col) {
              blockInfo.isFlagged === false ? state.numOfFlagged++ : state.numOfFlagged--;
              return { ...blockInfo, isFlagged: !blockInfo.isFlagged };
            } else {
              return blockInfo;
            }
          })
        );
      }),
    setTimer: () =>
      set(state => {
        state.timer++;
      }),
    toggleCustomSettingModal: () =>
      set(state => {
        state.isCustomSettingOpen = !state.isCustomSettingOpen;
      }),
  }))
);

export default useMinesweeperState;
