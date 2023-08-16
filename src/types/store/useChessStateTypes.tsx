export interface UseChessState {
  isOpenChessGame: boolean;
  boardState: BoardState;
  gameState: GameState;
  toggleIsOpenChessGame: () => void;
  setBoard: (boardSetting: Board[]) => void;
  setIsBlockPick: (pickedIndex: number) => void;
  setCanMoveArea: (siftAndCanMove: number[]) => void;
  chessMove: (afterIndex: number) => void;
  setGotCha: () => void;
  setIsStart: (force?: Force) => void;
  setNowTurn: (force?: Player) => void;
  setGameAlert: (detail: string) => void;
}

interface BoardState {
  board: Board[];
  isBlockPick: IsBlockPick;
  canMoveArea: number[];
  gotcha: Gotcha;
}
interface GameState {
  isStart: boolean;
  nowTurn: Player;
  gameAlert: GameAlert;
}
export interface Board {
  row: number;
  col: Column | string;
  color: boolean;
  chessmenType: Chessmen;
  isMyChessmen: boolean | null;
  chessColor: ChessColor;
}
type IsBlockPick = {
  isPick: boolean;
  pickedIndex: number | null;
};
type Gotcha = {
  got: boolean;
  caughtChessColor: 'black' | 'white' | null;
  chessmenType: Chessmen;
};
type GameAlert = {
  onAlert: boolean;
  alertDetail: string;
};
type Force = 'true' | 'false';

export type Player = 'player-1' | 'player-2';
export type ChessColor = 'black' | 'white' | null;
export type Chessmen = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn' | null;
export type Column = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
