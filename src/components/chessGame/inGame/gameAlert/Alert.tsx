import { useEffect } from 'react';
import useChessState from 'store/useChessState';
import GameAlert from './GameAlert';
import EndAlerts from './EndAlerts';
import CatchAlert from './CatchAlert';

export default function Alert() {
  const { boardState, gameState, setGotCha, setIsStart, setGameAlert } = useChessState();

  useEffect(() => {
    if (boardState.gotcha.chessmenType === 'king') {
      setIsStart('false');
      return;
    }
    if (boardState.gotcha.got) {
      const activateModal = setTimeout(() => {
        setGotCha();
      }, 1500);
      return () => clearTimeout(activateModal);
    }
    if (gameState.gameAlert.onAlert) {
      const activateModal = setTimeout(() => {
        setGameAlert('');
      }, 2000);
      return () => clearTimeout(activateModal);
    }
  }, [boardState.gotcha, gameState.gameAlert, setGameAlert, setGotCha, setIsStart]);

  return (
    <>
      {boardState.gotcha.got ? boardState.gotcha.chessmenType === 'king' ? <EndAlerts /> : <CatchAlert /> : null}
      {gameState.gameAlert.onAlert ? <GameAlert /> : null}
    </>
  );
}
