import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React,{useState} from "react";
function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);
   function changeTitle (){
        setTitle('Updated') ;
   }
    

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={changeTitle}>Button</button>


        </div>

    </Card> 
    );
}
export default ExpenseItem;
