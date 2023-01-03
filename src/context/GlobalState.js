import React,{createContext ,useReducer} from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState ={
    transactions:[
        {id:1 ,text:"Horse", amount: -244},
        {id:2 , text:'Salary',amount:4650}
    ]
}

//Create context
export const GlobalContext= createContext(initialState);


//Provide Component
export const GlobalProvider =({children})=>{

    const [state,dispatch]= useReducer(AppReducer,initialState)

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        });

    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}