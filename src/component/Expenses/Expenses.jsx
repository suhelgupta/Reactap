import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExspense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {filteredExspense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
