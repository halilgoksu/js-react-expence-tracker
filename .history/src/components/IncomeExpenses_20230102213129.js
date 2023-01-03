import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses=()=>{
    const {transactions} =useContext(GlobalContext);

    const amounts =transactions.map((transaction)=>transaction.amount);

    const income =amounts.filter((item)=>item>0).reduce((acc,item)=>(acc += item),0).toFixed(2);

    const expence =(
        amounts.filter((item)=>item<0).reduce
    )
}