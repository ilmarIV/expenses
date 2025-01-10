import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const yearChangeHandler = (selectedYear) => {
        console.log(`${selectedYear} in expenses`)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeYear={yearChangeHandler}/>
            {
            props.expenses.map((expense) => {
                return <ExpenseItem data={expense} key={expense.id}/>
            })
            }
        </Card>
    )
}

export default Expenses