import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpencies from './components/IncomeExpencies';
import TransactionList from './components/TransactionList';

//if app crash go i,

function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpencies />
      <AddTransaction />
      <TransactionList />
    </div>
    </>
  );
}

export default App;
