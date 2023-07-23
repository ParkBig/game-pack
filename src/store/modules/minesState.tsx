import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MinesInitialState, SetRowColPayloadAction } from 'types/store/mineStateType';

const initialState: MinesInitialState = {
  row: 8,
  col: 8,
  isGameEnd: false,
  mines: [],
};

const minesState = createSlice({
  name: 'minesState',
  initialState: initialState,
  reducers: {
    initializeMines: state => {
      state.isGameEnd = false;
      state.mines = [];
    },
    setRowCol: (state, action: PayloadAction<SetRowColPayloadAction>) => {
      if (!action.payload.row && !action.payload.col) {
        return;
      } else {
        state.row = action.payload.row ? action.payload.row : state.row;
        state.col = action.payload.col ? action.payload.col : state.col;
        state.isGameEnd = false;
        state.mines = [];
      }
    },
    setIsGameEnd: state => {
      state.isGameEnd = !state.isGameEnd;
    },
    setMines: () => {},
  },
});

export const { initializeMines, setRowCol, setIsGameEnd, setMines } = minesState.actions;
export default minesState;
