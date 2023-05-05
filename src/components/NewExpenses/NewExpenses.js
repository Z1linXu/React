import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";
//import './ExpenseForm.css';
const NewExpenses = () =>{
    return (<div className="new-expense">
        <ExpenseForm />
    </div>
    );
};
export default NewExpenses;