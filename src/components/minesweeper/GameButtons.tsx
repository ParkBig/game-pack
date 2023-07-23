import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import GameButton from './GameButton';
import { RootState } from 'store/configureStore';

interface WrapProps {
  row: number;
  col: number;
}

export default function GameButtons() {
  const mines = useSelector((state: RootState) => state.minesState);
  console.log(mines);
  const a = Array.from({ length: 64 }, (_, index) => index + 1);
  return (
    <div css={wrap({ row: 8, col: 8 })}>
      {a.map(prop => (
        <GameButton key={prop} testValue={prop} />
      ))}
    </div>
  );
}

const wrap = (props: WrapProps) => css`
  display: grid;
  grid-template-rows: repeat(${props.row}, 25px);
  grid-template-columns: repeat(${props.col}, 25px);
  border: 4px inset;
`;
