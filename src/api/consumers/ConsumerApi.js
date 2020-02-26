import axios from 'axios';
import * as appConstants from '../../appConstants';
class ConsumerApi {
    static getConsumersList(searchTxt) {
        debugger;
        return axios.get(appConstants.API_URL + "consumers").then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }

    static saveConsumerBudget(consumer, newTotalBudgetValue) {
        let data = {
            name: consumer.name,
            budget: Number(newTotalBudgetValue),
            budget_spent: Number(consumer.budget_spent),
            date_of_first_purchase: consumer.date_of_first_purchase
        };
        return axios.put(appConstants.API_URL + 'consumers/' + consumer.id, data).then(response => {
            return response.status;
        }).catch(error => {
            return error;
        });
    }
}

export default ConsumerApi;