import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BlockInfoRow, BlocksInitialState, SetRowColPayloadAction } from 'types/store/blocksStateType';

const initialState: BlocksInitialState = {
  rows: 8,
  cols: 8,
  numOfMines: 10,
  gameMode: 'Beginner',
  isGameProgress: false,
  blockInfoMatrix: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ({ isMine: false }))),
};

const blocksState = createSlice({
  name: 'minesState',
  initialState: initialState,
  reducers: {
    initializeBlocks: state => {
      state.isGameProgress = false;
      state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
        Array.from({ length: state.cols }, () => ({ isMine: false }))
      );
    },
    setRowsCols: (state, action: PayloadAction<SetRowColPayloadAction>) => {
      if (!action.payload.rows && !action.payload.cols && action.payload.gameMode === 'Custom') {
        // 나중에 조건으로 아예 못 입력하게 막아야함.
        state.gameMode = action.payload.gameMode;
        return;
      } else {
        state.rows = action.payload.rows ? action.payload.rows : state.rows;
        state.cols = action.payload.cols ? action.payload.cols : state.cols;
        state.numOfMines = action.payload.numOfMines;
        state.gameMode = action.payload.gameMode;
        state.isGameProgress = false;
        state.blockInfoMatrix = Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => ({ isMine: false }))
        );
      }
    },
    setIsGameProgress: state => {
      state.isGameProgress = !state.isGameProgress;
    },
    setBlocks: (state, action: PayloadAction<BlockInfoRow[]>) => {
      state.blockInfoMatrix = action.payload;
    },
  },
});

export const { initializeBlocks, setRowsCols, setIsGameProgress, setBlocks } = blocksState.actions;
export default blocksState;
