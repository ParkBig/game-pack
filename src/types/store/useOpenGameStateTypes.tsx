export interface UseOpenGameStateTypes {
  openGame: Target[];
  setOpenGame: (toggleState: ToggleState, target: Target) => void;
}

type ToggleState = 'close' | 'open';
export type Target = 'Minesweeper';
