import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


const TransactionList = () => {
  const {transactions}= useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        
          {transactions.map(transactions =>(<li className="minus">

          ))}
         
      </ul>
    </>
  );
};

export default TransactionList;
