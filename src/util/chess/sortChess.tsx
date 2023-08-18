import { ChessColor, Chessmen } from 'types/store/useChessStateTypes';

import whiteBishop from 'assets/chess/chessmen/white-bishop.png';
import whiteKing from 'assets/chess/chessmen/white-king.png';
import whiteKnight from 'assets/chess/chessmen/white-knight.png';
import whitePawn from 'assets/chess/chessmen/white-pawn.png';
import whiteQueen from 'assets/chess/chessmen/white-queen.png';
import whiteRook from 'assets/chess/chessmen/white-rook.png';
import blackBishop from 'assets/chess/chessmen/black-bishop.png';
import blackKing from 'assets/chess/chessmen/black-king.png';
import blackKnight from 'assets/chess/chessmen/black-knight.png';
import blackPawn from 'assets/chess/chessmen/black-pawn.png';
import blackQueen from 'assets/chess/chessmen/black-queen.png';
import blackRook from 'assets/chess/chessmen/black-rook.png';

const sortChess = (chessColor: ChessColor, chessmenType: Chessmen) => {
  if (chessColor === 'white') {
    if (chessmenType === 'bishop') {
      return whiteBishop;
    }
    if (chessmenType === 'king') {
      return whiteKing;
    }
    if (chessmenType === 'knight') {
      return whiteKnight;
    }
    if (chessmenType === 'pawn') {
      return whitePawn;
    }
    if (chessmenType === 'queen') {
      return whiteQueen;
    }
    if (chessmenType === 'rook') {
      return whiteRook;
    }
  }
  if (chessColor === 'black') {
    if (chessmenType === 'bishop') {
      return blackBishop;
    }
    if (chessmenType === 'king') {
      return blackKing;
    }
    if (chessmenType === 'knight') {
      return blackKnight;
    }
    if (chessmenType === 'pawn') {
      return blackPawn;
    }
    if (chessmenType === 'queen') {
      return blackQueen;
    }
    if (chessmenType === 'rook') {
      return blackRook;
    }
  }
  if (!chessColor) {
    return undefined;
  }
};

export default sortChess;
