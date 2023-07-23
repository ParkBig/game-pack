import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';

export default function SettingBar() {
  return (
    <div css={wrap}>
      <div>
        <span>Game</span>
      </div>
      <div>
        <span>Option</span>
      </div>
    </div>
  );
}

const wrap = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background-color: ${GlobalStyle.colors.settingBarBackgroundColor};
  gap: 15px;
  border: 1px solid gray;
`;
