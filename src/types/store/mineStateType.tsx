export interface MinesInitialState {
  row: number;
  col: number;
  isGameEnd: boolean;
  mines: Mine[];
}
export interface Mine {
  id: string;
  matrixIndex: [number, number];
  isClick: boolean;
  value: Value;
}
export type Value = 'mine' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null;

export interface SetRowColPayloadAction {
  row?: number;
  col?: number;
}
