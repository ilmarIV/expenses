import './Expenses.css'
import { useState } from 'react'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [displayYear, setDisplayYear] = useState(new Date().getFullYear().toString())
    const yearChangeHandler = (selectedYear) => {
        setDisplayYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === displayYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={displayYear} onChangeYear={yearChangeHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses