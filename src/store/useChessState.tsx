import { Board, UseChessState } from 'types/store/useChessStateTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useChessState = create(
  immer<UseChessState>(set => ({
    isOpenChessGame: false,
    matchRoomName: null,
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
    userState: {
      myInfo: {
        gameInfo: {
          playerNum: '',
          imReady: false,
          isInGame: false,
        },
        loginInfo: {
          anyErr: false,
          isLogin: false,
          nickname: '',
          win: 0,
          lose: 0,
        },
      },
      allLoginInfo: {
        'player-1': {
          anyErr: false,
          isLogin: false,
          nickname: '',
          win: 0,
          lose: 0,
        },
        'player-2': {
          anyErr: false,
          isLogin: false,
          nickname: '',
          win: 0,
          lose: 0,
        },
      },
    },
    toggleIsOpenChessGame: () =>
      set(state => {
        state.isOpenChessGame = !state.isOpenChessGame;
      }),
    setMatchRoomName: (roomName?: string) =>
      set(state => {
        if (roomName) {
          state.matchRoomName = roomName;
          return;
        }
        state.matchRoomName = null;
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
    setChessMove: afterIndex =>
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
    setMyPlayerNum: player => {
      set(state => {
        state.userState.myInfo.gameInfo.playerNum = player;
      });
    },
    setMyReady: force => {
      set(state => {
        if (force) {
          state.userState.myInfo.gameInfo.imReady = JSON.parse(force);
        } else {
          state.userState.myInfo.gameInfo.imReady = !state.userState.myInfo.gameInfo.imReady;
        }
      });
    },
    setMyIsInGame: boolean => {
      set(state => {
        state.userState.myInfo.gameInfo.isInGame = boolean;
      });
    },
    setMyLogInInfo: async (nickname, password) => {
      try {
        const data = { nickname, password };
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const loginData = await response.json();
        localStorage.setItem('_id', loginData.data._id);
        set(state => {
          state.userState.myInfo.loginInfo = {
            anyErr: false,
            isLogin: true,
            nickname: loginData.data.nickname.split(',')[0],
            win: loginData.data.win,
            lose: loginData.data.lose,
          };
        });
      } catch (err) {
        set(state => {
          state.userState.myInfo.loginInfo.anyErr = true;
        });
      }
    },
    setMyOdds: async isWin => {
      try {
        const data = {
          _id: localStorage.getItem('_id') as string,
          isWin,
        };
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/gameResult`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const resData = await response.json();
        const { win, lose } = resData.data;
        set(state => {
          state.userState.myInfo.loginInfo.win = win;
          state.userState.myInfo.loginInfo.lose = lose;
        });
      } catch (err) {
        set(state => {
          state.userState.myInfo.loginInfo.anyErr = true;
        });
      }
    },
    setAllLoginInfo: opponentInfo => {
      set(state => {
        state.userState.allLoginInfo = opponentInfo;
      });
    },
  }))
);

export default useChessState;
