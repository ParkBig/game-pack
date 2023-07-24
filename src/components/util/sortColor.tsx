import GlobalStyle from 'const/globalStyle';

export const sortColor = (value: number | null) => {
  if (value === 1) {
    return GlobalStyle.colors.blue;
  }
  if (value === 2) {
    return GlobalStyle.colors.green;
  }
  if (value === 3) {
    return GlobalStyle.colors.red;
  }
  if (value === 4) {
    return GlobalStyle.colors.darkblue;
  }
  if (value === 5) {
    return GlobalStyle.colors.brown;
  }
  if (value === 6) {
    return GlobalStyle.colors.darkGreen;
  }
  if (value === 7) {
    return GlobalStyle.colors.black;
  }
  if (value === 8) {
    return GlobalStyle.colors.lightGray;
  }
  return 'black';
};
