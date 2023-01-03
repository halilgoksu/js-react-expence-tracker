import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transactions} =useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance
