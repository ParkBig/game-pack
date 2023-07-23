import { SetRowColPayloadAction } from 'types/store/mineStateType';

export type SettingType = 'Beginner' | 'Intermediate' | 'Expert';

export const sortingNumOfMines = (settingType: SettingType): SetRowColPayloadAction => {
  if (settingType === 'Beginner') {
    return { row: 8, col: 8 };
  }
  if (settingType === 'Intermediate') {
    return { row: 16, col: 16 };
  }
  if (settingType === 'Expert') {
    return { row: 32, col: 16 };
  }
  return { row: 8, col: 8 };
};
