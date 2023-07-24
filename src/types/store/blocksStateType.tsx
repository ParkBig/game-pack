export interface BlocksInitialState {
  rows: number;
  cols: number;
  numOfMines: number;
  gameMode: GameMode;
  isGameProgress: boolean;
  isBlockClickPrevent: boolean;
  blockInfoMatrix: BlockInfoRow[];
}
export type BlockInfoRow = BlockInfo[];
export interface BlockInfo {
  isMine: boolean;
  isClicked: boolean;
  value: Value;
}
export type Value = 'mine' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null;
export type GameMode = 'Beginner' | 'Intermediate' | 'Expert' | 'Custom';
export type Options = 'New' | GameMode;

export interface SetRowColPayloadAction {
  rows: number;
  cols: number;
  gameMode: GameMode;
  numOfMines: number;
}
export interface SetBlockIsClickedPayloadAction {
  row: number;
  col: number;
}
