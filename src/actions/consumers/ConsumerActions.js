import * as actionTypes from '../ActionTypes';
import commonApi from '../../api/consumers/ConsumerApi';

function receiveConsumerListData(consumers) {
    return {
        type: actionTypes.GET_CONSUMERS,
        abc: consumers
    }
}

//currying the dispatch method of the store to get all consumers
export function getConsumerList() {
    return function (dispatch) {
        debugger;
        return commonApi.getConsumersList().then(data => {
            debugger;
            dispatch(receiveConsumerListData(data));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveConsumerBudget(consumer, newTotalBudgetValue) {
    return function (dispatch) {
        return commonApi.saveConsumerBudget(consumer, newTotalBudgetValue).then(data => {
            return data;
        }).catch(error => {
            throw (error);
        });
    };
}