import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import { useState } from 'react'

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setEditForm(false)
    }

    const cancelButtonHandler = () => {
        setEditForm(false)
    }

    const editFormHandler = () => {
        setEditForm(true)
    }

    return (
        editForm
        ?
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}/>
        </div>
        :
        <div className="new-expense">
            <button type="reset" onClick={editFormHandler}>Add New Expense</button>
        </div>
    )
}

export default NewExpense