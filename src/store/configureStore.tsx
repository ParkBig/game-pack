import { configureStore } from '@reduxjs/toolkit';
import blocksState from './modules/blocksState';
import modalsState from './modules/modalsState';

const store = configureStore({
  reducer: {
    blocksState: blocksState.reducer,
    modalsState: modalsState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
