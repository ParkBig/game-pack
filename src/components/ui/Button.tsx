import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { MouseEventHandler } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function Button({ children, onClick, disabled, style }: Props) {
  return (
    <button css={wrap} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}

const wrap = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 3px outset;
  font-size: 1em;
  background-color: ${GlobalStyle.colors.gray};

  :active {
    border: 3px inset;
  }
`;
