import './App.css';
import {Balance} from './components/Balance';
import Header from './components/Header';
import IncomeExpencies from './components/IncomeExpencies';

function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpencies />
    </div>
    </>
  );
}

export default App;
