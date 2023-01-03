import React,{useState,useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

export cosnt AddTransaction=()=>{
    const [text,setText]= useState('');

    const [amount,setAmount]= useState(0);

    const {AddTransaction} = useContext(GlobalContext);

    const onSubmit=(e)=>{
        const newTransaction={
            id:Math.floor(Math.random()* 100000000),
            text,
            amount:+amount
        }
        AddTransaction(newTransaction);
        setText('');
        setAmount(0);

    };

    return(
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} 
                onChange={(e)=>setText(e.target.value)} placeholder="Enter text ...">
                </input>
            </div>
            <div className="form-control">
                <label htmlFor="amount"></label>

            </div>

        </form>
        </>
    )

}