import { css } from '@emotion/react';
import GameButton from './GameButton';
import useBlocksState from 'store/useBLocksState';

interface WrapProps {
  rows: number;
  cols: number;
}

export default function GameButtons() {
  const { rows, cols, blockInfoMatrix } = useBlocksState();

  return (
    <div css={wrap({ rows: rows, cols: cols })}>
      {blockInfoMatrix.map((blockInfoRow, rowIndex) =>
        blockInfoRow.map((blockInfo, colIndex) => (
          <GameButton key={`${rowIndex}-${colIndex}`} blockInfo={blockInfo} thisRow={rowIndex} thisCol={colIndex} />
        ))
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
