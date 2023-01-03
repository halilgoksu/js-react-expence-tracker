import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const  Balance = () => {
  const {transactions} =useContext(GlobalContext);
  //useContext borusundan transaction muzu aldik . yani; [datamiz]

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    console.log(amounts)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

