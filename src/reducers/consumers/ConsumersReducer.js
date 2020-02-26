import * as actionTypes from '../../actions/ActionTypes'

export function ConsumersReducer(state = { martianConsumers: [] }, action) {
    debugger;
    switch (action.type) {
        case actionTypes.GET_CONSUMERS:
            return {
                ...state,
                martianConsumers: action.abc
            };
        default:
            return state;
    }

}