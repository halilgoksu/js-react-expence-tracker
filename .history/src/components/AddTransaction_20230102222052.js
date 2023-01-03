import React,{useState,useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

export cosnt AddTransaction=()=>{
    const [text,setText]= useState('');

    const [amount,setAmount]= useState(0);

    const {AddTransaction} = useContext(GlobalContext);

    const onSubmit=(e)=>{
        const newTransaction={
            id:Math.floor(Math.random()* 100000000)
        }
    }

}