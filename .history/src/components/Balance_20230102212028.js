import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance=()=>{
    const {transactions}= useContext(GlobalContext);
    const amounts =transactions.map(transaction =>transaction.amount);
    const total =amounts

}