import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext);

    const sign = transaction.amount <0 ? '-' : '+';
  return ( <li className={transaction.amount<0 ? 'minus':'plus'}>
  {transaction.text}
  Cash <span>{sign}${Math.abs(transactions.amount)}</span>
  <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
</li>
  )
}

export default Transactions
