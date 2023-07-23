import { css } from '@emotion/react';
import Button from 'components/ui/Button';

interface Props {
  testValue: number;
}

export default function GameButton({ testValue }: Props) {
  const onMouseDown = () => {
    // 이때 마인세팅이 안되있다면 세팅. 이떄 눌린 버튼은 무조건 마인이 아님.
    console.log('d');
  };

  const onMouseUp = () => {
    // 마인 판별 알고리즘 연결
    console.log('u');
  };

  return (
    <div css={btn}>
      <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        {testValue}
      </Button>
    </div>
  );
}

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
