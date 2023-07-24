import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from 'types/store/modalsStateType';

const initialState: InitialState = {
  isCustomSettingOpen: false,
};

const modalsState = createSlice({
  name: 'modalsState',
  initialState: initialState,
  reducers: {
    toggleCustomSettingModal: state => {
      state.isCustomSettingOpen = !state.isCustomSettingOpen;
    },
  },
});

export const { toggleCustomSettingModal } = modalsState.actions;
export default modalsState;
