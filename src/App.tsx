import normalize from 'emotion-normalize';
import { Global, css } from '@emotion/react';
import Minesweeper from 'components/minesweeper/Minesweeper';
import GlobalStyle from 'const/globalStyle';
import CustomSettingModal from 'components/minesweeper/CustomSettingModal';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';

export default function App() {
  const isCustomSettingOpen = useSelector((state: RootState) => state.modalsState.isCustomSettingOpen);

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Wallpoet&display=swap');
          ${normalize}
          body {
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(${GlobalStyle.backgroundImageUrl});
            background-size: cover;
            background-position: center;
          }
        `}
      />
      <Minesweeper />
      {isCustomSettingOpen && <CustomSettingModal />}
    </>
  );
}
