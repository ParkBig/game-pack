import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  BlocksInitialState,
  SetBlockIsClickedPayloadAction,
  SetBlockIsFlaggedPayloadAction,
  SetBlocksPayloadAction,
  SetRowColPayloadAction,
} from 'types/store/blocksStateType';

const initialState: BlocksInitialState = {
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
};

const blocksState = createSlice({
  name: 'blocksState',
  initialState: initialState,
  reducers: {
    initializeBlocks: state => {
      state.isGameProgress = false;
      state.isBlockClickPrevent = false;
      state.numOfFlagged = 0;
      state.timer = 0;
      state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
        Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
      );
    },
    setRowsCols: (state, action: PayloadAction<SetRowColPayloadAction>) => {
      state.rows = action.payload.rows;
      state.cols = action.payload.cols;
      state.numOfMines = action.payload.numOfMines;
      state.numOfFlagged = 0;
      state.gameMode = action.payload.gameMode;
      state.isGameProgress = false;
      state.isBlockClickPrevent = false;
      state.timer = 0;
      state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
        Array.from({ length: state.cols }, () => ({ isMine: false, isClicked: false, value: null, isFlagged: false }))
      );
    },
    setIsGameProgress: (state, action: PayloadAction<boolean>) => {
      state.isGameProgress = action.payload;
    },
    setBlocks: (state, action: PayloadAction<SetBlocksPayloadAction>) => {
      if (action.payload.isInitial) {
        state.numOfFlagged = 0;
      }
      state.blockInfoMatrix = action.payload.setsBlockInfoMatrix;
    },
    setBlockIsClicked: (state, action: PayloadAction<SetBlockIsClickedPayloadAction>) => {
      if (!state.isGameProgress) {
        return;
      }
      state.blockInfoMatrix = state.blockInfoMatrix.map((blockInfoRow, rowIndex) =>
        blockInfoRow.map((blockInfo, colIndex) => {
          if (rowIndex === action.payload.row && colIndex === action.payload.col) {
            return { ...blockInfo, isClicked: true };
          } else {
            return blockInfo;
          }
        })
      );
    },
    setIsBlockClickPrevent: (state, action: PayloadAction<boolean>) => {
      state.isBlockClickPrevent = action.payload;
    },
    setBlockIsFlagged: (state, action: PayloadAction<SetBlockIsFlaggedPayloadAction>) => {
      state.blockInfoMatrix = state.blockInfoMatrix.map((blockInfoRow, rowIndex) =>
        blockInfoRow.map((blockInfo, colIndex) => {
          if (rowIndex === action.payload.row && colIndex === action.payload.col) {
            blockInfo.isFlagged === false ? state.numOfFlagged++ : state.numOfFlagged--;
            return { ...blockInfo, isFlagged: !blockInfo.isFlagged };
          } else {
            return blockInfo;
          }
        })
      );
    },
    setTimer: state => {
      state.timer++;
    },
  },
});

export const {
  initializeBlocks,
  setRowsCols,
  setIsGameProgress,
  setBlocks,
  setBlockIsClicked,
  setIsBlockClickPrevent,
  setBlockIsFlagged,
  setTimer,
} = blocksState.actions;
export default blocksState;
