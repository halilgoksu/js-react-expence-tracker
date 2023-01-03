import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const  Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  //Context brousunda gelen deleteTransaction elemanini al ve kullan 

  const sign = transaction.amount < 0 ? "-" : "+";
  console.log(transaction.id)

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {/* //eger amount eksi ise red , ati ise yesil , amount a gore className */}

      {transaction.text}
      {/* input da text alanina girdigimiz text */}

      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
      delete e bastigimiz zaman . fonskiyon tikladigimiz elemanin id sini alip gider 
    </li>
  );
};

