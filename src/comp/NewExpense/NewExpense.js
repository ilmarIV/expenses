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
        <div className="new-expense">
            {
                editForm
                ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonHandler}/>
                : <button type="reset" onClick={editFormHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense