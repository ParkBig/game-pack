import { configureStore } from '@reduxjs/toolkit';
import minesState from './modules/minesState';

const store = configureStore({
  reducer: {
    minesState: minesState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
