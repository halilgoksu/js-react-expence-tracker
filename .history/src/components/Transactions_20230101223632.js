import React from 'react'

const Transactions = ({transactions}) => {
    const sign = transactions
  return ( <li className="minus">
  {transactions.text}
  Cash <span>-$400</span>
  <button className="delete-btn">x</button>
</li>
  )
}

export default Transactions
