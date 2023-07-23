import { configureStore } from '@reduxjs/toolkit';
import blocksState from './modules/blocksState';

const store = configureStore({
  reducer: {
    blocksState: blocksState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
