import { UseModalState } from 'types/store/useModalStateTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useModalState = create(
  immer<UseModalState>(set => ({
    isCustomSettingOpen: false,
    toggleCustomSettingModal: () =>
      set(state => {
        state.isCustomSettingOpen = !state.isCustomSettingOpen;
      }),
  }))
);

export default useModalState;
