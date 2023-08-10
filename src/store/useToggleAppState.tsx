import { UseToggleApp } from 'types/store/useToggleAppTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useToggleAppState = create(
  immer<UseToggleApp>(set => ({
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

export default useToggleAppState;
