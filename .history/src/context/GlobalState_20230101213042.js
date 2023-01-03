import React,{createContext ,useRuducer} from "react";
import AppReducer from ''

//Initial State

const initialState={
   transactions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}


//Create context
export const  GlobalContext= createContext(initialState);


//Provider component 
export const GlobalProvider =({clidren})=>{
    const [state,dispatch]=useRuducer(AppReducer,initialState);

    return(<GlobalContext.Provider value={{transaction:state.transaction}}>
        {clidren}
    </GlobalContext.Provider>)

}