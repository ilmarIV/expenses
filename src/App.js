import { useState } from 'react';
import './App.css';
import Expenses from './comp/Expenses/Expenses';
import NewExpense from './comp/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 22),
    title: 'New Book',
    price: 39.99
  },
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 22),
    title: 'New Jeans',
    price: 99.99
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
      <div className="App">
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses expenses={expenses}/>
      </div>
  )
}

export default App;
