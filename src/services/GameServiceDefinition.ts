export interface Results {
    inPlace? : number[],
    present?: number[]
}

export interface Row {
    id: number,
    holes: number[],
    results: Results
}

export interface RowFilter {
    (items: number[], code: number[]): number[]
}

export interface Action {
  type: string;
  payload: Object;
  error?: boolean;
  meta?: Object;
}

export interface State {
    code?: number[];
    rows?: Row[];
    hasWin?: boolean;
}
