import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpencies from './components/IncomeExpencies';

function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpencies />
      <AddTransaction />
    </div>
    </>
  );
}

export default App;
