import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    return (
        <>
        {
            props.expenses.length
            ? props.expenses.map((expense) => {
                return <ExpenseItem data={expense} key={expense.id}/>
            })
            : <h2>No Expenses Found</h2>
        }
        </>
    )
}

export default ExpensesList