import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    return (
        <>
        {
            props.expenses.length
            ?
            <ul className="expenses-list">
                {
                props.expenses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id}/>
                })
                }
            </ul>
            :
            <p className="expenses-list__fallback">No Expenses Found</p>
        }
        </>
    )
}

export default ExpensesList