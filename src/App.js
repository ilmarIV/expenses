import './App.css';
import Expenses from './comp/Expenses';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 22),
      title: 'New Book',
      price: 39.99
    },
    {
      date: new Date(2024, 10, 22),
      title: 'New Jeans',
      price: 99.99
    }
  ]

  return (
      <div className="App">
          <Expenses expenses={expenses}/>
      </div>
  )
}

export default App;
