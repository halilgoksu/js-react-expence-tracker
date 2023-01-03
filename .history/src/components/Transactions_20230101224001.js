import React from 'react'

const Transactions = ({transactions}) => {
    const sign = transactions.amount <0 ? '-' : '+';
  return ( <li className={transactions.amount<0 ? }>
  {transactions.text}
  Cash <span>{sign}${Math.abs(transactions.amount)}</span>
  <button className="delete-btn">x</button>
</li>
  )
}

export default Transactions
