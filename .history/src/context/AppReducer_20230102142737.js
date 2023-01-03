//gelen key word gore action yap

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter( transaction => transaction.id !== 
          action.payload)
      }

      //GlobalState den geln key word ve beraberinde getirdigi id ile 
      //yeni state i gunceller 
      //listeye bakan hig ismini goremeince siktir olup gider
      //ama Donusu MUHTESEM olacaktik (finger :) 


    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions:[action.payload, ...state.transactions]
      };
      //GlobalState den gliyourum 

    default:
      return state;
  }
};
