import { info } from '../api';

const initialState = [];

export const reducer1 = (state = initialState, action)=> {
    switch(action.type) {
        case 'ALL_FILMS':
            return action.payload
        default:
            return state
    }
}