import './ExpenseItem.css' 

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>date</div>
            <div className='expense-item__description'>
                <h2>title</h2>
                <p className='expense-item__price'>price</p>
            </div>
        </div>
    )
}

export default ExpenseItem