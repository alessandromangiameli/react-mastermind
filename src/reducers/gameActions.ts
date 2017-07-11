import { Row, Results } from 'services/GameServiceDefinition';

export const addRow = () => {
    return {
        type : 'ROW_ADD'
    }
}      

export const checkRow = (row: Row) => {
    return {
        type : 'ROW_CHECK',
        payload : { row } 
    }
}

export const setHole = (hole: Results)  => {
    return {
        type : 'HOLE_SET',
        payload : { hole }
    }
}