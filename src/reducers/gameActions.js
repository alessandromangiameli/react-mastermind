//@flow
export const addRow = () => {
    return {
        type : 'ROW_ADD'
    }
}      

export const checkRow = (row) => {
    return {
        type : 'ROW_CHECK',
        payload : { row } 
    }
}

export const setHole = (hole)  => {
    return {
        type : 'HOLE_SET',
        payload : { hole }
    }
}