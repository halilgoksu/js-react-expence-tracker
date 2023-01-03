import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transaction} =useC
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>
    </>
  )
}

export default Balance
