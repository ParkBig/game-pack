import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import GameButton from './GameButton';
import { RootState } from 'store/configureStore';

interface WrapProps {
  rows: number;
  cols: number;
}

export default function GameButtons() {
  const { rows, cols, blockInfoMatrix } = useSelector((state: RootState) => state.blocksState);

  return (
    <div css={wrap({ rows: rows, cols: cols })}>
      {blockInfoMatrix.map((blockInfoRow, rowIndex) =>
        blockInfoRow.map((blockInfo, colIndex) => <GameButton key={`${rowIndex}-${colIndex}`} blockInfo={blockInfo} />)
      )}
    </div>
  );
}

const wrap = (props: WrapProps) => css`
  display: grid;
  grid-template-rows: repeat(${props.rows}, 25px);
  grid-template-columns: repeat(${props.cols}, 25px);
  border: 4px inset;
`;
