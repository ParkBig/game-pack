import { SetRowColPayload } from 'types/store/UseBlocksState';

export type SettingType = 'Beginner' | 'Intermediate' | 'Expert';

export const sortingGameMode = (settingType: SettingType): SetRowColPayload => {
  if (settingType === 'Beginner') {
    return { rows: 8, cols: 8, gameMode: 'Beginner', numOfMines: 10 };
  }
  if (settingType === 'Intermediate') {
    return { rows: 16, cols: 16, gameMode: 'Intermediate', numOfMines: 40 };
  }
  if (settingType === 'Expert') {
    return { rows: 32, cols: 16, gameMode: 'Expert', numOfMines: 100 };
  }
  return { rows: 8, cols: 8, gameMode: 'Beginner', numOfMines: 10 };
};
