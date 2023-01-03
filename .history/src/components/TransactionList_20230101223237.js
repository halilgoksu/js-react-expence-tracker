import React, { useContext } from "react";
import 
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => ())}
      </ul>
    </>
  );
};

export default TransactionList;
