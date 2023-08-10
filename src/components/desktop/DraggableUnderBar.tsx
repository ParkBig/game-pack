import { css } from '@emotion/react';
import CloseSVG from 'assets/svg/Close';
import { Draggable } from 'react-beautiful-dnd';
import useMinesweeperState from 'store/useMinesweeperState';
import useOpenGameState from 'store/useOpenGameState';
import { Target } from 'types/store/useOpenGameStateTypes';

interface Props {
  game: Target;
  index: number;
}

export default function DraggableUnderBar({ game, index }: Props) {
  const { setOpenGame } = useOpenGameState();
  const { toggleIsOpenMinesweeper } = useMinesweeperState();

  const closeGameHandler = () => {
    setOpenGame('close', game);
    if (game === 'Minesweeper') {
      toggleIsOpenMinesweeper();
    }
  };

  return (
    <Draggable draggableId={game} index={index}>
      {provided => {
        const transform = provided.draggableProps.style?.transform;
        if (transform) {
          const t = transform.split(',');
          provided.draggableProps.style!.transform = t[0] + ',0px)';
        }
        return (
          <div css={gameBar} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {game}
            <div css={close} onClick={closeGameHandler}>
              <CloseSVG />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

const gameBar = css`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px outset gray;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;
const close = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;
