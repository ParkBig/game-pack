import { UseBlocksState } from 'types/store/UseBlocksState';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useBlocksState = create(
  immer<UseBlocksState>(set => ({
    rows: 8,
    cols: 8,
    numOfMines: 10,
    numOfFlagged: 0,
    gameMode: 'Beginner',
    isGameProgress: false,
    timer: 0,
    isBlockClickPrevent: false,
    blockInfoMatrix: Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
    ),
    initializeBlocks: () =>
      set(state => {
        state.isGameProgress = false;
        state.isBlockClickPrevent = false;
        state.numOfFlagged = 0;
        state.timer = 0;
        state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
        );
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
        state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
        );
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
        state.blockInfoMatrix = setBlocks.setsBlockInfoMatrix;
      }),
    setBlockIsClicked: setBlockIsClicked =>
      set(state => {
        if (!state.isGameProgress) {
          return;
        }
        state.blockInfoMatrix = state.blockInfoMatrix.map((blockInfoRow, rowIndex) =>
          blockInfoRow.map((blockInfo, colIndex) => {
            if (rowIndex === setBlockIsClicked.row && colIndex === setBlockIsClicked.col) {
              return { ...blockInfo, isClicked: true };
            } else {
              return blockInfo;
            }
          })
        );
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
              blockInfo.isFlagged === false ? state.numOfMines++ : state.numOfFlagged--;
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
  }))
);

export default useBlocksState;
