import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const yearChangeHandler = (data) => {
        console.log(`${data} at expenses`)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeYear={yearChangeHandler} />
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses