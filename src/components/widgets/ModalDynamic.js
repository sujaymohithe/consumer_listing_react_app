import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalDynamic(props) {
  const { show, title, currentBudget, handleBudgetChange, budget_spent, onHide, saveBudget } = props;
  return (
    <Modal show={show} onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title} 
        </Modal.Title>
      </Modal.Header>
      {/* Modal Body can be made dynamic by calling renderBody custom function based on modal title */}
      {/* Currently its not dynamic since we have only 1 modal popup in application */}
      <Modal.Body>
        <h5>Total Budget (€): </h5>
        <input id="total_budget" type="text" name="total_budget" value={currentBudget} onChange={handleBudgetChange} /><br/><br/>
        <h5>Budget Spent (€): {budget_spent && Number(budget_spent).toFixed(2)}</h5><br/>
        <p><b>Note - </b>Please enter value in German locale and upto 2 decimals only, for example -</p>
        <ul>
          <li>10.000,00</li>
          <li>4.500,60</li>
          <li>451,38</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} id="closeBtn">Close</Button>
        <Button variant="primary" onClick={saveBudget}>Save Changes</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default ModalDynamic;