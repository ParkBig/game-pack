export interface UseChessState {
  isOpenChessGame: boolean;
  matchRoomName: null | string;
  boardState: BoardState;
  gameState: GameState;
  userState: UserState;
  toggleIsOpenChessGame: () => void;
  setMatchRoomName: (roomName?: string) => void;
  setBoard: (boardSetting: Board[]) => void;
  setIsBlockPick: (pickedIndex: number) => void;
  setCanMoveArea: (siftAndCanMove: number[]) => void;
  setChessMove: (afterIndex: number) => void;
  setGotCha: () => void;
  setIsStart: (force?: Force) => void;
  setNowTurn: (force?: Player) => void;
  setGameAlert: (detail: string) => void;
  setMyPlayerNum: (player: Player) => void;
  setMyReady: (force?: Force) => void;
  setMyIsInGame: (boolean: boolean) => void;
  setMyLogInInfo: (nickname: string, password: string) => void;
  setMyOdds: (isWin: boolean) => void;
  setAllLoginInfo: (opponentInfo: Players) => void;
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
interface UserState {
  myInfo: MyInfo;
  allLoginInfo: Players;
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
type LoginInfo = {
  anyErr: boolean;
  isLogin: boolean;
  nickname: string;
  win: number;
  lose: number;
};
type GameInfo = {
  playerNum: Player | '';
  imReady: boolean;
  isInGame: boolean;
};
type MyInfo = {
  loginInfo: LoginInfo;
  gameInfo: GameInfo;
};
type LoginState = {
  anyErr: boolean;
  isLogin: boolean;
  nickname: string;
  win: number;
  lose: number;
};
type Players = {
  'player-1': LoginState | null;
  'player-2': LoginState | null;
};
type Force = 'true' | 'false';

export type Player = 'player-1' | 'player-2';
export type ChessColor = 'black' | 'white' | null;
export type Chessmen = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn' | null;
export type Column = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

export interface BoardsBlock {
  boardBlock: Board;
  index: number;
}
