import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses=()=>{
    const {transactions} =useContext(GlobalContext);

    const amounts =transactions.map((transaction)=>)
}