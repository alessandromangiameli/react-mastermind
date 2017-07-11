export interface Results {
    inPlace : number[],
    present: number[]
}

export interface Row {
    id: number,
    holes: number[],
    results: Results
}

export interface RowFilter {
    (items: number[], code: number[]): number[]
}
