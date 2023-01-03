import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const  Balance = () => {
  const {transactions} =useContext(GlobalContext);
  //useContext borusundan transaction muzu aldik . yani; [datamiz]

  const amounts = transactions.map(transaction => transaction.amount);
  //amounts : datamizda bulunan butun paralar 

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //total : masraflar ve olan parayi hesaplar 
  

    console.log(total)
  return (
    < classNAme>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

