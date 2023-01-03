import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const  Balance = () => {
  const {transactions} =useContext(GlobalContext);
  //useContext borusundan transaction muzu aldik . yani; [datamiz]

  const amounts = transactions.map(transaction => transaction.amount);
  //amounts : datamizda bulunan butun paralar 
  //gelen objenin icinde amounlari hepsini aldik 

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //total : masraflar ve olan parayi hesaplar 
  //aldigimiz amounlarin hepsini toplayip total denilen bir sonc bulduk 
  //reduce(acc,item), 
  

  return (
    <div className='balance'>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

