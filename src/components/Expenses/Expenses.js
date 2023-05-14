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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
        </div>
    );
  }
  