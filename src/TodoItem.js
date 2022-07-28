import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import "./TodoItem.css"
const TodoItem = (props) => {
    const handleColor = () => { 
        return props.status==="Done" ? "success" : (props.status==="Not started"? "danger" : "warning")
    }
    return (
            <div className="boxItem" >
            
                
                <div className={`item-status ${handleColor()}`}
                style={{margin:"0", padding:"0"}}>
                    
                </div>
            
                <div className="textItem">
                    <div className="title">{props.title}</div>
                    <div className="deadline">Deadline: {props.deadline}</div>
                </div>
            </div>
        
    );
};

export default TodoItem;