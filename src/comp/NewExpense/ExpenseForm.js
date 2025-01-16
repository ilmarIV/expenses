import { useRef, useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props)=> {

    const titleInputReference = useRef()
    const priceInpuitReference = useRef()
    const dateInputReference = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputReference.current.value
        const enteredPrice = priceInpuitReference.current.value
        const enteredDate = dateInputReference.current.value

        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        titleInputReference.current.value = ''
        priceInpuitReference.current.value = ''
        dateInputReference.current.value = ''
    }

    const cancelHandler = (event) => {
        props.onCancel()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        ref={titleInputReference}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        ref={priceInpuitReference}
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        ref={dateInputReference}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit" onChange={submitHandler}>Add Expense</button>
                <button type="reset" onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm