import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = ({transactions}) => {
    const {deleteTransaction}=useContext(GlobalContext);

    const sign = transactions.amount <0 ? '-' : '+';
  return ( <li className={transactions.amount<0 ? 'minus':'plus'}>
  {transactions.text}
  Cash <span>{sign}${Math.abs(transactions.amount)}</span>
  <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
</li>
  )
}

export default Transactions
