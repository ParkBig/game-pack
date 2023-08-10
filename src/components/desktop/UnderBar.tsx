import { css } from '@emotion/react';
import WindowSVG from 'assets/svg/Window';
import GlobalStyle from 'const/globalStyle';
import useOpenGameState from 'store/useOpenGameState';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import StrictModeDroppable from 'components/ui/StrictModeDroppable';
import DraggableUnderBar from './DraggableUnderBar';

export default function UnderBar() {
  const { openGame } = useOpenGameState();

  const onDragEndHandler = (info: DropResult) => {
    const { source, destination } = info;
    console.log(source, destination);
  };

  return (
    <div css={underbar}>
      <div css={start}>
        <WindowSVG />
        start
      </div>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <StrictModeDroppable droppableId="games">
          {provided => (
            <div css={games} ref={provided.innerRef} {...provided.droppableProps}>
              {openGame.map((game, index) => (
                <DraggableUnderBar key={game} index={index} game={game} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
}

const underbar = css`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${GlobalStyle.colors.desktopUnderBarColor};
  gap: 5px;
`;
const start = css`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px outset;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: ${GlobalStyle.colors.desktopUnderBarStartBackgroundColor};
  cursor: pointer;
`;
const games = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
