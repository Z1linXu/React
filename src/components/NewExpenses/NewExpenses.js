import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";
//import './ExpenseForm.css';
const NewExpenses = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{ //get children class's data
        const expenseData ={
            ...enteredExpenseData,//copy enteredExpenseDta
            id: Math.random().toString()//give a random ID
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export default NewExpenses;