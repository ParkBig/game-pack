import { css } from '@emotion/react';
import StartMenu from './StartMenu';
import useToggleAppState from 'store/useToggleAppState';

export type MenuList = '지뢰찾기';

const menuList: MenuList[] = ['지뢰찾기'];

export default function StartMenuList() {
  const { isOpenMenuList } = useToggleAppState();

  return <div css={wrap}>{isOpenMenuList && menuList.map(menu => <StartMenu key={menu} type={menu} />)}</div>;
}

const wrap = css`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  position: absolute;
  left: 0;
  bottom: 40px;
`;
