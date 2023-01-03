import React, { createContext, useReducer,useEffect } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]
}
//elimizde olan datamiz , burdaki verileri tek tek borudan gonderip 
//UI daki kaliba yerlestiriyoruz 
//buradki data default datadir , eger ekleme yada cikarma yaparsak buraya yansimaz 
//UI da olan orda kalir , yenileme yaptigin zaman data gider 
//icini bos birkirsan [] bos array olur , default bos olur 



//Create context
export const GlobalContext = createContext(initialState);
//borunun adini globalContext yaptik 


//Provider component
export const GlobalProvider = ({ children }) => {
  //children alt butun componanatleri ifade eder


  const [state, dispatch] = useReducer(AppReducer,initialState )
  //state elimize olan arryimiz, data , bos yada dolu fark etmez 
  //initialState ile state ayni seyi ifade eder 
  //bu datayi dispatch type  ile degistircegiz, ki o da AppReducer dan gelir 

  useEffect(() => {
    //console.log(initialState);
  })


  //Actions 
  function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload:id
    });
    //Transaction.js den geliyorum 
    //UI da transaction un yanindaki kirmiz x butonuna tiklaridgimz zaman 
    //fonkisyon deleteTransactionun icine id yi atar
    //Context borusunda buraya godnerir 
    //dispatc AppReducer derki paralo DELETE id is ahanda bu 
    //isini yap der 

  }


  function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload:transaction
    });
  }
  //AddTransactin

  return (
    <GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
      {children}
    </GlobalContext.Provider>

    //It will provide all state an action with other components 
    
  );
};
