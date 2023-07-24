export interface BlocksInitialState {
  rows: number;
  cols: number;
  numOfMines: number;
  numOfFlagged: number;
  gameMode: GameMode;
  isGameProgress: boolean;
  timer: number;
  isBlockClickPrevent: boolean;
  blockInfoMatrix: BlockInfoRow[];
}
export type BlockInfoRow = BlockInfo[];
export interface BlockInfo {
  isMine: boolean;
  isFlagged: boolean;
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
export interface SetBlockIsFlaggedPayloadAction {
  row: number;
  col: number;
}
