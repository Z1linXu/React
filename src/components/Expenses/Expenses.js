import React,{useState} from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {
    const [filteredYear, selectedFilterYear] =useState('2023');
    const filterChangeHandler = selectedYear => {
        console.log('expenses.js');
        console.log(selectedYear);
    }
  
    return (
        <div>


      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>

          {props.items.map((expenses) => (
              <ExpenseItem
                  key={expenses.id}
                  title={expenses.title}
                  amount={expenses.amount}
                  date={expenses.date}
              />
          ))}
      </Card>
        </div>
    );
  }
  