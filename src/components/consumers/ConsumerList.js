import React from 'react';
import ModalDynamic from '../widgets/ModalDynamic';
import toastr from "toastr";

//Created below class component, can be converted to functional component if required. Also can be used Reacts Hooks.
class ConsumerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currentBudget: 0,
            selectedRowData: []
        }
    }

    //As dataset is not in German locale, using below ECMAScript Internationalization API to convert budget values into German locale
    getGermanFormat(num) {
        return Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(num)
    }

    //below function is used to show all Martian consumers in a table
    populateMartianConsumerTable(consumer, index) {
        return (
            <tr key={index} onClick={(e) => this.handleShow(consumer)}>
                <td>{consumer.name}</td>
                <td>{consumer.date_of_first_purchase}</td>
                <td>{this.getGermanFormat(consumer.budget)}</td>
                <td>{this.getGermanFormat(consumer.budget_spent)}</td>
                <td>{this.getGermanFormat(consumer.budget - consumer.budget_spent)}</td>
            </tr>
        );
    }

    //to hide pop-up
    handleClose() {
        this.setState({ show: false })
    }

    //to show pop up and to prepopulate total budget in pop up by pushing into state
    handleShow(consumer) {
        let currentBudgetGermantFormat = this.getGermanFormat(consumer.budget).replace('€', '').trim();
        this.setState({ show: true, currentBudget: currentBudgetGermantFormat, selectedRowData: consumer })
    }

    //to handle input for total budget textbox in pop up
    handleBudgetChange(e) {
        this.setState({ currentBudget: e.target.value });
    }

    //to check total budget to be greater than or equal to budget spent
    isTotalBudgetGreaterThanBudgetSpent(changedBudgetValue, budgetSpentValue) {
        let selectedConsumerSpentBudget = Number(budgetSpentValue.toFixed(2));
        return changedBudgetValue >= selectedConsumerSpentBudget;
    }

    validateInputForGermanFormat(changedBudgetValue) {
        //to check entered budget value meets the German locale standard
        var regex = /^[1-9]\d*(((.\d{3}){0,})?(\,\d{0,2})?)$/;
        return regex.test(changedBudgetValue);
    }

    //to save total budget input change into dataset
    saveBudget() {
        let selectedRow = this.state.selectedRowData, ref = this;
        let changedBudgetValue = this.state.currentBudget;
        if (ref.validateInputForGermanFormat(changedBudgetValue)) {
            //In JS, it is recommended to handle currency as normal integer for arithmatic opearions. Hence converting german format to integar format
            let changedBudgetIntValue = changedBudgetValue.replace(/\./g, '').replace(',', '.');
            if (ref.isTotalBudgetGreaterThanBudgetSpent(changedBudgetIntValue, selectedRow.budget_spent)) {
                ref.props.saveConsumerBudget(selectedRow, changedBudgetIntValue)
                    .then((result) => {
                        if (result === 200) {
                            this.props.getConsumerList();
                            toastr.success("Saved successfully.");
                            ref.setState({ show: false });
                        }
                        else {
                            toastr.error("Error has occured !");
                        }
                    })
                    .catch(error => {
                        toastr.error('Error occured, contact admin.');
                    });;
            }
            else {
                toastr.warning('The value must not be less than the budget spent.');
            }
        }
        else {
            toastr.warning('Refer note section, please enter budget in correct german locale and upto 2 decimal points. ');
        }
    }

    render() {
        return (
            <div>
                <br />
                <h2>All Martian Consumers</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Date of first purchase</th>
                            <th>Total budget</th>
                            <th>Budget spent</th>
                            <th>Budget left</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.consumers && this.props.consumers.map(this.populateMartianConsumerTable, this)}
                    </tbody>
                </table>

                <ModalDynamic show={this.state.show}
                    onHide={(e) => this.handleClose()} title={this.state.selectedRowData.name} budget_spent={this.state.selectedRowData.budget_spent} currentBudget={this.state.currentBudget}
                    handleBudgetChange={(e) => this.handleBudgetChange(e)}
                    saveBudget={() => this.saveBudget()} />
            </div>
        );
    }
}

export default ConsumerList