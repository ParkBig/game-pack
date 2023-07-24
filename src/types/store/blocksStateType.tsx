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
export type Value = number | null;
export type GameMode = 'Beginner' | 'Intermediate' | 'Expert' | 'Custom';
export type Options = 'New' | GameMode;

export interface SetRowColPayloadAction {
  rows: number;
  cols: number;
  gameMode: GameMode;
  numOfMines: number;
}
export interface SetBlocksPayloadAction {
  setsBlockInfoMatrix: BlockInfoRow[];
  isInitial: boolean;
}
export interface SetBlockIsClickedPayloadAction {
  row: number;
  col: number;
}
export interface SetBlockIsFlaggedPayloadAction {
  row: number;
  col: number;
}
