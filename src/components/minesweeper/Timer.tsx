import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import useBlocksState from 'store/useBLocksState';

export default function Timer() {
  const { timer, isGameProgress, setTimer } = useBlocksState();
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isGameProgress) {
      interval.current = setInterval(() => {
        setTimer();
      }, 1000);
    } else if (!isGameProgress && timer !== 0) {
      clearInterval(interval.current!);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isGameProgress, timer, setTimer]);

  return (
    <div css={wrap}>
      <span>{timer}</span>
    </div>
  );
}

const wrap = css`
  width: 55px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px inset gray;
  background-color: black;
  color: red;
  font-family: 'Wallpoet', cursive;
`;
