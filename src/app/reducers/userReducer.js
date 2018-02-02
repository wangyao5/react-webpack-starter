import { FETCH_LOGIN_ACTION } from '../actions/actionTypes';

const initState = {
    data:Array
}

export function loginReducer(state = {data:[]}, action) {
    switch (action.type) {
        case FETCH_LOGIN_ACTION:
            console.dir(state)
            console.dir(action)
            return Object.assign({}, state, {
                data:state.data ? state.data.concat(action.data.body) : action.data.body
            });
        break;
        default: return {data:[]};
    }
}