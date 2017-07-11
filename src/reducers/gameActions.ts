import actionCreatorFactory from 'typescript-fsa';
import { Row, Results } from 'services/GameServiceDefinition';

const actionCreator = actionCreatorFactory();

export const addRow = actionCreator<{}>('ROW_ADD');
export const checkRow = actionCreator<{row: Row}>('ROW_CHECK');
export const setHole = actionCreator<{hole: Results}>('HOLE_SET');
