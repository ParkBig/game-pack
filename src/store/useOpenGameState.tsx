import { UseOpenGameStateTypes } from 'types/store/useOpenGameStateTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useOpenGameState = create(
  immer<UseOpenGameStateTypes>(set => ({
    openGame: [],
    setOpenGame: (toggleState, target) =>
      set(state => {
        if (toggleState === 'open') {
          state.openGame.push(target);
        }
        if (toggleState === 'close') {
          state.openGame = state.openGame.filter(game => game !== target);
        }
      }),
  }))
);

export default useOpenGameState;
