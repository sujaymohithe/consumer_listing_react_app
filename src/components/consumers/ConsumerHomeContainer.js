import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getConsumerList, saveConsumerBudget } from '../../actions/consumers/ConsumerActions';
import ConsumerList from './ConsumerList';


const ConsumerHomeContainer = (props) => {
const [consumerId, setConsumerID] = useState(0);

    useEffect(() => {
        debugger;
        props.getConsumerList();
    },[consumerId])

    return (
        // <h2>Hi</h2>
        <ConsumerList
            consumers={props.consumersList}
            saveConsumerBudget={props.saveConsumerBudget}
            getConsumerList={props.getConsumerList} />
    );
}

const mapStateToProps = state => {
    return {
        consumersList: state.ConsumersReducer.martianConsumers
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getConsumerList: getConsumerList,
        saveConsumerBudget: saveConsumerBudget
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerHomeContainer);
