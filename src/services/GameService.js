export const makeRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

export const generateCode = (allowDuplicate = false) => {
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

export const addRow = (rows = [])  => {
    return [
        ...rows,
        {
            id: rows.length,
            holes : [0,0,0,0]
        }
    ]
}


export const itemsInPlace = (items, code)  => {
    return items.filter((element, index, array) => {
        return element == code[index]
    });
}

export const itemsPresent = (items, code) => {
    return items.filter((element, index) => {
        return code.indexOf(element) > -1 && code.indexOf(element) != index;
    });
}

export const hasWin = (items, code, filter = itemsInPlace) => {
    return filter(items,code).length === code.length;
}

export const validateRow = (row, code, filterInPlace = itemsPresent, filterPresent = itemsPresent) => {
    return Object.assign({}, row, {
        results : {
            inPlace : filterInPlace(row.holes, code),
            present : filterPresent(row.holes, code)
        }
    })
}



