import React,{ useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const  IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  //borudan transactions datamizi(obje) alidik 

  const amounts = transactions.map((transaction) => transaction.amount);
  //adlgimzi datinin icinindeki butun amounlari getirdik 
  //console.log(amounts) //(4) [-20, 300, -10, 150]

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    console.log(itma)

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          {expense}
        </p>
      </div>
    </div>
    //ekrana toplam expence ve income u hesplayip yazar

  );
};

