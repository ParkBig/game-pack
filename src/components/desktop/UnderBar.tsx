import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import StrictModeDroppable from 'components/ui/StrictModeDroppable';
import DraggableUnderBar from './DraggableUnderBar';
import ToggleStartMenu from './ToggleStartMenu';
import useToggleAppState from 'store/useToggleAppState';

export default function UnderBar() {
  const { openGame } = useToggleAppState();

  const onDragEndHandler = (info: DropResult) => {
    const { source, destination } = info;
    console.log(source, destination);
  };

  return (
    <div css={underbar}>
      <ToggleStartMenu />
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
const games = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
