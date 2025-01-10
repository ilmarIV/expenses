import './Expenses.css'
import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

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
            {
            filteredExpenses.map((expense) => {
                return <ExpenseItem data={expense} key={expense.id}/>
            })
            }
        </Card>
    )
}

export default Expenses