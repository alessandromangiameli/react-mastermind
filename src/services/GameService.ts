import { Row, RowFilter, Results} from './GameServiceDefinition';

export const makeRandomNumber = (): number => {
    return Math.floor(Math.random() * 6) + 1;
}

export const generateCode = (allowDuplicate: boolean = false): number[] => {
    let code = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = makeRandomNumber();
        if(!allowDuplicate) {
            while(code.indexOf(randomNumber) > -1) {
                randomNumber = makeRandomNumber();
            }
        }
        code.push(randomNumber);
    }
    
    return code;
}

export const addRow = (rows: Row[] = []): Row[]  => {
    return [
        ...rows,
        {
            id: rows.length,
            holes : [0,0,0,0],
            results : {}
        }
    ]
}


export const itemsInPlace: RowFilter = (items: number[], code: number[]): number[]  => {
    return items.filter((element, index, array) => {
        return element == code[index]
    });
}

export const itemsPresent: RowFilter = (items: number[], code: number[]): number[] => {
    return items.filter((element, index) => {
        return code.indexOf(element) > -1 && code.indexOf(element) != index;
    });
}

export const hasWin = (items: number[], code: number[], filter: RowFilter = itemsInPlace): boolean => {
    return filter(items,code).length === code.length;
}

export const validateRow = (row: Row, code: number[], filterInPlace: RowFilter = itemsPresent, filterPresent: RowFilter = itemsPresent): Row => {
    return Object.assign({}, row, {
        results : {
            inPlace : filterInPlace(row.holes, code),
            present : filterPresent(row.holes, code)
        }
    })
}



