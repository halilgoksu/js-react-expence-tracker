import React,{useContext} from "react";
import {Transaction} from './Transaction';
import { GlobalContext } from "../context/GlobalState";


export const TransactionList=()=>{
    const {transactions}= useContext(GlobalContext);
    return(
        <>
        <h3></h3>
        </>
    )
}