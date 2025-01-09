import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=> {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Price</label>
                    <input
                        type="number"
                        onChange={priceChangeHandler}
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input
                        type="date"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm