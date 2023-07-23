import { css } from '@emotion/react';
import GlobalStyle from 'const/globalStyle';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
  return (
    <button css={wrap} {...props}>
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
