export interface UseToggleApp {
  openGame: Target[];
  isOpenMenuList: boolean;
  setOpenGame: (toggleState: ToggleState, target: Target) => void;
  setIsOpenMenuList: () => void;
}

type ToggleState = 'close' | 'open';
export type Target = 'Minesweeper';
