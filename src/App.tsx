import Minesweeper from 'components/minesweeper/Minesweeper';
import CustomSettingModal from 'components/minesweeper/CustomSettingModal';
import useModalState from 'store/useModalState';
import Layout from 'components/ui/Layout';

export default function App() {
  const { isCustomSettingOpen } = useModalState();

  return (
    <Layout>
      <Minesweeper />
      {isCustomSettingOpen && <CustomSettingModal />}
    </Layout>
  );
}
