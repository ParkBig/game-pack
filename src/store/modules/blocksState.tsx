import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  BlockInfoRow,
  BlocksInitialState,
  SetBlockIsClickedPayloadAction,
  SetRowColPayloadAction,
} from 'types/store/blocksStateType';

const initialState: BlocksInitialState = {
  rows: 8,
  cols: 8,
  numOfMines: 10,
  gameMode: 'Beginner',
  isGameProgress: false,
  isBlockClickPrevent: false,
  blockInfoMatrix: Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null }))
  ),
};

const blocksState = createSlice({
  name: 'blocksState',
  initialState: initialState,
  reducers: {
    initializeBlocks: state => {
      state.isGameProgress = false;
      state.isBlockClickPrevent = false;
      state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
        Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null }))
      );
    },
    setRowsCols: (state, action: PayloadAction<SetRowColPayloadAction>) => {
      state.rows = action.payload.rows;
      state.cols = action.payload.cols;
      state.numOfMines = action.payload.numOfMines;
      state.gameMode = action.payload.gameMode;
      state.isGameProgress = false;
      state.isBlockClickPrevent = false;
      state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
        Array.from({ length: 8 }, () => ({ isMine: false, isClicked: false, value: null }))
      );
    },
    setIsGameProgress: (state, action: PayloadAction<boolean>) => {
      state.isGameProgress = action.payload;
    },
    setBlocks: (state, action: PayloadAction<BlockInfoRow[]>) => {
      state.blockInfoMatrix = action.payload;
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
  },
});

export const {
  initializeBlocks,
  setRowsCols,
  setIsGameProgress,
  setBlocks,
  setBlockIsClicked,
  setIsBlockClickPrevent,
} = blocksState.actions;
export default blocksState;
