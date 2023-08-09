import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import SelectOption from './SelectOption';
import { Options } from 'types/store/UseBlocksState';

const options: Options[] = ['New', 'Beginner', 'Intermediate', 'Expert', 'Custom'];

export default function GameModeSelector() {
  return (
    <div css={wrap}>
      {options.map(option => (
        <SelectOption key={option} optionValue={option} />
      ))}
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  background-color: ${GlobalStyle.colors.gray};
  border: 4px double gray;
  position: absolute;
  top: 2em;
  left: 0;
`;
