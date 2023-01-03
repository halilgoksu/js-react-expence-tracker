import React,{createContext ,useReducer,useEffect} from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState ={
    transactions:[
        {id:1 ,text:"Horse", amount: -244},
        {id:2 , text:'Salary',amount:4650}
    ]
}

//Create context
export const GlobalContext= createContext()