import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const  AddTransaction = () => {
  const [text, setText] = useState('');
  //elinde bos bir state , ve onu icini doldurmayi beklyen baska bir state var
  //input text alani icin 

  const [amount, setAmount] = useState(0);
  //baslagic degeri 0 olan degismeyi bekleyen bir amount kardesimiz var 
  //input number alani icin 


  const { addTransaction } = useContext(GlobalContext);
  //borudan addTansaction kardesimzi transfer ettik 
  //bu bir function 
  //burda girdimiz verilelerden yeni bir transaction karti olusturmak icin kullaniriz 
  //


  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    };
    addTransaction(newTransaction);
    //olusturdugumuz yeni elemaini borudan addTra

    setText('');
    setAmount(0);
  };
  //Form da bulunan butuna tikarsak onSubmit fonk calisir
  //otamatik id si olan, texti ve amountu formdaki input alanindan alan bir eleman olsuturduk
  //adina da newTransaction koyduk  
  //bu elemani alip addTransaction(newTransaction) un icine at, o halleder 
  
  

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            //texti inputa girecigimiz value ile set eder 
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            //diger input area girdigimiz numara ile set edilecek 
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

