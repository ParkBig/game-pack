import { Board, UseChessState } from 'types/store/useChessStateTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useChessState = create(
  immer<UseChessState>(set => ({
    isOpenChessGame: false,
    boardState: {
      board: [],
      isBlockPick: { isPick: false, pickedIndex: null },
      canMoveArea: [],
      gotcha: { got: false, caughtChessColor: null, chessmenType: null },
    },
    gameState: {
      isStart: false,
      nowTurn: 'player-1',
      gameAlert: { onAlert: false, alertDetail: '' },
    },
    toggleIsOpenChessGame: () =>
      set(state => {
        state.isOpenChessGame = !state.isOpenChessGame;
      }),
    setBoard: (boardSetting: Board[]) =>
      set(state => {
        state.boardState.board = boardSetting;
      }),
    setIsBlockPick: pickedIndex =>
      set(state => {
        if (state.boardState.isBlockPick.pickedIndex === pickedIndex) {
          state.boardState.isBlockPick.isPick = !state.boardState.isBlockPick.isPick;
          state.boardState.isBlockPick.pickedIndex = null;
        } else {
          state.boardState.isBlockPick.isPick = true;
          state.boardState.isBlockPick.pickedIndex = pickedIndex;
        }
      }),
    setCanMoveArea: siftAndCanMove =>
      set(state => {
        state.boardState.canMoveArea = siftAndCanMove;
      }),
    setGotCha: () =>
      set(state => {
        state.boardState.gotcha = {
          got: false,
          caughtChessColor: null,
          chessmenType: null,
        };
      }),
    chessMove: afterIndex =>
      set(state => {
        if (state.boardState.isBlockPick.isPick && state.boardState.isBlockPick.pickedIndex) {
          const afterBlock = state.boardState.board[afterIndex];
          const beforeBlock = state.boardState.board[state.boardState.isBlockPick.pickedIndex];

          if (afterBlock.chessmenType) {
            state.boardState.gotcha.got = true;
            state.boardState.gotcha.caughtChessColor = afterBlock.chessColor;
            state.boardState.gotcha.chessmenType = afterBlock.chessmenType;
          }

          afterBlock.isMyChessmen = beforeBlock.isMyChessmen;
          afterBlock.chessColor = beforeBlock.chessColor;
          afterBlock.chessmenType = beforeBlock.chessmenType;

          beforeBlock.isMyChessmen = null;
          beforeBlock.chessColor = null;
          beforeBlock.chessmenType = null;

          state.boardState.board[afterIndex] = afterBlock;
          state.boardState.board[state.boardState.isBlockPick.pickedIndex] = beforeBlock;
          state.boardState.isBlockPick.isPick = false;
        }
      }),
    setIsStart: force =>
      set(state => {
        if (force) {
          state.gameState.isStart = JSON.parse(force);
        } else {
          state.gameState.isStart = !state.gameState.isStart;
        }
      }),
    setNowTurn: force =>
      set(state => {
        if (force) {
          state.gameState.nowTurn = force;
        } else {
          state.gameState.nowTurn = state.gameState.nowTurn === 'player-1' ? 'player-2' : 'player-1';
        }
      }),
    setGameAlert: detail =>
      set(state => {
        state.gameState.gameAlert.onAlert = !state.gameState.gameAlert.onAlert;
        state.gameState.gameAlert.alertDetail = detail;
      }),
  }))
);

export default useChessState;
