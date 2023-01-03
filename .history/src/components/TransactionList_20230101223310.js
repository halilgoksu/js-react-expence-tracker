import React, { useContext } from "react";
import Transactions from "./Transactions";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (<Transactions transactions={t}>))}
      </ul>
    </>
  );
};

export default TransactionList;
