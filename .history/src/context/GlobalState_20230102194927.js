import React,{createContext ,useReducer,useEffect} from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState ={
    transactions:[
        {id:1 ,text:"Horser"}
    ]
}