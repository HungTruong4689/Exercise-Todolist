import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';
const AddNewItem = (props) => {
    const [show, setShow] = useState(false);

  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredDeadline, setEnteredDeadline] = useState('');
    const [enteredStatus, setenteredStatus] = useState('Done');
    const enteredTitleChangeHandler = event =>{
        setEnteredTitle(event.target.value);
    }
    const enteredDeadlineChangeHandler = event =>{
        setEnteredDeadline(event.target.value);
    }
    const enteredStatusChangeHandler = event =>{
        setenteredStatus(event.target.value);
    }
    const addTodolistHandler = event =>{
        event.preventDefault();
        console.log(enteredTitle,enteredDeadline,enteredStatus);
        
        props.onAddTodolist(enteredTitle,enteredDeadline,enteredStatus);
        setEnteredTitle('');
        setEnteredDeadline('');
        setenteredStatus('Done')
    }
    return (
        <div className="main-header" style={{margin:"100px auto"}}>
            <div className="container" style={{display:"flex", justifyContent:"center"}}>
        <Button style={{ width: '18rem' }} className="btn btn-primary" onClick={handleShow}>Add a new todo</Button>
      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header >
          <Modal.Title>Add a new todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control type="text" placeholder="Title" 
          onChange={enteredTitleChangeHandler} 
            value={enteredTitle}/>
            <br/>
          <Form.Control type="text" placeholder="Deadline" 
          onChange={enteredDeadlineChangeHandler} 
            value={enteredDeadline}/>
            <br/>
          <Form.Select onChange={enteredStatusChangeHandler} 
            value={enteredStatus}>
              <option>Done</option>
              <option>Not started</option>
              <option>In progress</option>
          </Form.Select>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={addTodolistHandler}>Add</Button>
      </Modal.Footer>
      </Modal>
        </div>
    </div>
    );
};

export default AddNewItem;