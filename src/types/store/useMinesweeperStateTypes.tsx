export interface UseMinesweeperState {
  isOpenMinesweeper: boolean;
  rows: number;
  cols: number;
  numOfMines: number;
  numOfFlagged: number;
  gameMode: GameMode;
  isGameProgress: boolean;
  timer: number;
  isWin: boolean;
  isBlockClickPrevent: boolean;
  blockInfoMatrix: BlockInfoRow[];
  clickedCount: number;
  toggleIsOpenMinesweeper: () => void;
  initializeBlocks: () => void;
  setRowsCols: (setRowsColPayload: SetRowColPayload) => void;
  setIsGameProgress: (setIsGameProgressPayload: boolean) => void;
  setBlocks: (setBlocksPayload: SetBlocksPayload) => void;
  setBlockIsClicked: (setBlockIsClickedPayload: SetBlockIsClickedPayload) => void;
  setIsBlockClickPrevent: (setIsBlockClickPreventPayload: boolean) => void;
  setBlockIsFlagged: (setBlockIsFlaggedPayload: SetBlockIsFlaggedPayload) => void;
  setTimer: () => void;
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

export interface SetRowColPayload {
  rows: number;
  cols: number;
  gameMode: GameMode;
  numOfMines: number;
}
export interface SetBlocksPayload {
  setsBlockInfoMatrix: BlockInfoRow[];
  isInitial: boolean;
  flaggedCount?: number;
  clickedCount?: number;
}
export interface SetBlockIsClickedPayload {
  row: number;
  col: number;
}
export interface SetBlockIsFlaggedPayload {
  row: number;
  col: number;
}
