import "./App.css";
import {AddTransaction} from './components/AddTransaction';
import {Balance} from './components/Balance';
import {Header} from './components/Header';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';

import {GlobalProvider} from './context/GlobalState';


fucntion App(){
    return(
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpenses />
                <AddTransaction />
                <T

            </div>
        </GlobalProvider>
    )
}