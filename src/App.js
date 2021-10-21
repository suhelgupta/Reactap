// import Expenses from './component/Expenses';
import React, { useState } from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Chocolate',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'TEst',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (newExpense) => {
    // expenses.push(newExpense);
    // setExpenses([newExpense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
