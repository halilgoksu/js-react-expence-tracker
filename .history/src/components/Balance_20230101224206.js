import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transaction} =useContext(GlobalContext);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>
    </>
  )
}

export default Balance
