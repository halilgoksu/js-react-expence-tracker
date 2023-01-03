import React, { useContext } from "react";
import {Transaction} from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const  TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => 
        //ddatamizn icinde bulunan her bir eleman icn bir kere render eder 
        (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      {/* 
      //her transactions dan bir kart olustur , ul nin icine li olarak at 
      //kartin takma adi transaction, name doesn't matter 
      
      */}
    </>
  );
};

