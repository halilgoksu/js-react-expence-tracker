import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import {Header} from './components/Header';
import IncomeExpencies from './components/IncomeExpencies';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

//if app crash go dont export default// 

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className='container'>
      <Balance />
      {/* <IncomeExpencies />
      <AddTransaction />
      <TransactionList /> */}
    </div>
    </GlobalProvider>
  );
}

export default App;
